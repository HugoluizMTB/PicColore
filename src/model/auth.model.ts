import { Expose } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class AuthModel {
  @Expose()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  password!: string;
}
