import { Router } from "express";
import { ActiveClientController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const activeClientRouter = Router();

activeClientRouter.post(
  "/active-client",
  [authenticate],
  ActiveClientController.createActiveClient
);
activeClientRouter.get(
  "/active-client",
  [authenticate],
  ActiveClientController.getAllActiveClients
);
activeClientRouter.delete(
  "/active-client",
  [authenticate],
  ActiveClientController.destroyActiveClient
);

export { activeClientRouter };
