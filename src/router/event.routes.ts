import { Router } from "express";
import { EventController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const eventRouter = Router();

eventRouter.post("/event", [authenticate], EventController.createEvent);
eventRouter.get("/event", [authenticate], EventController.getAllEvents);
eventRouter.put("/event", [authenticate], EventController.updateEvent);
eventRouter.delete("/event", [authenticate], EventController.destroyEvent);

export { eventRouter };
