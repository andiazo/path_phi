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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadTopicDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dtos_1 = require("../../learning-path/dtos");
const dtos_2 = require("../../resource/dtos");
const resource_entity_1 = require("../../resource/resource.entity");
let ReadTopicDTO = class ReadTopicDTO {
};
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReadTopicDTO.prototype, "id_topic", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReadTopicDTO.prototype, "name_topic", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReadTopicDTO.prototype, "description_topic", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(type => dtos_2.ReadResourceDTO),
    __metadata("design:type", Array)
], ReadTopicDTO.prototype, "resources", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(type => dtos_1.ReadLearningPathDTO),
    __metadata("design:type", Array)
], ReadTopicDTO.prototype, "learningPaths", void 0);
ReadTopicDTO = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadTopicDTO);
exports.ReadTopicDTO = ReadTopicDTO;
//# sourceMappingURL=read-topic.dto.js.map