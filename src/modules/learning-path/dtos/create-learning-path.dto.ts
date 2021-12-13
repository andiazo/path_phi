import { IsString, IsNotEmpty, IsNumber} from "class-validator";
export class CreateLearningPathDTO{
    @IsNotEmpty()
    @IsString()
    readonly nombre_ruta: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion_ruta: string;

    @IsNotEmpty()
    @IsNumber()
    readonly dificultad: number;

    @IsNotEmpty()
    @IsNumber()
    readonly cantidad_temas: number;

    @IsNotEmpty()
    @IsNumber()
    readonly cantidad_recursos: number;

    @IsNotEmpty()
    @IsString()
    readonly status: string;

    @IsNotEmpty()
    readonly users: number[];
}