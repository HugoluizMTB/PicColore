import { Expose } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";
import { Messages } from "./messages.model";

export class UserModel {
  id: string;
  email: string;
  password: string;
  salt: string;
  name: string;
  social_name?: string;
  phone_number: string;
  role: string;
  active: string;
}
