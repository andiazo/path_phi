import { IsNotEmpty, IsNumber } from "class-validator";

export class AddResourceDTO{
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
}