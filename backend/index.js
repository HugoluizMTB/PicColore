import express from "express";
import routes from "./src/router/index.routes.js";
import db from "./src/db.js";
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

db.sync()
  .then(() => {console.log(`Banco de dados sincronizado: ${process.env.DB_NAME}`)})
  .catch(err => console.error('Error creating table clients', err))




