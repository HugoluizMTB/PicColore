import { Router } from "express";
import { UserController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const userRouter = Router();

userRouter.post("/user", [authenticate], UserController.createUser);
userRouter.get("/user", [authenticate], UserController.getAllUsers);
userRouter.get("/user/:id", [authenticate], UserController.getUserById);
userRouter.put("/user/:id", [authenticate], UserController.updateUser);
userRouter.delete("/user/:id", [authenticate], UserController.destroyUser);

export { userRouter };
