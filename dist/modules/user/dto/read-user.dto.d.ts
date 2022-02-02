import { ReadLearningPathDTO } from "src/modules/learning-path/dtos";
import { ReadUserDetailDto } from "./read-user-details.dto";
export declare class ReadUserDto {
    readonly id: number;
    readonly email: string;
    readonly username: string;
    readonly details: ReadUserDetailDto;
    readonly learningPaths: ReadLearningPathDTO[];
}
