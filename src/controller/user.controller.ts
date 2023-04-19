import { Request, Response } from "express";
import User from "../schema/user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const { user_email, user_password, user_fullname, user_phone_number, user_admin, user_supervisor } = body
    const createdUser = await User.create({
      user_email,
      user_password,
      user_fullname,
      user_phone_number,
      user_admin,
      user_supervisor
    })
      res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Não foi possível completar a requisição" })
  }
}

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
      const { user_id, user_email, user_password, user_fullname, user_phone_number, user_admin, user_supervisor } = body
      const updatedUser = await User.update({
        user_email,
        user_password,
        user_fullname,
        user_phone_number,
        user_admin,
        user_supervisor
      }, { where: { user_id } })
        res.status(201).json(updatedUser);
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
    destroyUser
}