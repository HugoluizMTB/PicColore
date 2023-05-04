import { Router } from "express";
import { ActiveClientController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const activeClientRouter = Router()

activeClientRouter.post('/active-client', [authenticateToken], ActiveClientController.createActiveClient)
activeClientRouter.get('/active-client', [authenticateToken], ActiveClientController.getAllActiveClients)
activeClientRouter.delete('/active-client', [authenticateToken], ActiveClientController.destroyActiveClient)

export { activeClientRouter }