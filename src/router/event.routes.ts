import { Router } from "express";
import { EventController } from '../controller/index.controller'

const eventRouter = Router()

eventRouter.post('/event', [], EventController.createEvent)
eventRouter.get('/event', [], EventController.getAllEvents)
eventRouter.put('/event', [], EventController.updateEvent)
eventRouter.delete('/event', [], EventController.destroyEvent)

export { eventRouter }