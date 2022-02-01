import { IsNotEmpty, IsString } from "class-validator";
import { Comment } from "../comment.entity";

export class CreateCommentDTO{
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;
}