import { IsNotEmpty, IsNumber } from "class-validator";

export class EnrollUserDTO {
  @IsNotEmpty()
  @IsNumber()
  readonly id_user: number;

}
