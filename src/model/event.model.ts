import { Expose } from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsUUID,
} from "class-validator";

export class EventModel {
  @Expose()
  @IsUUID()
  @IsOptional()
  event_id?: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  event_name!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  event_address!: string;

  @Expose()
  @IsBoolean()
  @IsNotEmpty()
  event_status!: boolean;

  @Expose()
  @IsBoolean()
  event_is_freetime_active!: boolean;

  @Expose()
  @IsNumber()
  event_freetime_price?: number;

  @Expose()
  @IsNumber()
  event_courtesy?: number;

  @Expose()
  @IsNumber()
  event_price_1?: number;

  @Expose()
  @IsNumber()
  event_time_1?: number;

  @Expose()
  @IsNumber()
  event_price_2?: number;

  @Expose()
  @IsNumber()
  event_time_2?: number;

  @Expose()
  @IsNumber()
  event_price_3?: number;

  @Expose()
  @IsNumber()
  event_time_3?: number;

  @Expose()
  @IsNumber()
  event_price_4?: number;

  @Expose()
  @IsNumber()
  event_time_4?: number;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  event_additional_minute!: number;
}
