import { ReadTopicDTO } from "src/modules/topic/dtos";
export declare class ReadResourceDTO {
    readonly id_recurso: number;
    readonly nombre_recurso: string;
    readonly descripcion_recurso: string;
    readonly enlace_recurso: string;
    readonly topics: ReadTopicDTO[];
}
