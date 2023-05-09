import { Router } from "express";
import { ChildController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const childRouter = Router()

childRouter.post('/child', [authenticateToken], ChildController.createChild)
childRouter.get('/child', [authenticateToken], ChildController.getAllChildrensFromClient)
childRouter.delete('/child', [authenticateToken], ChildController.destroyChild)

export { childRouter }