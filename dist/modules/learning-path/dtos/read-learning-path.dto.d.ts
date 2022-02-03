import { ReadUserDto } from "src/modules/user/dto";
import { ReadTopicDTO } from "src/modules/topic/dtos";
export declare class ReadLearningPathDTO {
    readonly id_ruta: number;
    readonly nombre_ruta: string;
    readonly descripcion_ruta: string;
    readonly dificultad: number;
    readonly cantidad_temas: number;
    readonly cantidad_recursos: number;
    readonly topics: ReadTopicDTO[];
    readonly users: ReadUserDto[];
}
