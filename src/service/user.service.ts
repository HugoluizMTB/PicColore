import User from "../schema/user.schema";
import argon2 from "argon2";
import { randomBytes } from "crypto";
import { UserUpdateDto } from "src/dtos/user.dto";
import { AppError } from "src/models/errors.model";
import { UserModel } from "src/models/user.model";
import { HttpStatus } from "src/utils/http-status";

const validateIfUserExists = async (id: string) => {
  const user = User.findByPk(id, { attributes: { exclude: ["password", "salt"] } });
  if (!user) throw new AppError("Usuário não encontrado.", HttpStatus.OK);
  return user;
};

export const createUserService = async (user: UserModel) => {
  const salt = randomBytes(128).toString("base64");
  const hashedPassword = await argon2.hash(user.password.trim() + salt);

  const emailAlreadyExist = await User.findOne({
    where: { email: user.email },
  });

  if (emailAlreadyExist) {
    throw new AppError("E-mail já cadastrado.", HttpStatus.BAD_REQUEST);
  }

  const createUser = await User.create({
    ...user,
    password: hashedPassword,
    salt: salt,
  });

  return createUser;
};

export const updateUserService = async (
  id: string,
  auth: string,
  user: UserUpdateDto
) => {
  const userUpdated = await User.findByPk(id);
  if (!userUpdated) {
    throw new AppError("Usuário não encontrado.", HttpStatus.OK);
  }

  if (user.role) {
    const userSetPermission = await User.findByPk(auth);
    if (userSetPermission.dataValues.role != "Admin") {
      throw new AppError(
        "Apenas administradores podem atualizar permissão de usuário.",
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  userUpdated.set(user);
  if (!userUpdated.changed()) {
    throw new AppError(
      "Nenhuma atualização foi realizada.",
      HttpStatus.BAD_REQUEST
    );
  }

  const updated = await userUpdated.update(user);
  return updated;
};

export const getUserByIdService = async (id: string) => {
  return await validateIfUserExists(id);
};

export const getAllUsersService = async (auth: string) => {
  const userGetPermission = await User.findByPk(auth);

  if (userGetPermission.dataValues.role != "Admin") {
    throw new AppError(
      "Apenas administradores podem visualizar dados dos usuários.",
      HttpStatus.UNAUTHORIZED
    );
  }

  return await User.findAll({
    attributes: { exclude: ["password", "salt"] },
  });
};

export const deleteUserByIdService = async (id: string) => {
  await validateIfUserExists(id);
  const deletedUser = await User.destroy({ where: { id } });
  if (!deletedUser) {
    throw new AppError(
      "Não foi possível deletar usuário.",
      HttpStatus.BAD_REQUEST
    );
  }
};
