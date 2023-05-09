import { Router } from "express";
import { ClientController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const clientRouter = Router()

clientRouter.post('/client', [authenticateToken], ClientController.createClient)
clientRouter.get('/client', [authenticateToken], ClientController.getClientByCPF)
clientRouter.delete('/client', [authenticateToken], ClientController.destroyClientByCPF)

export { clientRouter }