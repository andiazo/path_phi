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
exports.LearningPathController = void 0;
const common_1 = require("@nestjs/common");
const add_topic_dto_1 = require("./dtos/add-topic.dto");
const learning_path_service_1 = require("./learning-path.service");
let LearningPathController = class LearningPathController {
    constructor(_learningPathService) {
        this._learningPathService = _learningPathService;
    }
    getLearningPath(id) {
        return this._learningPathService.get(id);
    }
    getLearningPaths() {
        return this._learningPathService.getAll();
    }
    createLearningPath(learningPath) {
        return this._learningPathService.create(learningPath);
    }
    updateLearningPath(id, learningPath) {
        return this._learningPathService.update(id, learningPath);
    }
    deleteLearningPath(id) {
        return this._learningPathService.delete(id);
    }
    enrollLearningPath(id, iduser) {
        return this._learningPathService.enroll(id, iduser);
    }
    leaveLearningPath(iduser, idruta) {
        return this._learningPathService.leave(iduser, idruta);
    }
    addTopic(id, learningPathId) {
        return this._learningPathService.addTopic(id, learningPathId);
    }
};
__decorate([
    (0, common_1.Get)('/consultar/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LearningPathController.prototype, "getLearningPath", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LearningPathController.prototype, "getLearningPaths", null);
__decorate([
    (0, common_1.Post)('/crear-ruta'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LearningPathController.prototype, "createLearningPath", null);
__decorate([
    (0, common_1.Patch)('/actualizar/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LearningPathController.prototype, "updateLearningPath", null);
__decorate([
    (0, common_1.Delete)('/eliminar/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LearningPathController.prototype, "deleteLearningPath", null);
__decorate([
    (0, common_1.Patch)('/enroll/:id/:iduser'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('iduser', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LearningPathController.prototype, "enrollLearningPath", null);
__decorate([
    (0, common_1.Delete)('/leave/:iduser/:idruta'),
    __param(0, (0, common_1.Param)('iduser', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idruta', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LearningPathController.prototype, "leaveLearningPath", null);
__decorate([
    (0, common_1.Patch)('/agregar-tema/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_topic_dto_1.AddTopicDTO]),
    __metadata("design:returntype", void 0)
], LearningPathController.prototype, "addTopic", null);
LearningPathController = __decorate([
    (0, common_1.Controller)('learning-path'),
    __metadata("design:paramtypes", [learning_path_service_1.LearningPathService])
], LearningPathController);
exports.LearningPathController = LearningPathController;
//# sourceMappingURL=learning-path.controller.js.map