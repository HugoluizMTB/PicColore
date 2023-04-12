import { Request, Response } from "express";
import loginUser from "./auth.controller";
import addClient from "./addClient.controller"
import addChild from "./addChild.controller";
import getClientByCPF from "./getClientByCPF.controller";

import User from "../model/user.model";
import Client from "../model/client.model";

async function findAllUsers(req: Request, res: Response) {
  try {
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "Não foi possível completar a requisição" })
  }
}

async function findAllClients(req: Request, res: Response) {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    console.log(error);
    res.send({ msg: "Não foi possível completar a requisição" })
  }
}



async function addUser(req: Request, res: Response) {
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
    addChild,
    getClientByCPF
  }