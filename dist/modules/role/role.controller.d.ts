import { RoleService } from './role.service';
import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dtos';
export declare class RoleController {
    private readonly _roleService;
    constructor(_roleService: RoleService);
    getRole(roleId: number): Promise<ReadRoleDto>;
    getRoles(): Promise<ReadRoleDto[]>;
    createRole(role: Partial<CreateRoleDto>): Promise<ReadRoleDto>;
    updateRole(roleId: number, role: Partial<UpdateRoleDto>): Promise<ReadRoleDto>;
    deleteRole(roleId: number): Promise<void>;
}
