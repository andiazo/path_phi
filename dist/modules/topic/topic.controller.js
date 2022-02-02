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
exports.TopicController = void 0;
const common_1 = require("@nestjs/common");
const add_resource_dto_1 = require("./dtos/add-resource.dto");
const topic_service_1 = require("./topic.service");
let TopicController = class TopicController {
    constructor(_topicService) {
        this._topicService = _topicService;
    }
    getTopic(id) {
        return this._topicService.get(id);
    }
    getTopicByLearningPath(id_ruta) {
        return this._topicService.getTopicByLearningPath(id_ruta);
    }
    createTopic(topic) {
        return this._topicService.create(topic);
    }
    updateTopic(id, topic) {
        return this._topicService.update(id, topic);
    }
    deleteTopic(id) {
        return this._topicService.delete(id);
    }
    addResource(id, resourceId) {
        return this._topicService.addResource(id, resourceId);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getTopic", null);
__decorate([
    (0, common_1.Get)('ruta/:id_ruta'),
    __param(0, (0, common_1.Param)('id_ruta', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getTopicByLearningPath", null);
__decorate([
    (0, common_1.Post)('/crear-tema'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "createTopic", null);
__decorate([
    (0, common_1.Patch)('/actualizar-tema/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "updateTopic", null);
__decorate([
    (0, common_1.Delete)('/eliminar-tema/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "deleteTopic", null);
__decorate([
    (0, common_1.Patch)('/agregar-recurso/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_resource_dto_1.AddResourceDTO]),
    __metadata("design:returntype", void 0)
], TopicController.prototype, "addResource", null);
TopicController = __decorate([
    (0, common_1.Controller)('topic'),
    __metadata("design:paramtypes", [topic_service_1.TopicService])
], TopicController);
exports.TopicController = TopicController;
//# sourceMappingURL=topic.controller.js.map