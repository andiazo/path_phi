import { User } from "src/modules/user/user.entity";
export declare class CreateLearningPathDTO {
    readonly nombre_ruta: string;
    readonly descripcion_ruta: string;
    readonly dificultad: number;
    readonly cantidad_temas: number;
    readonly cantidad_recursos: number;
    readonly status: string;
    readonly users: User[];
    readonly topics: number[];
}
