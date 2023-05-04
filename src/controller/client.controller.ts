import Client from "../schema/client.schema";
import { Request, Response } from "express";
import { ClientService } from "../service/index.service";

const createClient = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { client_fullname, client_cpf, client_phone_number, client_visits } = body
      const checkIfClientExists = await ClientService.checkIfClientExistsByCPF(client_cpf)
      if (checkIfClientExists) {
        res.send({ msg: "Cliente Já se encontra cadastrado"})
      } else {
        const addClient = await Client.create({
          client_fullname,
          client_cpf,
          client_phone_number,
          client_visits
        })
        res.status(201).json(addClient)
      }
    } catch (error) {
      console.log(error);
      res.status(406).send({ msg: "Erro ao criar cliente" })
    }
  }

const getClientByCPF = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { client_cpf } = body
    const checkIfClientExists = await ClientService.checkIfClientExistsByCPF(client_cpf)
    if (!checkIfClientExists) {
      res.send({ msg: "Cliente não encontrado"})
    } else {
      const getClient = await Client.findOne({ where: { client_cpf } })
      res.status(200).json(getClient)
    }
  } catch (error) {
    console.log(error);
    res.status(406).send({ msg: "Erro ao encontrar cliente" })
  }
}

const destroyClientByCPF = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { client_cpf } = body
    const checkIfClientExists = await ClientService.checkIfClientExistsByCPF(client_cpf)
    if (!checkIfClientExists) {
      res.send({ msg: "Cliente não encontrado"})
    } else {
      const getClient = await Client.findOne({ where: { client_cpf } })
      const destroyClient = await Client.destroy({ where: { client_cpf } })
      res.status(204).json(getClient)
    }
  } catch (error) {
    console.log(error);
    res.status(406).send({ msg: "Erro ao encontrar cliente" })
  }
}

export { 
  createClient,
  getClientByCPF,
  destroyClientByCPF
}