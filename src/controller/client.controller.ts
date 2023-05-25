import { Request, Response } from "express";
import { ClientService } from "../service/index.service";

const createClient = async (req: Request, res: Response) => {
  const body = req.body;
  const createClient = await ClientService.createClientService(body);
  res.send(createClient).status(201);
};

const getClientByCPF = async (req: Request, res: Response) => {
  const body = req.body;
  const getClient = await ClientService.getClientByCPFService(body);
  res.send(getClient).status(200);
};

const destroyClientByCPF = async (req: Request, res: Response) => {
  const body = req.body;
  const destroyClient = await ClientService.destroyClientByCpfService(body);
  res.send(destroyClient).status(204);
};

export { 
  createClient, 
  getClientByCPF, 
  destroyClientByCPF
};
