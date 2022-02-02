import { UserRepository } from './user.repository';
import { RoleRepository } from '../role/role.repository';
import { ReadUserDto, UpdateUserDto, ReadLearningPathDTO } from './dto';
export declare class UserService {
    private readonly _userRepository;
    private readonly _roleRepository;
    constructor(_userRepository: UserRepository, _roleRepository: RoleRepository);
    get(id: number): Promise<ReadUserDto>;
    getAll(): Promise<ReadUserDto[]>;
    update(userId: number, user: UpdateUserDto): Promise<ReadUserDto>;
    delete(userId: number): Promise<void>;
    setRoleToUser(userId: number, roleId: number): Promise<boolean>;
    getLearningPaths(id_usuario: number): Promise<ReadLearningPathDTO[]>;
}
