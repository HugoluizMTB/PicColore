import { Router } from "express";
import { UserController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const userRouter = Router()

userRouter.post('/login-user', [], UserController.loginUser)
userRouter.post('/user', [authenticateToken], UserController.createUser)
userRouter.get('/user', [authenticateToken], UserController.getAllUsers)
userRouter.put('/user', [authenticateToken], UserController.updateUser)
userRouter.delete('/user', [authenticateToken], UserController.destroyUser)

export { userRouter }