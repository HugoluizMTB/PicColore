import { Request, Response } from "express";
import { AuthService } from "../service/index.service";

export const login = async (req: Request, res: Response) => {
  const body = req.body;
  const login = await AuthService.loginService(body);
  return res.status(200).json(login);
};

const loginUser = async (req: Request, res: Response) => {
  //   try {
  //     const { email, password } = req.body;
  //     const checkUsernameAndPassword = await User.findOne({
  //       where: { user_email, user_password },
  //     });
  //     if (!checkUsernameAndPassword) {
  //       res.status(401).send({ msg: "Email ou senha incorreta" });
  //     } else {
  //       const token = jwt.sign({ user_email: user_email }, tokenSecret, {
  //         expiresIn: "1h",
  //       });
  //       res.status(200).send({ token, checkUsernameAndPassword });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send({ msg: "Não foi possível completar a requisição" });
  //   }
};
