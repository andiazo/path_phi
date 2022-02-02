import { BaseEntity } from "typeorm";
import { UserDetails } from './user.details.entity';
import { Role } from '../role/role.entity';
import { LearningPath } from "../learning-path/learning-path.entity";
import { Comment } from "../comment/comment.entity";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    details: UserDetails;
    roles: Role[];
    learningPaths: LearningPath[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
    comment: Comment;
}
