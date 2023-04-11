import express from "express";
import routes from "./router/index.routes.js";
import connection from "./database/connection.js";
import cors from "cors";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*"
}

app.use(express.json());
app.use(routes);
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Servidor iniciado no port ${port}`);
});

connection.sync()
  .then(() => {console.log(`Banco de dados sincronizado: ${process.env.DB_NAME}`)})
  .catch(err => console.error('Erro ao sincronizar com banco de dados', err))




