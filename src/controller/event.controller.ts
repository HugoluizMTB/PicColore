import { Request, Response } from "express";
import { EventService } from "../service/index.service";

const createEvent = async (req: Request, res: Response) => {
  const body = req.body;
  const createdEvent = await EventService.createEventService(body);
  res.status(201).json(createdEvent);
};

const getAllEvents = async (req: Request, res: Response) => {
  const AllEvents = await EventService.getAllEventsService();
  res.json(AllEvents).status(200);
};

const updateEvent = async (req: Request, res: Response) => {
  const body = req.body;
  const updatedEvent = await EventService.updateEventService(body);
  res.json(updatedEvent).status(200);
};

const destroyEvent = async (req: Request, res: Response) => {
  const body = req.body;
  const destroyedEvent = await EventService.destroyEventService(body);
  res.json(destroyedEvent).status(204);
};

export { 
  createEvent, 
  getAllEvents, 
  updateEvent, 
  destroyEvent 
};
