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
exports.ProgressController = void 0;
const common_1 = require("@nestjs/common");
const progress_service_1 = require("./progress.service");
let ProgressController = class ProgressController {
    constructor(_progressService) {
        this._progressService = _progressService;
    }
    getCantidadTemas(iduser, idruta) {
        return this._progressService.getCantidadTemas(iduser, idruta);
    }
    getProgress(iduser, idruta) {
        return this._progressService.getProgress(iduser, idruta);
    }
    createProgress(progress) {
        return this._progressService.create(progress);
    }
    deleteProgress(iduser, idruta, idtopic) {
        return this._progressService.delete(iduser, idruta, idtopic);
    }
};
__decorate([
    (0, common_1.Get)('cantidad-temas-vistos/:iduser/:idruta'),
    __param(0, (0, common_1.Param)('iduser', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idruta', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProgressController.prototype, "getCantidadTemas", null);
__decorate([
    (0, common_1.Get)('/:iduser/:idruta'),
    __param(0, (0, common_1.Param)('iduser', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idruta', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProgressController.prototype, "getProgress", null);
__decorate([
    (0, common_1.Post)('/avanzar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProgressController.prototype, "createProgress", null);
__decorate([
    (0, common_1.Delete)('/eliminar-avance/:iduser/:idruta/:idtopic'),
    __param(0, (0, common_1.Param)('iduser', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('idruta')),
    __param(2, (0, common_1.Param)('idtopic')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ProgressController.prototype, "deleteProgress", null);
ProgressController = __decorate([
    (0, common_1.Controller)('progress'),
    __metadata("design:paramtypes", [progress_service_1.ProgressService])
], ProgressController);
exports.ProgressController = ProgressController;
//# sourceMappingURL=progress.controller.js.map