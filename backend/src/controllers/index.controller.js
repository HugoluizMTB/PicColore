import ClientTable from "../models/client.model.js"

async function findAll(req, res) {
    const clients = await ClientTable.findAll();
    res.json(clients);
}

function addClient(req, res) {
    ClientTable.create({
      responsibleFullName: req.body.responsibleFullName,
      childName: req.body.childName,
      responsibleCPF: req.body.responsibleCPF,
      responsiblePhoneNumber: req.body.responsiblePhoneNumber
    })
    .then((result) => res.json(result));
  }

export default 
{ 
    findAll,
    addClient
}