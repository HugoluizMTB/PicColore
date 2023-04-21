import { Router } from "express";
import { ClientController } from '../controller/index.controller'

const clientRouter = Router()

clientRouter.post('/client', [], ClientController.createClient)
clientRouter.get('/client', [], ClientController.getClientByCPF)
clientRouter.delete('/client', [], ClientController.destroyClientByCPF)

export { clientRouter }