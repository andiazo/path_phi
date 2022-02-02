import { Exclude } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadProgressDTO{
  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNotEmpty()
  @IsNumber()
  readonly id_user: number;

  @IsNotEmpty()
  @IsNumber()
  readonly id_ruta: number;

  @IsNotEmpty()
  @IsNumber()
  readonly id_topic: number;
}