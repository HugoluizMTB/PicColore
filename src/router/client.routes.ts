import { Router } from "express";
import { ClientController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const clientRouter = Router();

clientRouter.post("/client", [authenticate], ClientController.createClient);
clientRouter.patch("/client/:id", [authenticate], ClientController.updateClient);
clientRouter.get("/client/:id", [authenticate], ClientController.getClientById);
clientRouter.get("/client", [authenticate], ClientController.getAllClients);
clientRouter.delete("/client/:id", [authenticate], ClientController.deleteClient);

export { clientRouter };
