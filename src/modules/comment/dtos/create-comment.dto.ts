import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Comment } from "../comment.entity";

export class CreateCommentDTO{
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNumber()
  readonly id_user: number;

  @IsNumber()
  readonly id_ruta: number;
}