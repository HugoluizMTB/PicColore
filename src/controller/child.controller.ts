import Children from "../schema/child.model"
import { ClientService } from "../service/index.service";
import { Request, Response } from "express";

const createChild = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const { child_full_name, child_entry_time, client_id } = body
        const findClientId = await ClientService.checkIfClientExistsByID(client_id)
        if (!findClientId) {
            res.status(406).send({ msg: "Cliente não encontrado" })
        } else {
            const createChild = await Children.create({
                child_full_name,
                child_entry_time,
                client_id
            })
            res.status(201).send(createChild)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Não foi possível completar a requisição" })
    }
}

const getAllChildrensFromClient = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const { client_id } = body
        const findClientId = await Children.findAll({ where: { client_id } })
        if (!findClientId) {
            res.status(406).send({ msg: "Cliente não encontrado" })
        } else {
            res.status(200).send(createChild)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Não foi possível completar a requisição" })
    }
}

const deleteChild = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { child_id } = body
      const checkIfChildExists = Children.findOne({ where: { child_id } })
      if (!checkIfChildExists) {
        res.send({ msg: "Criança não existe!" })
      } else {
        const deleteActiveClient = await Children.destroy({ where: { child_id: body.child_id } })
        res.status(204).json(deleteActiveClient)
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Erro ao deletar criança" })
    }
  }

export {
    createChild,
    getAllChildrensFromClient,
    deleteChild
}