import { Exclude, Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadGradeDTO{
  @Expose()
  @IsNumber()
  readonly id_grade: number;

  @Expose()
  @IsNumber()
  readonly grade: number;

  @Expose()
  @IsString()
  readonly status: string;
}