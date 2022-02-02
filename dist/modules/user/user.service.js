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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("./user.repository");
const role_repository_1 = require("../role/role.repository");
const entity_status_enum_1 = require("../../shared/entity-status.enum");
const dto_1 = require("./dto");
const class_transformer_1 = require("class-transformer");
let UserService = class UserService {
    constructor(_userRepository, _roleRepository) {
        this._userRepository = _userRepository;
        this._roleRepository = _roleRepository;
    }
    async get(id) {
        if (!id) {
            throw new common_1.BadRequestException("id must be sent");
        }
        const user = await this._userRepository.findOne(id, {
            where: { status: entity_status_enum_1.status.ACTIVE },
        });
        if (!user) {
            throw new common_1.NotFoundException("User does not exist");
        }
        return (0, class_transformer_1.plainToClass)(dto_1.ReadUserDto, user);
    }
    async getAll() {
        const users = await this._userRepository.find({
            where: { status: entity_status_enum_1.status.ACTIVE },
        });
        return users.map((user) => (0, class_transformer_1.plainToClass)(dto_1.ReadUserDto, user));
    }
    async update(userId, user) {
        const foundUser = await this._userRepository.findOne(userId, {
            where: { status: 'ACTIVE' },
        });
        if (!foundUser) {
            throw new common_1.NotFoundException("User does not exist");
        }
        foundUser.username = user.username;
        const updateUser = await this._userRepository.save(foundUser);
        return (0, class_transformer_1.plainToClass)(dto_1.ReadUserDto, updateUser);
    }
    async delete(userId) {
        const userExist = await this._userRepository.findOne(userId, {
            where: { status: entity_status_enum_1.status.ACTIVE },
        });
        if (!userExist) {
            throw new common_1.NotFoundException("User does not exist");
        }
        await this._userRepository.update(userId, { status: 'INACTIVE' });
    }
    async setRoleToUser(userId, roleId) {
        const userExist = await this._userRepository.findOne(userId, {
            where: { status: entity_status_enum_1.status.ACTIVE },
        });
        if (!userExist) {
            throw new common_1.NotFoundException("User does not exist");
        }
        const roleExist = await this._roleRepository.findOne(roleId, {
            where: { status: entity_status_enum_1.status.ACTIVE },
        });
        if (!roleExist) {
            throw new common_1.NotFoundException("Role does not exist");
        }
        userExist.roles.push(roleExist);
        await this._userRepository.save(userExist);
        return true;
    }
    async getLearningPaths(id_usuario) {
        if (!id_usuario) {
            throw new common_1.BadRequestException('Se necesita el id del usuario');
        }
        const user = await this._userRepository.findOne(id_usuario, {
            relations: ["learningPaths"]
        });
        return user.learningPaths.map(learningPath => (0, class_transformer_1.plainToClass)(dto_1.ReadLearningPathDTO, learningPath));
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(role_repository_1.RoleRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        role_repository_1.RoleRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map