import Log from "../schema/log.model";
import { Request, Response } from "express";

const createLog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { is_event_open, user_id_entry, user_id_closing } = body;
    const createLog = await Log.create({
        is_event_open,
        user_id_entry, 
        user_id_closing
    });
    res.status(201).send({ createLog });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const getAllLogs = async (req: Request, res: Response) => {
  try {
    const logs = await Log.findAll();
    if (!logs) {
      res.status(200).send({ msg: "Nenhum log encontrado" });
    } else {
      res.status(200).json(logs);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const destroyLog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { log_id } = body;
    const checkIfLogExists = await Log.findOne({ where: { log_id } })
    if (checkIfLogExists) {
      const destroyLog = await Log.destroy({ where: { log_id } })
      res.status(204).send(destroyLog);
    } else {
      res.status(404).json({ msg: "Log não existe" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

export { 
    createLog, 
    getAllLogs,
    destroyLog
};