import Client from "../model/client.model.js";

async function getClientByCPF(req, res) {
    try {
      const body = req.body
      const findClient = await Client.findOne({ where:{ client_cpf: body.client_cpf }});
      if (!findClient) {
        res.status(204).send({ msg: "Usuário não encontrado" }) // Body is sent empty for some reason...
      } else {
        res.status(200).json(findClient);
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Não foi possível completar a requisição" })
    }
}

export default getClientByCPF