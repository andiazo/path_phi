import { BaseEntity } from "typeorm";
import { Topic } from "../topic/topic.entity";
export declare class Resource extends BaseEntity {
    id_recurso: number;
    nombre_recurso: string;
    descripcion_recurso: string;
    enlace_recurso: string;
    status: string;
    topics: Topic[];
}
