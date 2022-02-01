import { IsNotEmpty, IsString } from "class-validator";
import { Topic } from "src/modules/topic/topic.entity";

export class CreateResourceDTO{
  @IsNotEmpty()
  @IsString()
  readonly nombre_recurso: string;

  @IsNotEmpty()
  @IsString()
  readonly descripcion_recurso: string;

  @IsNotEmpty()
  @IsString()
  readonly enlace_recurso: string;

  @IsNotEmpty()
  readonly topics: Topic[];
}