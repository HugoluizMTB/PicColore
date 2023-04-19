import User from "../schema/user.model";
import { Request, Response } from "express";

const loginUser = async (req: Request, res: Response) => {
    try {
      const body = req.body
      const { user_email, user_password } = body
      const login = await User.findOne({ where: {
        user_login: user_email,
        user_password: user_password 
    }})
      if (!login) {
        res.send({ msg: "Usuário ou senha incorreta" })
      } else {
        res.status(401).json(login)
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Não foi possível fazer o login. Tente novamente mais tarde" })
    }
  }

export {
  loginUser
}