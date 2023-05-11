import { Expose } from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsUUID,
  MaxLength
} from "class-validator";

export class ChildModel {
  @Expose()
  @IsUUID()
  child_id?: string;

  @Expose()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  child_fullname!: string;
}
