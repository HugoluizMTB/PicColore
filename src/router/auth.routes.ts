import { Router } from "express";
import { AuthController } from "../controller/index.controller";

const authRouter = Router();

authRouter.post("/login", [], AuthController.login);

export { authRouter };
