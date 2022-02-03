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
exports.ProgressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const topic_repository_1 = require("../topic/topic.repository");
const user_repository_1 = require("../user/user.repository");
const dtos_1 = require("./dtos");
const progress_repository_1 = require("./progress.repository");
let ProgressService = class ProgressService {
    constructor(_progressRepository, _learningPathRepository, _userRepository, _topicRepository) {
        this._progressRepository = _progressRepository;
        this._learningPathRepository = _learningPathRepository;
        this._userRepository = _userRepository;
        this._topicRepository = _topicRepository;
    }
    async getCantidadTemas(id_user, id_ruta) {
        if (!id_user || !id_ruta) {
            throw new common_1.BadRequestException('Se necesita id del usuario y de la ruta');
        }
        const progress = await this._progressRepository.find({
            where: { status: 'ACTIVE', learningPath: (0, typeorm_2.In)([id_ruta]), user: (0, typeorm_2.In)([id_user]) }
        });
        return progress.length;
    }
    async getProgress(id_user, id_ruta) {
        if (!id_user || !id_ruta) {
            throw new common_1.BadRequestException('Se necesita id del usuario y de la ruta');
        }
        const progress = await this._progressRepository.find({
            where: { status: 'ACTIVE', learningPath: (0, typeorm_2.In)([id_ruta]), user: (0, typeorm_2.In)([id_user]) }
        });
        let cantTemas = progress.length;
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!learningPathExists) {
            throw new common_1.NotFoundException("Ruta de aprendizaje no existe");
        }
        let totalTemas = learningPathExists.cantidad_temas;
        console.log(totalTemas, cantTemas);
        return (cantTemas / totalTemas) * 100;
    }
    async create(progress) {
        const id_user = progress.id_user;
        const id_ruta = progress.id_ruta;
        const id_topic = progress.id_topic;
        const userExists = await this._userRepository.findOne(id_user, {
            where: { status: 'ACTIVE' },
        });
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: { status: 'ACTIVE' },
        });
        if (!userExists) {
            throw new common_1.NotFoundException("Usuario no existe");
        }
        if (!learningPathExists) {
            throw new common_1.NotFoundException("Ruta de aprendizaje no existe");
        }
        if (!topicExists) {
            throw new common_1.NotFoundException("Tema no existe");
        }
        const savedProgress = await this._progressRepository.save({
            user: userExists,
            learningPath: learningPathExists,
            topic: topicExists,
            status: 'ACTIVE'
        });
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadProgressDTO, savedProgress);
    }
    async delete(id_user, id_ruta, id_topic) {
        await this._progressRepository.update({ "user": { "id": id_user }, "learningPath": { "id_ruta": id_ruta }, "topic": { "id_topic": id_topic } }, { status: 'INACTIVE' });
    }
};
ProgressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(progress_repository_1.ProgressRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(learning_path_repository_1.LearningPathRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(topic_repository_1.TopicRepository)),
    __metadata("design:paramtypes", [progress_repository_1.ProgressRepository,
        learning_path_repository_1.LearningPathRepository,
        user_repository_1.UserRepository,
        topic_repository_1.TopicRepository])
], ProgressService);
exports.ProgressService = ProgressService;
//# sourceMappingURL=progress.service.js.map