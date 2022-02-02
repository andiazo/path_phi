import { UserService } from './user.service';
import { ReadUserDto, UpdateUserDto } from './dto';
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    getUser(userId: number): Promise<ReadUserDto>;
    getRutas(id_usuario: number): Promise<import("./dto").ReadLearningPathDTO[]>;
    getUsers(): Promise<ReadUserDto[]>;
    updateUser(userId: number, user: UpdateUserDto): Promise<ReadUserDto>;
    deleteUser(userId: number): Promise<void>;
    setRoleToUser(userId: number, roleId: number): Promise<boolean>;
}
