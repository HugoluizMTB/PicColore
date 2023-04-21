import { Router } from "express";
import { UserController } from '../controller/index.controller'

const userRouter = Router()

userRouter.post('/user', [], UserController.createUser)
userRouter.get('/user', [], UserController.getAllUsers)
userRouter.put('/user', [], UserController.updateUser)
userRouter.delete('/user', [], UserController.destroyUser)

export { userRouter }