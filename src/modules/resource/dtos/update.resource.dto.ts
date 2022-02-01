import { IsString } from "class-validator";

export class UpdateResourceDTO{
  @IsString()
  readonly nombre_recurso: string;

  @IsString()
  readonly descripcion_recurso: string;

  @IsString()
  readonly enlace_recurso: string;
}