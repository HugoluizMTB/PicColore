import Event from "../schema/event.schema";
import { Request, Response } from "express";
import { EventService } from "../service/index.service";

const createEvent = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const {
      event_name,
      event_address,
      event_status,
      event_is_freetime_active,
      event_freetime_price,
      event_courtesy,
      event_price_1,
      event_time_1,
      event_price_2,
      event_time_2,
      event_price_3,
      event_time_3,
      event_price_4,
      event_time_4,
      event_additional_minute
    } = body;
    const checkEventNameAndAddress = EventService.isEventNameAndAddressAvailable(event_name, event_address)
    if (!checkEventNameAndAddress) {
      res.status(406).send({ msg: "Nome ou Endereço em uso" });
    } else {
      const createEvent = await Event.create({
        event_name,
        event_address,
        event_status,
        event_is_freetime_active,
        event_freetime_price,
        event_courtesy,
        event_price_1,
        event_time_1,
        event_price_2,
        event_time_2,
        event_price_3,
        event_time_3,
        event_price_4,
        event_time_4,
        event_additional_minute
      });
      res.status(201).send(createEvent);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const getAllEvents = async (req: Request, res: Response) => {
    try {
      const AllEvents = await Event.findAll()
      if (!AllEvents) {
        res.status(200).send({ msg: "Nenhum evento encontrado" })
      } else {
        res.status(200).json(AllEvents)
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Não foi possível completar a requisição" })
    }
  }

const updateEvent = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const {
      event_id,
      event_name,
      event_address,
      event_status,
      event_is_freetime_active,
      event_freetime_price,
      event_courtesy,
      event_price_1,
      event_time_1,
      event_price_2,
      event_time_2,
      event_price_3,
      event_time_3,
      event_price_4,
      event_time_4,
      event_additional_minute
    } = body;
    const checkEventNameAndAddress = EventService.isEventNameAndAddressAvailable(event_name, event_address)
    if (!checkEventNameAndAddress) {
      res.status(406).send({ msg: "Nome ou Endereço em uso" });
    } else {
      const updateEvent = await Event.update({
        event_name,
        event_address,
        event_status,
        event_is_freetime_active,
        event_freetime_price,
        event_courtesy,
        event_price_1,
        event_time_1,
        event_price_2,
        event_time_2,
        event_price_3,
        event_time_3,
        event_price_4,
        event_time_4,
        event_additional_minute
      }, { where: { event_id } });
      const UpdatedEvent = await Event.findOne({ where: { event_id } });
      res.status(200).send(UpdatedEvent);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const destroyEvent = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { event_id } = body
    const destroyedEvent = await Event.destroy({ where: { event_id } })
    if (!destroyedEvent) {
      res.status(204).send({ msg: "Nenhum Evento encontrado!" })
    } else {
      res.status(204).json(destroyedEvent)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" })
  }
}

export { 
    createEvent,
    getAllEvents,
    updateEvent,
    destroyEvent
};
