import { Op } from "sequelize";
import Event from "../schema/event.schema";

const isEventNameAndAddressAvailable = async (event_name: string, event_address: string) => {
  const checkNameAndAddress = await Event.findOne({ where: {[Op.or]: [{ name: event_name }, { address: event_address }]}});
  return checkNameAndAddress;
};

export const createEventService = async (event: any) => {
  try {
    const { name, address } = event;
    const checkEventNameAndAddress = await isEventNameAndAddressAvailable(name, address);
    if (checkEventNameAndAddress) {
      return { msg: "Nome ou Endereço em uso" };
    }
    const createEvent = await Event.create(event);
    return createEvent;
  } catch (error) {
    console.log(error);
    return { msg: "Não foi possível completar a requisição" };
  }
};

export const getAllEventsService = async () => {
  try {
    const allEvents: any = await Event.findAll();
    if (allEvents.length === 0) {
      return { msg: "Nenhum evento encontrado" }
    }
    
    return allEvents;

  } catch (error) {
    console.log(error);
    return { msg: "Não foi possível completar a requisição" };
  }
};

export const updateEventService = async (body: any) => {
  try {
    const { name, address, id } = body;

    const checkEventNameAndAddress = await isEventNameAndAddressAvailable(name, address);
    if (checkEventNameAndAddress) {
      return { msg: "Nome ou Endereço em uso" };
    }

    const checkEventId = await Event.findOne({ where: { id } });
    if (!checkEventId) {
      return { msg: "Evento não existe" }
    }

    const updatedEvent = await Event.update( body , { where: { id } });
    return updatedEvent;

  } catch (error) {
    console.log(error);
    return { msg: "Não foi possível completar a requisição" };
  }
};

export const destroyEventService = async (body: any) => {
  try {
    const { id } = body;

    const checkEventId = await Event.findOne({ where: { id } });
    if (!checkEventId) {
      return { msg: "Evento não existe" }
    }

    const destroyedEvent = await Event.destroy({ where: { id } });
    if (destroyedEvent) {
      return { msg: "Evento apagado" };
    }

  } catch (error) {
    console.log(error);
    return { msg: "Não foi possível completar a requisição" };
  }
};
