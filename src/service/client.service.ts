import Client from "../schema/client.schema";
import User from "src/schema/user.schema";
import { AppError } from "src/models/errors.model";
import { HttpStatus } from "src/utils/http-status";
import { ClientUpdateDto } from "src/dtos/client.dto";
import { cpfIsValid } from "src/utils/utilities";

const validateIfClientExists = async (id: string) => {
  const client = Client.findByPk(id);
  if (!client) throw new AppError("Cliente não encontrado.", HttpStatus.OK);
  return client;
};

export const createClientService = async (body: any) => {
  if (!cpfIsValid(body.person_registration_number)) {
    throw new AppError("CPF informado é inválido", HttpStatus.BAD_REQUEST);
  }

  const personRegistretionNumberAlreadyExists = await Client.findOne({
    where: { person_registration_number: body.person_registration_number },
  });

  if (personRegistretionNumberAlreadyExists) {
    throw new AppError(
      "Cliente com CPF Já cadastrado.",
      HttpStatus.BAD_REQUEST
    );
  }

  return await Client.create(body);
};

export const updateClientService = async (
  id: string,
  client: ClientUpdateDto
) => {
  const clientUpdated = await validateIfClientExists(id);
  if (!clientUpdated) {
    throw new AppError("Cliente não encontrado.", HttpStatus.OK);
  }

  clientUpdated.set(client);
  if (!clientUpdated.changed()) {
    throw new AppError(
      "Nenhuma atualização foi realizada.",
      HttpStatus.BAD_REQUEST
    );
  }
  return await clientUpdated.update(client);
};

export const getClientByIdService = async (id: string, auth: string) => {
  const userGetPermission = await User.findByPk(auth);
  const { role } = userGetPermission.dataValues;

  if (role != "Admin" || role != "Supervisor") {
    throw new AppError(
      "Apenas administradores/supervisores podem visualizar dados dos clientes.",
      HttpStatus.UNAUTHORIZED
    );
  }
  return await validateIfClientExists(id);
};

export const getAllClientsService = async (auth: string) => {
  const userGetPermission = await User.findByPk(auth);
  const { role } = userGetPermission.dataValues;

  if (role != "Admin" || role != "Supervisor") {
    throw new AppError(
      "Apenas administradores/supervisores podem visualizar dados dos clientes.",
      HttpStatus.UNAUTHORIZED
    );
  }
  return await Client.findAll();
};

export const deleteClientByIdService = async (id: string) => {
  await validateIfClientExists(id);
  return await Client.destroy({ where: { id } });
};
