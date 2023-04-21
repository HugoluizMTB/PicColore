import { Router } from "express";
import { ActiveClientController } from '../controller/index.controller'

const activeClientRouter = Router()

activeClientRouter.post('/active-client', [], ActiveClientController.createActiveClient)
activeClientRouter.get('/active-client', [], ActiveClientController.getAllActiveClients)
activeClientRouter.delete('/active-client', [], ActiveClientController.destroyActiveClient)

export { activeClientRouter }