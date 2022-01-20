import { Exclude, Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ReadTopicDTO } from "src/modules/topic/dtos";

@Exclude()
export class ReadResourceDTO{
  @Expose()
  @IsNumber()
  readonly id_recurso: number;

  @Expose()
  @IsString()
  readonly nombre_recurso: string;

  @Expose()
  @IsString()
  readonly descripcion_recurso: string;

  @Expose()
  @IsString()
  readonly enlace_recurso: string;

  @Expose()
  @Type(Type => ReadTopicDTO)
  readonly topics: ReadTopicDTO[];
}