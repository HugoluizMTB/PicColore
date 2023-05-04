import { Request, Response } from "express";
import User from "../schema/user.schema";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { user_email, user_password, user_fullname, user_phone_number, user_admin, user_supervisor, event_id } = body
    const createdUser = await User.create({
      user_email,
      user_password,
      user_fullname,
      user_phone_number,
      user_admin,
      user_supervisor,
      event_id
    })
      res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" })
  }
}

dotenv.config();
const tokenSecret = process.env.JWT_KEY || "456321";
const loginUser = async (req: Request, res: Response) => {
  try {
    const { user_email, user_password } = req.body;
    const checkUsernameAndPassword = await User.findOne({
      where: { user_email, user_password },
    });
    if (!checkUsernameAndPassword) {
      res.status(401).send({ msg: "Email ou senha incorreta" });
    } else {
      const token = jwt.sign({ user_email: user_email }, tokenSecret, {
        expiresIn: "1h",
      });
      res.status(200).send({ token, checkUsernameAndPassword });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const getUsers = await User.findAll();
    if (!getUsers) {
        res.status(200).send({ msg: "Nenhum usuário encontrado" })
      } else {
        res.status(200).json(getUsers)
      }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" })
  }
}

const updateUser = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { user_id, user_email, user_password, user_fullname, user_phone_number, user_admin, user_supervisor, event_id } = body
      const updateUser = await User.update({
        user_email,
        user_password,
        user_fullname,
        user_phone_number,
        user_admin,
        user_supervisor,
        event_id
      }, { where: { user_id } })
      const findUpdatedUser = await User.findOne({ where: { user_id } });
      res.status(201).json(findUpdatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).send({msg: "Não foi possível completar a requisição" })
    }
}

const destroyUser = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const { user_id } = body
        const destroyedUser = await User.destroy({ where: { user_id } })
        res.status(204).json(destroyedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "Não foi possível completar a requisição" })
    }
}

export{
    getAllUsers,
    createUser,
    updateUser,
    destroyUser,
    loginUser
}