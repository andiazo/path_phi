import { ReadLearningPathDTO } from "src/modules/learning-path/dtos";
import { ReadResourceDTO } from "src/modules/resource/dtos";
export declare class ReadTopicDTO {
    readonly id_topic: number;
    readonly name_topic: string;
    readonly description_topic: string;
    readonly resources: ReadResourceDTO[];
    readonly learningPaths: ReadLearningPathDTO[];
}
