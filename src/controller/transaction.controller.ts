import Transaction from "../schema/transaction.model";
import { Request, Response } from "express";

const createTransaction = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { transaction_value, payment_method, user_id, client_id, event_id } = body;
    const createTransaction = await Transaction.create({
      transaction_value,
      payment_method,
      user_id,
      client_id,
      event_id,
    });
    if (createTransaction) {
        res.status(201).send({ createTransaction });
    } else {
        res.status(200).json({ msg: "Erro ao criar transação" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const transactions = await Transaction.findAll();
    if (!transactions) {
      res.status(200).send({ msg: "Nenhuma transação encontrada" });
    } else {
      res.status(200).json(transactions);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const destroyTransaction = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { transaction_id } = body;
    const checkIfTransactionExists = await Transaction.findOne({ where: { transaction_id } })
    if (checkIfTransactionExists) {
      const destroyTransaction = await Transaction.destroy({ where: { transaction_id } })
      res.status(204).send(destroyTransaction);
    } else {
      res.status(404).json({ msg: "Transação não existe" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

export { 
    createTransaction, 
    getAllTransactions,
    destroyTransaction
};
