import { UserService } from './user.service';
import { ReadUserDto, UpdateUserDto } from './dto';
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    getUser(userId: number): Promise<ReadUserDto>;
    getUsers(): Promise<ReadUserDto[]>;
    updateUser(userId: number, user: UpdateUserDto): Promise<ReadUserDto>;
    deleteUser(userId: number): Promise<void>;
    setRoleToUser(userId: number, roleId: number): Promise<boolean>;
}
