import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGradeDTO{
  @IsNotEmpty()
  @IsNumber()
  readonly grade: number;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNumber()
  readonly id_user: number;

  @IsNumber()
  readonly id_ruta: number;
}