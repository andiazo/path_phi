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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const resource_service_1 = require("./resource.service");
let ResourceController = class ResourceController {
    constructor(_resourceService) {
        this._resourceService = _resourceService;
    }
    getResource(id) {
        return this._resourceService.get(id);
    }
    getResourceByTopic(id_topic) {
        return this._resourceService.getResourceByTopic(id_topic);
    }
    createResource(resource) {
        return this._resourceService.create(resource);
    }
    updateResource(id, recurso) {
        return this._resourceService.update(id, recurso);
    }
    deleteResource(id) {
        return this._resourceService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getResource", null);
__decorate([
    (0, common_1.Get)('/topic/:id_topic'),
    __param(0, (0, common_1.Param)('id_topic', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getResourceByTopic", null);
__decorate([
    (0, common_1.Post)('/crear-recurso'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "createResource", null);
__decorate([
    (0, common_1.Patch)('/actualizar-recurso/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ResourceController.prototype, "updateResource", null);
__decorate([
    (0, common_1.Delete)('/eliminar-recurso/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "deleteResource", null);
ResourceController = __decorate([
    (0, common_1.Controller)('recurso'),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
exports.ResourceController = ResourceController;
//# sourceMappingURL=resource.controller.js.map