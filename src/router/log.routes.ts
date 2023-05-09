import { Router } from "express";
import { LogController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const logRouter = Router()

logRouter.post('/log', [authenticateToken], LogController.createLog)
logRouter.get('/log', [authenticateToken], LogController.getAllLogs)
logRouter.put('/log', [authenticateToken], LogController.updateLog)
logRouter.delete('/log', [authenticateToken], LogController.destroyLog)

export { logRouter }