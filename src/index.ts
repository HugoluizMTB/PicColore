import 'express-async-errors';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import routers from "./router/index.routes";
import sequelize from "./config/database/connection";
import cors from "cors";
import * as dotenv from "dotenv";
import { HttpStatus } from './utils/http-status'
import { AppError } from "./models/errors.model";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api", routers);
app.use(cors());

app.use('*', () => {
  throw new AppError('Rota não encontrada', HttpStatus.NOT_FOUND)
})

app.use((err: ErrorRequestHandler | Error | AppError, req: Request, res: Response, next: NextFunction) => {
  const isError = err instanceof Error
  const isAppError = err instanceof AppError

  const objError: AppError = {
    message: isAppError ? err.message : isError ? err.message : 'Erro interno do servidor',
    status: isAppError ? err.status : HttpStatus.INTERNAL_SERVER_ERROR,
    data: isAppError ? err.data : isError ? err.stack : undefined
  }

  res.status(objError.status).json(objError.message)
})

app.listen(port);
sequelize.sync({ force: false });
