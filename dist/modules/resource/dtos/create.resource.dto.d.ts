import { Topic } from "src/modules/topic/topic.entity";
export declare class CreateResourceDTO {
    readonly nombre_recurso: string;
    readonly descripcion_recurso: string;
    readonly enlace_recurso: string;
    readonly topics: Topic[];
}
