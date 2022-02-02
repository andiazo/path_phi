import { BaseEntity } from "typeorm";
import { LearningPath } from "../learning-path/learning-path.entity";
import { Resource } from "../resource/resource.entity";
export declare class Topic extends BaseEntity {
    id_topic: number;
    name_topic: string;
    description_topic: string;
    status: string;
    learningPaths: LearningPath[];
    resources: Resource[];
}
