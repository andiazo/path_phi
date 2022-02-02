import { LearningPath } from "src/modules/learning-path/learning-path.entity";
export declare class CreateTopicDTO {
    readonly name_topic: string;
    readonly description_topic: string;
    readonly learningPaths: LearningPath[];
}
