import { Expose } from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsUUID,
  IsBoolean,
} from "class-validator";

export class UserModel {
  @Expose()
  @IsUUID()
  user_id?: string;

  @Expose()
  @IsEmail()
  @IsNotEmpty()
  user_email!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  user_password!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  user_fullname!: string;

  @Expose()
  @IsString()
  user_phone_number?: string;

  @Expose()
  @IsBoolean()
  @IsNotEmpty()
  user_admin!: boolean;

  @Expose()
  @IsBoolean()
  @IsNotEmpty()
  user_supervisor!: boolean;
}
