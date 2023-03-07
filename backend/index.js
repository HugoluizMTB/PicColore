import express from "express";
import routes from "./src/routes/index.routes.js"
import db from "./src/db.js"
import cors from "cors"; // reparar a importação do cors

const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://127.0.0.1:5173/"
}

app.use(express.json());
app.use(routes);
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Servidor iniciado no port ${port}`);
});

db.sync(console.log(`Banco de dados sincronizado: ${process.env.DB_NAME}`));

