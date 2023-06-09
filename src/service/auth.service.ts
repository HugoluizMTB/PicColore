/* eslint-disable no-console */
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../schema/user.schema";
import * as argon from "argon2";
import * as dotenv from "dotenv";
import { AuthModel } from "../models/auth.model";
import { UserModel } from "../models/user.model";

dotenv.config();
const EXPIRATION_TIME = Number(process.env.EXPIRATION_TIME);
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

interface JwtPayloadObject {
  type: "object";
  id: string;
}

type JwtPayload = JwtPayloadObject;

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["access_token"];

    if (!token) {
      return res.status(401).json("Token não identificado.");
    }

    jwt.verify(token as string, JWT_SECRET_KEY, (error, decoded: JwtPayload) => {
      if (error) {
        return res.status(401).json("Token inválido.");
      }

      if (decoded) {
        const auth = decoded.id;
        req.body.auth = auth;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Não foi possível gerar token de acesso.");
  }
};

const generateTokenJWT = async (
  payload: any,
  expiresIn: number = EXPIRATION_TIME
) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn });
};

export const validatePassword = async (user: UserModel, password: string) => {
  try {
    let validate = false;
    if (user) {
      validate = await argon.verify(user.password, password + user.salt);
    }

    if (!validate) throw new Error("Email ou senha incorreta");
  } catch (error) {
    console.log(error);
  }
};

export const loginService = async (body: AuthModel) => {
  try {
    const user: any = await User.findOne({ where: { email: body.email } });

    if (!user) {
      throw new Error("Usuário não encontrado com esse e-mail.");
    }

    await validatePassword(user, body.password);
    const token = await generateTokenJWT({
      email: user.email,
      id: user.id,
      username: user.name,
    });

    return {
      username: user.name,
      role: user.role,
      id: user.id,
      token: token,
      logged_in: true,
    };
  } catch (error) {
    console.log(error);
  }
};
