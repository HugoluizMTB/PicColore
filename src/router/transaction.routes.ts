import { Router } from "express";
import { TransactionController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const transactionRouter = Router();

transactionRouter.post(
  "/transaction",
  [authenticate],
  TransactionController.createTransaction
);
transactionRouter.get(
  "/transaction",
  [authenticate],
  TransactionController.getAllTransactions
);
transactionRouter.delete(
  "/transaction",
  [authenticate],
  TransactionController.destroyTransaction
);

export { transactionRouter };
