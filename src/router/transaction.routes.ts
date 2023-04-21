import { Router } from "express";
import { TransactionController } from '../controller/index.controller'

const transactionRouter = Router()

transactionRouter.post('/transaction', [], TransactionController.createTransaction)
transactionRouter.get('/transaction', [], TransactionController.getAllTransactions)
transactionRouter.delete('/transaction', [], TransactionController.destroyTransaction)

export { transactionRouter }