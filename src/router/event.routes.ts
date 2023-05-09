import { Router } from "express";
import { EventController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const eventRouter = Router()

eventRouter.post('/event', [authenticateToken], EventController.createEvent)
eventRouter.get('/event', [authenticateToken], EventController.getAllEvents)
eventRouter.put('/event', [authenticateToken], EventController.updateEvent)
eventRouter.delete('/event', [authenticateToken], EventController.destroyEvent)

export { eventRouter }