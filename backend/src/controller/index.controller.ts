import loginUser from "./auth.controller.js";
import addClient from "./addClient.controller.js"
import getAllActiveClients from "./activeClient.controller.js";
import addChild from "./addChild.controller.js";
import getClientByCPF from "./getClientByCPF.controller.js";

import User from "../model/user.model.js";
import Client from "../model/client.model.js";

async function findAllUsers(req, res) {
  try {
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "Não foi possível completar a requisição" })
  }
}

async function findAllClients(req, res) {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    console.log(error);
    res.send({ msg: "Não foi possível completar a requisição" })
  }
}



async function addUser(req, res) {
  try {
    const { user_login, user_password, user_fullname, user_admin, user_supervisor } = req.body
    const user = await User.create({
      user_login,
      user_password,
      user_fullname,
      user_admin,
      user_supervisor
    })
      .then((result) => res.status(201).json(result));
  } catch (error) {
    console.log(error);
    console.log(req.body);
    res.status(406).send({msg: "erro"})
  }
}

export default
  {
    findAllClients,
    findAllUsers,
    addUser,
    addClient,
    loginUser,
    getAllActiveClients,
    addChild,
    getClientByCPF
  }