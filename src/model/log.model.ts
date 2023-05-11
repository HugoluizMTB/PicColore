import { Expose } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsUUID } from "class-validator";

export class LogModel {
  @Expose()
  @IsUUID()
  log_id?: string;

  @Expose()
  @IsBoolean()
  @IsNotEmpty()
  is_event_open!: boolean;
}
