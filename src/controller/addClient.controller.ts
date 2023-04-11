import Client from "../model/client.model.js";

async function addClient(req, res) {
    try {
      const body = req.body
      const { client_full_name, client_cpf, client_phone_number, client_visits } = body
      const checkIfClientExists = await Client.findOne({ where: { client_cpf: body.client_cpf }})
      const addClient = await Client.create({
        client_full_name,
        client_cpf,
        client_phone_number,
        client_visits
      })
      if (checkIfClientExists) {
        res.send({ msg: "Cliente Já se encontra cadastrado"})
      } else {
        res.status(201).json(addClient)
      }
    } catch (error) {
      console.log(error);
      res.status(406).send({ msg: "Erro ao criar cliente" })
    }
  }

export default addClient