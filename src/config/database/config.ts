import { config } from "dotenv";
import { resolve } from "path";

config({
  path: resolve(__dirname, "../../.env"),
});

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "database",
    database: "aps",
    host: "localhost",
    dialect: "postgres",
  },
};
