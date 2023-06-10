import Employee from "../schema/employee.schema";
import argon2 from "argon2";
import { randomBytes } from "crypto";
import { EmployeeUpdateDto } from "src/dtos/employee.dto";
import { AppError } from "src/models/errors.model";
import { EmployeeModel } from "src/models/employee.model";
import { HttpStatus } from "src/utils/http-status";

const validateIfEmployeeExists = async (id: string) => {
  const employee = Employee.findByPk(id, { attributes: { exclude: ["password", "salt"] } });
  if (!employee) throw new AppError("Usuário não encontrado.", HttpStatus.OK);
  return employee;
};

export const createEmployeeService = async (employee: EmployeeModel) => {
  const salt = randomBytes(128).toString("base64");
  const hashedPassword = await argon2.hash(employee.password.trim() + salt);

  const emailAlreadyExist = await Employee.findOne({
    where: { email: employee.email },
  });

  if (emailAlreadyExist) {
    throw new AppError("E-mail já cadastrado.", HttpStatus.BAD_REQUEST);
  }

  const createEmployee = await Employee.create({
    ...employee,
    password: hashedPassword,
    salt: salt,
  });

  return createEmployee;
};

export const updateEmployeeService = async (
  id: string,
  auth: string,
  employee: EmployeeUpdateDto
) => {
  const employeeUpdated = await Employee.findByPk(id);
  if (!employeeUpdated) {
    throw new AppError("Usuário não encontrado.", HttpStatus.OK);
  }

  if (employee.role) {
    const employeeSetPermission = await Employee.findByPk(auth);
    if (employeeSetPermission.dataValues.role != "Admin") {
      throw new AppError(
        "Apenas administradores podem atualizar permissão de usuário.",
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  employeeUpdated.set(employee);
  if (!employeeUpdated.changed()) {
    throw new AppError(
      "Nenhuma atualização foi realizada.",
      HttpStatus.BAD_REQUEST
    );
  }

  const updated = await employeeUpdated.update(employee);
  return updated;
};

export const getEmployeeByIdService = async (id: string) => {
  return await validateIfEmployeeExists(id);
};

export const getAllEmployeesService = async (auth: string) => {
  const employeeGetPermission = await Employee.findByPk(auth);

  if (employeeGetPermission.dataValues.role != "Admin") {
    throw new AppError(
      "Apenas administradores podem visualizar dados dos usuários.",
      HttpStatus.UNAUTHORIZED
    );
  }

  return await Employee.findAll({
    attributes: { exclude: ["password", "salt"] },
  });
};

export const deleteEmployeeByIdService = async (id: string) => {
  await validateIfEmployeeExists(id);
  const deletedEmployee = await Employee.destroy({ where: { id } });
  if (!deletedEmployee) {
    throw new AppError(
      "Não foi possível deletar usuário.",
      HttpStatus.BAD_REQUEST
    );
  }
};
