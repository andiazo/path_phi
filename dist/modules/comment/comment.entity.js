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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
const learning_path_entity_1 = require("../learning-path/learning-path.entity");
const user_entity_1 = require("../user/user.entity");
let Comment = class Comment extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Comment.prototype, "id_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'ACTIVE', length: 8 }),
    __metadata("design:type", String)
], Comment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(Type => user_entity_1.User, user => user.comment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Comment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(Type => learning_path_entity_1.LearningPath, learningPath => learningPath.comments),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", learning_path_entity_1.LearningPath)
], Comment.prototype, "learningPath", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)('comentario')
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map