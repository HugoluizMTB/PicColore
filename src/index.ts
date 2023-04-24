import express from "express";
import routers from "./router/index.routes";
import connection from "./database/connection";
import cors from "cors";
import * as dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = process.env.PORT;
const environment = process.env.NODE_ENV
const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use('/api', routers);
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port} no ambiente ${environment}`);
});

connection
  .sync()
  .then(() => {console.log(`Banco de dados sincronizado: ${process.env.DB_NAME}`)})
  .catch((err) => console.error('Erro ao sincronizar com banco de dados', err));
