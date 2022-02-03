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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
const topic_repository_1 = require("../topic/topic.repository");
const dtos_1 = require("./dtos");
const resource_repository_1 = require("./resource.repository");
let ResourceService = class ResourceService {
    constructor(_resourceRepository, _topicRepository) {
        this._resourceRepository = _resourceRepository;
        this._topicRepository = _topicRepository;
    }
    async get(id_recurso) {
        if (!id_recurso) {
            throw new common_1.BadRequestException('Se necesita el ID del recurso');
        }
        const recurso = await this._resourceRepository.findOne(id_recurso);
        if (!recurso) {
            throw new common_1.NotFoundException('El recurso no existe');
        }
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadResourceDTO, recurso);
    }
    async getResourceByTopic(id_topic) {
        if (!id_topic) {
            throw new common_1.BadRequestException('Es necesario el ID del tema');
        }
        const recursos = await this._resourceRepository.find({
            where: { status: 'ACTIVE', topics: (0, typeorm_2.In)([id_topic]) },
        });
        return recursos.map(recurso => (0, class_transformer_1.plainToClass)(dtos_1.ReadResourceDTO, recurso));
    }
    async create(recurso) {
        const savedResource = await this._resourceRepository.save({
            nombre_recurso: recurso.nombre_recurso,
            descripcion_recurso: recurso.descripcion_recurso,
            enlace_recurso: recurso.enlace_recurso
        });
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadResourceDTO, savedResource);
    }
    async update(id_recurso, recurso) {
        const resourceExists = await this._resourceRepository.findOne(id_recurso, {
            where: { status: 'ACTIVE' },
        });
        if (!resourceExists) {
            throw new common_1.NotFoundException('Recurso no encontrado');
        }
        const updatedResource = await this._resourceRepository.update(id_recurso, recurso);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadResourceDTO, updatedResource);
    }
    async delete(id_recurso) {
        const recursoExists = await this._resourceRepository.findOne(id_recurso, {
            where: { status: 'ACTIVE' },
        });
        if (!recursoExists) {
            throw new common_1.NotFoundException('Ese tema no existe');
        }
        await this._resourceRepository.update(id_recurso, { status: 'INACTIVE' });
    }
};
ResourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resource_repository_1.ResourceRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(topic_repository_1.TopicRepository)),
    __metadata("design:paramtypes", [resource_repository_1.ResourceRepository,
        topic_repository_1.TopicRepository])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map