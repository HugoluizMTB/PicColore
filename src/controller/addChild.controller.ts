import Children from "../model/child.model"
import Client from "../model/client.model"
import { Request, Response } from "express";

async function addChild(req: Request, res: Response) {
    try {
        const body = req.body
        const { child_full_name, child_entry_time, client_id } = body
        const findClientId = await Client.findOne({ where: { client_id: body.client_id }})
        if (!findClientId) {
            res.status(406).send({ msg: "Cliente não encontrado" })
        } else {
            const addChild = await Children.create({
                child_full_name,
                child_entry_time,
                client_id
            })
            res.status(201).send(addChild)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Não foi possível completar a requisição" })
    }
}

export default addChild