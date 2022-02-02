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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const bcryptjs_1 = require("bcryptjs");
const auth_repository_1 = require("./auth.repository");
let AuthService = class AuthService {
    constructor(_authRepository, _jwtService) {
        this._authRepository = _authRepository;
        this._jwtService = _jwtService;
    }
    async signup(signupDto) {
        const { username, email } = signupDto;
        const userExists = await this._authRepository.findOne({
            where: [{ username }, { email }],
        });
        if (userExists) {
            throw new common_1.ConflictException("El nombre de usuario o el email ya están en uso. Intenta con datos distintos");
        }
        return this._authRepository.signup(signupDto);
    }
    async signin(signinDto) {
        const { username, password } = signinDto;
        const user = await this._authRepository.findOne({
            where: { username },
        });
        if (!user) {
            throw new common_1.NotFoundException("El usuario no existe");
        }
        const isMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException("El usuario y la contraseña no coinciden");
        }
        const payload = {
            id: user.id,
            email: user.email,
            username: user.username,
            roles: user.roles.map(r => r.name)
        };
        const id_user = user.id;
        const token = await this._jwtService.sign(payload);
        return [token, id_user];
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_repository_1.AuthRepository)),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map