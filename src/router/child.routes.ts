import { Router } from "express";
import { ChildController } from '../controller/index.controller'

const childRouter = Router()

childRouter.post('/child', [], ChildController.createChild)
childRouter.get('/child', [], ChildController.getAllChildrensFromClient)
childRouter.delete('/child', [], ChildController.destroyChild)

export { childRouter }