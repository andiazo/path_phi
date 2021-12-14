import { IsString, IsNumber } from "class-validator";

export class UpdateLearningPathDTO{
    
    @IsString()
    readonly nombre_ruta: string;

    @IsString()
    readonly descripcion_ruta: string;

    @IsNumber()
    readonly dificultad: number;

    @IsNumber()
    readonly cantidad_temas: number;

    @IsNumber()
    readonly cantidad_recursos: number;
}