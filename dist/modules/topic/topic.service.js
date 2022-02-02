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
exports.TopicService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const resource_repository_1 = require("../resource/resource.repository");
const dtos_1 = require("./dtos");
const topic_repository_1 = require("./topic.repository");
let TopicService = class TopicService {
    constructor(_topicRepository, _learningPathRepository, _resourceRepository) {
        this._topicRepository = _topicRepository;
        this._learningPathRepository = _learningPathRepository;
        this._resourceRepository = _resourceRepository;
    }
    async get(id_topic) {
        if (!id_topic) {
            throw new common_1.BadRequestException('Se necesita el ID del tema');
        }
        const topic = await this._topicRepository.findOne(id_topic);
        if (!topic) {
            throw new common_1.NotFoundException('El tema no existe');
        }
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadTopicDTO, topic);
    }
    async getTopicByLearningPath(id_ruta) {
        if (!id_ruta) {
            throw new common_1.BadRequestException('Es necesario el ID de la ruta');
        }
        const topics = await this._topicRepository.find({
            where: { status: 'ACTIVE', learningPaths: (0, typeorm_2.In)([id_ruta]) },
        });
        return topics.map(topic => (0, class_transformer_1.plainToClass)(dtos_1.ReadTopicDTO, topic));
    }
    async create(topic) {
        const savedTopic = await this._topicRepository.save({
            name_topic: topic.name_topic,
            description_topic: topic.description_topic
        });
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadTopicDTO, savedTopic);
    }
    async update(id_topic, topic) {
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: { status: 'ACTIVE' },
        });
        if (!topicExists) {
            throw new common_1.NotFoundException('Tema no encontrado');
        }
        const updatedTopic = await this._topicRepository.update(id_topic, topic);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadTopicDTO, updatedTopic);
    }
    async delete(id_topic) {
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: { status: 'ACTIVE' },
        });
        if (!topicExists) {
            throw new common_1.NotFoundException('Ese tema no existe');
        }
        await this._topicRepository.update(id_topic, { status: 'INACTIVE' });
    }
    async addResource(id_topic, resourceId) {
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: { status: 'ACTIVE' },
        });
        if (!topicExists) {
            throw new common_1.NotFoundException('Ese tema no existe');
        }
        const resourceExists = await this._resourceRepository.findOne(resourceId.resource_id);
        if (!resourceExists) {
            throw new common_1.NotFoundException('Este recurso no existe');
        }
        let resources_list = topicExists.resources;
        resources_list == undefined ? resources_list = [resourceExists] :
            resources_list.push(resourceExists);
        topicExists.resources = resources_list;
        const updateTopic = await this._topicRepository.save(topicExists);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadTopicDTO, updateTopic);
    }
};
TopicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(topic_repository_1.TopicRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(topic_repository_1.TopicRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(resource_repository_1.ResourceRepository)),
    __metadata("design:paramtypes", [topic_repository_1.TopicRepository,
        learning_path_repository_1.LearningPathRepository,
        resource_repository_1.ResourceRepository])
], TopicService);
exports.TopicService = TopicService;
//# sourceMappingURL=topic.service.js.map