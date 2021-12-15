import { BaseEntity } from "typeorm";
import { UserDetails } from './user.details.entity';
import { Role } from '../role/role.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    details: UserDetails;
    roles: Role[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
