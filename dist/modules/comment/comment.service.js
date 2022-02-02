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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_repository_1 = require("./comment.repository");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const user_repository_1 = require("../user/user.repository");
const read_comment_dto_1 = require("./dtos/read-comment.dto");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
let CommentService = class CommentService {
    constructor(_CommentRepository, _learningPathRepository, _userRepository) {
        this._CommentRepository = _CommentRepository;
        this._learningPathRepository = _learningPathRepository;
        this._userRepository = _userRepository;
    }
    async get(id_comment) {
        if (!id_comment) {
            throw new common_1.BadRequestException('Se necesita ID del comentario');
        }
        const comment = await this._CommentRepository.findOne(id_comment);
        if (!comment) {
            throw new common_1.NotFoundException('El recurso no existe');
        }
        return (0, class_transformer_1.plainToClass)(read_comment_dto_1.ReadCommentDTO, comment);
    }
    async getCommentByLearninPath(id_ruta) {
        if (!id_ruta) {
            throw new common_1.BadRequestException('Es necesario el ID de la ruta');
        }
        const comments = await this._CommentRepository.find({
            where: { status: 'ACTIVE', learningPath: (0, typeorm_2.In)([id_ruta]) },
        });
        return comments.map(comment => (0, class_transformer_1.plainToClass)(read_comment_dto_1.ReadCommentDTO, comment));
    }
    async create(comment) {
        const id_user = comment.id_user;
        const id_ruta = comment.id_ruta;
        const userExists = await this._userRepository.findOne(id_user, {
            where: { status: 'ACTIVE' },
        });
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!userExists) {
            throw new common_1.NotFoundException("El usuario no existe");
        }
        if (!learningPathExists) {
            throw new common_1.NotFoundException("Ruta de aprendizaje no existe");
        }
        const savedComment = await this._CommentRepository.save({
            content: comment.content,
            user: userExists,
            learningPath: learningPathExists,
        });
        return (0, class_transformer_1.plainToClass)(read_comment_dto_1.ReadCommentDTO, savedComment);
    }
    async update(id_comment, comment) {
        const commentExists = await this._CommentRepository.findOne(id_comment, {
            where: { status: 'ACTIVE' },
        });
        if (!commentExists) {
            throw new common_1.NotFoundException('Comentario no encontrado');
        }
        const updatedComment = await this._CommentRepository.update(id_comment, comment);
        return (0, class_transformer_1.plainToClass)(read_comment_dto_1.ReadCommentDTO, updatedComment);
    }
    async delete(id_comment) {
        const commentExists = await this._CommentRepository.findOne(id_comment, {
            where: { status: 'ACTIVE' },
        });
        if (!commentExists) {
            throw new common_1.NotFoundException('El comentario no existe');
        }
        await this._CommentRepository.update(id_comment, { status: 'INACTIVE' });
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_repository_1.CommentRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(learning_path_repository_1.LearningPathRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository,
        learning_path_repository_1.LearningPathRepository,
        user_repository_1.UserRepository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map