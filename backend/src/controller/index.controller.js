import { ValidationErrorItem } from "sequelize";
import Client from "../model/client.model.js";
import User from "../model/user.model.js"
import Event from "../model/event.model.js"

async function findAll(req, res) {
  try {

    const clients = await Client.findAll();
    res.status(200).json(clients);

  } catch (error) {
    
    console.log(error);
    res.send("Não foi possível completar a requisição")

  }
}

async function addClient(req, res) {
  try {
    const {client_full_name, client_cpf, client_phone_number, client_visits } = req.body


    const client = await Client.create({
      client_full_name,
      client_cpf,
      client_phone_number,
      client_visits 
    })
      .then((result) => res.status(201).json(result));

  } catch (error) {

    console.log(error);
    console.log(req.body);
    res.status(406).send(ValidationErrorItem.message)

  }
}

export default
  {
    findAll,
    addClient
  }