import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    dialect: "postgres",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    timezone: "America/Sao_Paulo",
  }
);

export default sequelize;
