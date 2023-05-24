import { Expose } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";
import { Messages } from "./messages.model";

export class AuthModel {
  email!: string;
  password!: string;
}
