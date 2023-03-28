import { ValidationErrorItem } from "sequelize";
import Client from "../model/client.model.js";
import User from "../model/user.model.js";
import Active_client from "../model/active_client.model.js";

async function findAllActiveClients(req, res) {
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

async function loginUser(req, res) {
  try {
    const body = req.body
    const login = await User.findOne({ where: { user_login: body.user_login, user_password: body.user_password }})
    if (!login) {
      res.send({ msg: "Usuário ou senha incorreta" })
    } else {
      res.status(200).json(login)
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "Não foi possível fazer o login. Tente novamente mais tarde" })
  }
}

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

async function addClient(req, res) {
  try {
    const { client_full_name, client_cpf, client_phone_number, client_visits } = req.body
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
    res.status(406).send(ValidationErrorItem.message)
  }
}

export default
  {
    findAllClients,
    findAllUsers,
    addUser,
    addClient,
    loginUser,
    findAllActiveClients
  }