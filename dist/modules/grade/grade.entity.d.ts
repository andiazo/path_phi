import { BaseEntity } from "typeorm";
import { LearningPath } from "../learning-path/learning-path.entity";
import { User } from "../user/user.entity";
export declare class Grade extends BaseEntity {
    grade: number;
    status: string;
    user: User;
    learningPath: LearningPath;
}
