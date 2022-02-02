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
var ReadLearningPathDTO_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadLearningPathDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ReadLearningPathDTO = ReadLearningPathDTO_1 = class ReadLearningPathDTO {
};
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReadLearningPathDTO.prototype, "id_ruta", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReadLearningPathDTO.prototype, "nombre_ruta", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReadLearningPathDTO.prototype, "descripcion_ruta", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReadLearningPathDTO.prototype, "dificultad", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReadLearningPathDTO.prototype, "cantidad_temas", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReadLearningPathDTO.prototype, "cantidad_recursos", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(type => ReadLearningPathDTO_1),
    __metadata("design:type", Array)
], ReadLearningPathDTO.prototype, "users", void 0);
ReadLearningPathDTO = ReadLearningPathDTO_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadLearningPathDTO);
exports.ReadLearningPathDTO = ReadLearningPathDTO;
//# sourceMappingURL=read-learning-path.dto.js.map