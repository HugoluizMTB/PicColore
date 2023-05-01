import Active_client from "../schema/active_client.model";
import { Request, Response } from "express";
import { ClientService } from "../service/index.service";

const createActiveClient = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { user_id, client_id, event_id } = body
      const checkIfClientIsActive = await ClientService.checkIfClientIsActive(client_id)
      if (!checkIfClientIsActive) {
        const createActiveClient = await Active_client.create({ 
          user_id,
          client_id,
          event_id
         })
        res.send({ createActiveClient })
      } else {
        res.status(200).json({ msg: "Erro ao criar clientes ativos" })
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Não foi possível completar a requisição" })
    }
  }

const getAllActiveClients = async (req: Request, res: Response) => {
    try {
      const activeClients = await Active_client.findAll()
      if (!activeClients) {
        res.status(200).send({ msg: "Nenhum Cliente Ativo!" })
      } else {
        res.status(200).json(activeClients)
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Não foi possível completar a requisição" })
    }
  }

const destroyActiveClient = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { active_client_id } = body
    const destroyedActiveClient = await Active_client.destroy({ where: { active_client_id } })
    if (!destroyedActiveClient) {
      res.status(204).send({ msg: "Nenhum client ativo encontrado!" })
    } else {
      res.status(204).json(destroyedActiveClient)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" })
  }
  }
  
export {
    createActiveClient,
    getAllActiveClients,
    destroyActiveClient
  }