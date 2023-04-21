import { Router } from "express";
import { userRouter } from "./user.routes";
import { transactionRouter } from "./transaction.routes";
import { logRouter } from "./log.routes";
import { eventRouter } from "./event.routes";
import { clientRouter } from "./client.routes";
import { childRouter } from "./child.routes";
import { activeClientRouter } from "./activeClient.routes";

const routers = Router();

routers.use("/v1",
  userRouter,
  transactionRouter,
  logRouter,
  eventRouter,
  clientRouter,
  childRouter,
  activeClientRouter
);

export default routers;
