"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const dtos_1 = require("./dtos");
const role_repository_1 = require("./role.repository");
let RoleService = class RoleService {
    constructor(_roleRepository) {
        this._roleRepository = _roleRepository;
    }
    async get(id) {
        if (!id) {
            throw new common_1.BadRequestException("id must be sent");
        }
        const role = await this._roleRepository.findOne(id, {
            where: { status: 'ACTIVE' },
        });
        if (!role) {
            throw new common_1.NotFoundException("Role does not exist");
        }
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadRoleDto, role);
    }
    async getAll() {
        const roles = await this._roleRepository.find({
            where: { status: 'ACTIVE' },
        });
        return roles.map((role) => (0, class_transformer_1.plainToClass)(dtos_1.ReadRoleDto, role));
    }
    async create(role) {
        const savedRole = await this._roleRepository.save(role);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadRoleDto, savedRole);
    }
    async update(roleId, role) {
        const foundRole = await this._roleRepository.findOne(roleId, {
            where: { status: 'ACTIVE' },
        });
        if (!foundRole) {
            throw new common_1.NotFoundException("This role does not exist");
        }
        foundRole.name = role.name;
        foundRole.description = role.description;
        const updateRole = await this._roleRepository.save(foundRole);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadRoleDto, updateRole);
    }
    async delete(id) {
        const roleExists = await this._roleRepository.findOne(id, {
            where: { status: 'ACTIVE' },
        });
        if (!roleExists) {
            throw new common_1.NotFoundException("Role does not exist");
        }
        await this._roleRepository.update(id, { status: 'INACTIVE' });
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_repository_1.RoleRepository)),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map