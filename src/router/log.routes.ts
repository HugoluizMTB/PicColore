import { Router } from "express";
import { LogController } from '../controller/index.controller'

const logRouter = Router()

logRouter.post('/log', [], LogController.createLog)
logRouter.get('/log', [], LogController.getAllLogs)
logRouter.delete('/log', [], LogController.destroyLog)

export { logRouter }