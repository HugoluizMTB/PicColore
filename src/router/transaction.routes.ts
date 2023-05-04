import { Router } from "express";
import { TransactionController } from '../controller/index.controller'
import { authenticateToken } from "../service/auth.service";

const transactionRouter = Router()

transactionRouter.post('/transaction', [authenticateToken], TransactionController.createTransaction)
transactionRouter.get('/transaction', [authenticateToken], TransactionController.getAllTransactions)
transactionRouter.delete('/transaction', [authenticateToken], TransactionController.destroyTransaction)

export { transactionRouter }