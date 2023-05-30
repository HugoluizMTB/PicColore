import { Request, Response } from "express";
import { ClientService } from "../service/index.service";

const createClient = async (req: Request, res: Response) => {
  const body = req.body;
  const client = await ClientService.createClientService(body);
  res.status(201).json(client);
};

const updateClient = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  const client = await ClientService.updateClientService(id, body);
  res.status(200).json(client);
};

const getClientById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const auth = req.body.auth;
  const client = await ClientService.getClientByIdService(id, auth);
  res.status(201).json(client);
};

const getAllClients = async (req: Request, res: Response) => {
  const auth = req.body.auth;
  const client = await ClientService.getAllClientsService(auth);
  res.status(200).json(client);
};

const deleteClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await ClientService.deleteClientByIdService(id);
  res.status(204).json(client);
};

export {
  createClient,
  updateClient,
  getClientById,
  getAllClients,
  deleteClient,
};
