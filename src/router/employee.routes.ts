import { Router } from "express";
import { EmployeeController } from "../controller/index.controller";
import { authenticate } from "../service/auth.service";

const employeeRouter = Router();

employeeRouter.post("/employee", [authenticate], EmployeeController.createEmployee);
employeeRouter.get("/employee", [authenticate], EmployeeController.getAllEmployees);
employeeRouter.get("/employee/:id", [authenticate], EmployeeController.getEmployeeById);
employeeRouter.put("/employee/:id", [authenticate], EmployeeController.updateEmployee);
employeeRouter.delete("/employee/:id", [authenticate], EmployeeController.destroyEmployee);

export { employeeRouter };
