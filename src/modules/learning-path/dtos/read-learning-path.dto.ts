import { IsString, IsNumber } from "class-validator";
import { Exclude, Expose, Type } from "class-transformer";
import { ReadUserDto } from "src/modules/user/dto";

@Exclude()
export class ReadLearningPathDTO{
    @Expose()
    @IsNumber()
    readonly id_ruta: number;

    @Expose()
    @IsString()
    readonly nombre_ruta: string;

    @Expose()
    @IsString()
    readonly descripcion: string;

    @Expose()
    @IsNumber()
    readonly dificultad: number;
    @Expose()
    @IsNumber()
    readonly cantidad_temas: number;
    @Expose()
    @IsNumber()
    readonly cantidad_recursos: number;

    @Expose()
    @Type(type => ReadUserDto)
    readonly users: ReadUserDto[];
}
