import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProgressDTO{
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