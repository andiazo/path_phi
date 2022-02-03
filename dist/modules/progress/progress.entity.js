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
exports.Progress = void 0;
const typeorm_1 = require("typeorm");
const learning_path_entity_1 = require("../learning-path/learning-path.entity");
const topic_entity_1 = require("../topic/topic.entity");
const user_entity_1 = require("../user/user.entity");
let Progress = class Progress extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'ACTIVE', length: 8 }),
    __metadata("design:type", String)
], Progress.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(Type => user_entity_1.User, { primary: true, }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Progress.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(Type => learning_path_entity_1.LearningPath, { primary: true, }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", learning_path_entity_1.LearningPath)
], Progress.prototype, "learningPath", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(Type => topic_entity_1.Topic, { primary: true, }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", topic_entity_1.Topic)
], Progress.prototype, "topic", void 0);
Progress = __decorate([
    (0, typeorm_1.Entity)('avance')
], Progress);
exports.Progress = Progress;
//# sourceMappingURL=progress.entity.js.map