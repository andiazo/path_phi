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
exports.LearningPathService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const topic_repository_1 = require("../topic/topic.repository");
const dto_1 = require("../user/dto");
const user_repository_1 = require("../user/user.repository");
const dtos_1 = require("./dtos");
const learning_path_repository_1 = require("./learning-path.repository");
let LearningPathService = class LearningPathService {
    constructor(_learningPathRepository, _userRepository, _topicRepository) {
        this._learningPathRepository = _learningPathRepository;
        this._userRepository = _userRepository;
        this._topicRepository = _topicRepository;
    }
    async get(id_ruta) {
        if (!id_ruta) {
            throw new common_1.BadRequestException('No se ha enviado id_ruta');
        }
        const learningPath = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!learningPath) {
            throw new common_1.NotFoundException('Ruta no encontrada');
        }
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadLearningPathDTO, learningPath);
    }
    async getAll() {
        const learningPaths = await this._learningPathRepository.find({
            where: { status: 'ACTIVE' },
        });
        return learningPaths.map(learningPath => (0, class_transformer_1.plainToClass)(dtos_1.ReadLearningPathDTO, learningPath));
    }
    async create(learningPath) {
        console.log(learningPath.topics);
        console.log(learningPath.cantidad_recursos);
        const savedLearningPath = await this._learningPathRepository.save({
            nombre_ruta: learningPath.nombre_ruta,
            descripcion_ruta: learningPath.descripcion_ruta,
            dificultad: learningPath.dificultad,
            cantidad_temas: learningPath.cantidad_temas,
            cantidad_recursos: learningPath.cantidad_recursos,
        });
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadLearningPathDTO, savedLearningPath);
    }
    async update(id_ruta, learningPath) {
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!learningPathExists) {
            throw new common_1.NotFoundException('Ruta no encontrada');
        }
        const updatedLearningPath = await this._learningPathRepository.update(id_ruta, learningPath);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadLearningPathDTO, updatedLearningPath);
    }
    async delete(id_ruta) {
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!learningPathExists) {
            throw new common_1.NotFoundException('Esa ruta no existe');
        }
        await this._learningPathRepository.update(id_ruta, { status: 'INACTIVE' });
    }
    async enroll(id_ruta, userId) {
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!learningPathExists) {
            throw new common_1.NotFoundException('Esa ruta no existe');
        }
        const userExists = await this._userRepository.findOne(userId);
        if (!userExists) {
            throw new common_1.NotFoundException('Este usuario no existe');
        }
        let rutas = userExists.learningPaths;
        rutas == undefined ? rutas = [learningPathExists] :
            rutas.push(learningPathExists);
        userExists.learningPaths = rutas;
        const updateUser = await this._userRepository.save(userExists);
        return (0, class_transformer_1.plainToClass)(dto_1.ReadUserDto, updateUser);
    }
    async leave(id_user, id_ruta) {
        const userExists = await this._userRepository.findOne(id_user);
        if (!userExists) {
            throw new common_1.NotFoundException('Este usuario no existe');
        }
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta);
        if (!learningPathExists) {
            throw new common_1.NotFoundException('Este usuario no existe');
        }
        userExists.learningPaths.forEach(function (l, index, object) {
            if (l.id_ruta == learningPathExists.id_ruta) {
                object.splice(index, 1);
            }
        });
        const updateUser = await this._userRepository.save(userExists);
        console.log(userExists.learningPaths);
    }
    async addTopic(id_ruta, topicId) {
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!learningPathExists) {
            throw new common_1.NotFoundException('Esa ruta no existe');
        }
        const topicExists = await this._topicRepository.findOne(topicId.id_topic);
        if (!topicExists) {
            throw new common_1.NotFoundException('Este tema no existe');
        }
        let topics_list = learningPathExists.topics;
        topics_list == undefined ? topics_list = [topicExists] :
            topics_list.push(topicExists);
        learningPathExists.topics = topics_list;
        const updateLearn = await this._learningPathRepository.save(learningPathExists);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadLearningPathDTO, updateLearn);
    }
};
LearningPathService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(learning_path_repository_1.LearningPathRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(topic_repository_1.TopicRepository)),
    __metadata("design:paramtypes", [learning_path_repository_1.LearningPathRepository,
        user_repository_1.UserRepository,
        topic_repository_1.TopicRepository])
], LearningPathService);
exports.LearningPathService = LearningPathService;
//# sourceMappingURL=learning-path.service.js.map