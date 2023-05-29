import { Request, Response } from "express";
import * as dotenv from "dotenv";
import { EmployeeService } from "../service/index.service";
dotenv.config();

const createEmployee = async (req: Request, res: Response) => {
  const body = req.body;
  const employee = await EmployeeService.createEmployeeService(body);
  res.status(201).json(employee);
};

const updateEmployee = async (req: Request, res: Response) => {
  const body = req.body;
  const auth = req.body.auth;
  const { id } = req.params;
  const employee = await EmployeeService.updateEmployeeService(id, auth, body);
  res.status(200).json(employee);
};

const getEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await EmployeeService.getEmployeeByIdService(id);
  res.status(200).json(employee);
};

const getAllEmployees = async (req: Request, res: Response) => {
  const auth = req.body.auth;
  const getAllEmployees = await EmployeeService.getAllEmployeesService(auth);
  res.status(200).json(getAllEmployees);
};

const destroyEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await EmployeeService.deleteEmployeeByIdService(id);
  res.status(204).json(employee);
};

export { createEmployee, updateEmployee, getEmployeeById, getAllEmployees, destroyEmployee };
