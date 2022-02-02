import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateGradeDTO{
  @IsNotEmpty()
  @IsNumber()
  readonly grade: number;

  @IsNotEmpty()
  @IsString()
  readonly status: string;
}