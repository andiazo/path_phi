import { Exclude, Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadCommentDTO{
  @Expose()
  @IsNumber()
  readonly id_comment: number;

  @Expose()
  @IsString()
  readonly content: string;

  @Expose()
  @IsString()
  readonly status: string;
}