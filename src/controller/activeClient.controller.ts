import Active_client from "../model/active_client.model.js";

export const getAllActiveClients = async (req, res) => {
    try {
      const body = req.body
      const activeClients = await Active_client.findAll({ where: { event_id: body.event_id } })
      if (!activeClients) {
        res.send({ msg: "Nenhum Cliente Ativo!" })
      } else {
        res.status(200).json(activeClients)
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Erro ao encontrar clientes ativos" })
    }
  }

