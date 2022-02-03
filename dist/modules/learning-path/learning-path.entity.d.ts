import { BaseEntity } from "typeorm";
import { Topic } from "../topic/topic.entity";
import { User } from "../user/user.entity";
import { Comment } from "../comment/comment.entity";
export declare class LearningPath extends BaseEntity {
    id_ruta: number;
    nombre_ruta: string;
    descripcion_ruta: string;
    dificultad: number;
    cantidad_temas: number;
    cantidad_recursos: number;
    status: string;
    users: User[];
    topics: Topic[];
    comments: Comment[];
}
