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
      res.send({ msg: "Erro ao criar clientes ativos" })
    }
  }

const getAllActiveClients = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const activeClients = await Active_client.findAll({ where: { event_id: body.event_id } })
      if (!activeClients) {
        res.send({ msg: "Nenhum Cliente Ativo!" })
      } else {
        res.status(200).json(activeClients)
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Erro ao encontrar clientes ativos" })
    }
  }

const deleteActiveClient = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { user_id, client_id, event_id } = body
      const checkIfClientIsActive = await ClientService.checkIfClientIsActive(client_id)
      if (!checkIfClientIsActive) {
        res.send({ msg: "Cliente não está ativo" })
      } else {
        const deleteActiveClient = await Active_client.destroy({ where: { active_client_id: body.active_client_id } })
        res.status(204).json(deleteActiveClient)
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Erro ao encontrar clientes ativos" })
    }
  }
  
  export {
    createActiveClient,
    getAllActiveClients,
    deleteActiveClient
  }