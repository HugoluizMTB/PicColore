import { Request, Response } from "express";
import * as dotenv from "dotenv";
import { UserService } from "../service/index.service";
dotenv.config();

const createUser = async (req: Request, res: Response) => {
  const body = req.body;
  const user = await UserService.createUserService(body);
  res.status(201).json(user);
};

const updateUser = async (req: Request, res: Response) => {
  const body = req.body;
  const auth = req.body.auth;
  const { id } = req.params;
  const user = await UserService.updateUserService(id, auth, body);
  res.status(200).json(user);
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.getUserByIdService(id);
  res.status(200).json(user);
};

const getAllUsers = async (req: Request, res: Response) => {
  const auth = req.body.auth;
  const getAllUsers = await UserService.getAllUsersService(auth);
  res.status(200).json(getAllUsers);
};

const destroyUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.deleteUserByIdService(id);
  res.status(204).json(user);
};

export { createUser, updateUser, getUserById, getAllUsers, destroyUser };
