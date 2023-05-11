import { Expose } from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsUUID,
  MaxLength,
  MinLength,
  IsNumber,
} from "class-validator";

export class ClientModel {
  @Expose()
  @IsUUID()
  client_id?: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  client_fullname!: string;

  @Expose()
  @IsString()
  @MaxLength(11)
  @MinLength(11)
  @IsNotEmpty()
  client_cpf!: string;

  @Expose()
  @IsString()
  @MaxLength(13)
  @MinLength(13)
  @IsNotEmpty()
  client_phone_number!: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  client_visits!: number;
}
