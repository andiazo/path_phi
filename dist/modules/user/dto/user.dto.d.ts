import { RoleType } from "src/modules/role/roletype.enum";
import { UserDetails } from "../user.details.entity";
export declare class UserDto {
    id: number;
    username: string;
    email: string;
    roles: RoleType[];
    details: UserDetails;
}
