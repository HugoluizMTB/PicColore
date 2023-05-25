import { Router } from "express";
import { ClientController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const clientRouter = Router();

clientRouter.post("/client", [authenticate], ClientController.createClient);
clientRouter.get("/client", [authenticate], ClientController.getClientByCPF);
clientRouter.delete(
  "/client",
  [authenticate],
  ClientController.destroyClientByCPF
);

export { clientRouter };
