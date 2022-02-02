import { BaseEntity } from "typeorm";
import { LearningPath } from "../learning-path/learning-path.entity";
import { User } from "../user/user.entity";
export declare class Comment extends BaseEntity {
    id_comment: number;
    content: string;
    status: string;
    user: User;
    learningPath: LearningPath;
}
