import { ValidationErrorItem } from "sequelize";
import ClientTable from "../model/client.model.js"

async function findAll(req, res) {
  try {

    const clients = await ClientTable.findAll();
    res.status(200).json(clients);

  } catch (error) {
    
    console.log(error);
    res.send("Não foi possível completar a requisição")

  }
}

async function addClient(req, res) {
  try {
    const {responsible_full_name, child_name, responsible_cpf, responsible_cellphone_number } = req.body


    const client = await ClientTable.create({
      responsible_full_name,
      child_name,
      responsible_cpf,
      responsible_cellphone_number 
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