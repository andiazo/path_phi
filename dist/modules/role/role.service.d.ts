import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dtos';
import { RoleRepository } from './role.repository';
export declare class RoleService {
    private readonly _roleRepository;
    constructor(_roleRepository: RoleRepository);
    get(id: number): Promise<ReadRoleDto>;
    getAll(): Promise<ReadRoleDto[]>;
    create(role: Partial<CreateRoleDto>): Promise<ReadRoleDto>;
    update(roleId: number, role: Partial<UpdateRoleDto>): Promise<ReadRoleDto>;
    delete(id: number): Promise<void>;
}
