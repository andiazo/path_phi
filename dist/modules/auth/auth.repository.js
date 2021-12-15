"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../role/role.entity");
const roletype_enum_1 = require("../role/roletype.enum");
const user_details_entity_1 = require("../user/user.details.entity");
const bcryptjs_1 = require("bcryptjs");
let AuthRepository = class AuthRepository extends typeorm_1.Repository {
    async signup(signupDto) {
        const { username, email, password } = signupDto;
        const user = new user_entity_1.User();
        user.username = username;
        user.email = email;
        const roleRepository = await (0, typeorm_1.getConnection)().getRepository(role_entity_1.Role);
        const defaultRole = await roleRepository.findOne({ where: { name: roletype_enum_1.RoleType.GENERAL } });
        user.roles = [defaultRole];
        const details = new user_details_entity_1.UserDetails();
        user.details = details;
        const salt = await (0, bcryptjs_1.genSalt)(10);
        user.password = await (0, bcryptjs_1.hash)(password, salt);
        await user.save();
    }
};
AuthRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], AuthRepository);
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map