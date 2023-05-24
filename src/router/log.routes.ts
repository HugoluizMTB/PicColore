import { Router } from "express";
import { LogController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const logRouter = Router();

logRouter.post("/log", [authenticate], LogController.createLog);
logRouter.get("/log", [authenticate], LogController.getAllLogs);
logRouter.put("/log", [authenticate], LogController.updateLog);
logRouter.delete("/log", [authenticate], LogController.destroyLog);

export { logRouter };
