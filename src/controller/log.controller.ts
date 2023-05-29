import Log from "../schema/log.schema";
import { Request, Response } from "express";

const createLog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { is_event_open, event_id, employee_id_entry, employee_id_closing } = body;
    const createdLog = await Log.create({
        is_event_open,
        event_id,
        employee_id_entry, 
        employee_id_closing
    });
    res.status(201).send({ createdLog });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const getAllLogs = async (req: Request, res: Response) => {
  try {
    const allLogs = await Log.findAll();
    if (!allLogs) {
      res.status(200).send({ msg: "Nenhum log encontrado" });
    } else {
      res.status(200).send(allLogs);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const updateLog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { log_id, is_event_open, event_id, employee_id_entry, employee_id_closing } = body;
    const updateLog = await Log.update({
        is_event_open,
        event_id,
        employee_id_entry, 
        employee_id_closing
    }, { where: { log_id } });
    const updatedLog = await Log.findOne({ where: { log_id } })
    res.status(200).send({ updatedLog });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const destroyLog = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { log_id } = body
    const destroyedLog = await Log.destroy({ where: { log_id } })
    res.status(204).json(destroyedLog);
} catch (error) {
    console.log(error);
    res.status(500).send({msg: "Não foi possível completar a requisição" })
}
};

export { 
    createLog, 
    getAllLogs,
    updateLog,
    destroyLog
};