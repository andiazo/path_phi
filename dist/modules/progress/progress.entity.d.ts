import { BaseEntity } from "typeorm";
import { LearningPath } from "../learning-path/learning-path.entity";
import { Topic } from "../topic/topic.entity";
import { User } from "../user/user.entity";
export declare class Progress extends BaseEntity {
    status: string;
    user: User;
    learningPath: LearningPath;
    topic: Topic;
}
