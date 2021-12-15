import { BaseEntity } from "typeorm";
export declare class UserDetails extends BaseEntity {
    id: number;
    name: string;
    lastname: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
