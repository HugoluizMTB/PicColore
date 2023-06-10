import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import Employee from "../schema/employee.schema";
import * as argon from "argon2";
import * as dotenv from "dotenv";
import { AuthModel } from "../models/auth.model";
import { EmployeeModel } from "../models/employee.model";
import { EmployeeUpdateDto } from "src/dtos/employee.dto";

dotenv.config();
const EXPIRATION_TIME = Number(process.env.EXPIRATION_TIME);
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: any;
    token = req.headers["access_token"];

    if (!token) {
      return res.status(401).json("Token não identificado.");
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (error, decoded) => {
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

export const validatePassword = async (employee: EmployeeModel, password: string) => {
  try {
    let validate = false;
    if (employee) {
      validate = await argon.verify(employee.password, password + employee.salt);
    }

    if (!validate) throw new Error("Email ou senha incorreta");
  } catch (error) {
    console.log(error);
  }
};

export const loginService = async (body: AuthModel) => {
  try {
    const employee: any = await Employee.findOne({ where: { email: body.email } });

    if (!employee) {
      throw new Error("Usuário não encontrado com esse e-mail.");
    }

    await validatePassword(employee, body.password);
    const token = await generateTokenJWT({
      email: employee.email,
      id: employee.id,
      employeename: employee.name,
    });

    return {
      employeename: employee.name,
      role: employee.role,
      id: employee.id,
      token: token,
      logged_in: true,
    };
  } catch (error) {
    console.log(error);
  }
};
