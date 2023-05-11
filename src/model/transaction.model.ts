import { Expose } from "class-transformer";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class TransactionModel {
  @Expose()
  @IsUUID()
  transaction_id?: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  transaction_value!: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  @MinLength(1)
  payment_method!: string;

  @Expose()
  @IsUUID()
  @IsNotEmpty()
  event_id!: string;

  @Expose()
  @IsUUID()
  @IsNotEmpty()
  user_id!: string;

  @Expose()
  @IsUUID()
  @IsNotEmpty()
  client_id!: string;
}
