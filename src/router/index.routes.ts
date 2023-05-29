import { Router } from "express";
import { employeeRouter } from "./employee.routes";
import { transactionRouter } from "./transaction.routes";
import { logRouter } from "./log.routes";
import { eventRouter } from "./event.routes";
import { clientRouter } from "./client.routes";
import { childRouter } from "./child.routes";
import { activeClientRouter } from "./activeClient.routes";
import { authRouter } from "./auth.routes";

const routers = Router();

routers.use(
  employeeRouter,
  transactionRouter,
  logRouter,
  eventRouter,
  clientRouter,
  childRouter,
  activeClientRouter,
  authRouter
);

export default routers;
