import { Router } from "express";
import { ChildController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const childRouter = Router();

childRouter.post("/child", [authenticate], ChildController.createChild);
childRouter.get(
  "/child",
  [authenticate],
  ChildController.getAllChildrensFromClient
);
childRouter.delete("/child", [authenticate], ChildController.destroyChild);

export { childRouter };
