import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";

dotenv.config()
const dbURL = process.env.DB_URL
const sequelize = new Sequelize(dbURL)

export default sequelize