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
exports.Topic = void 0;
const typeorm_1 = require("typeorm");
const learning_path_entity_1 = require("../learning-path/learning-path.entity");
const resource_entity_1 = require("../resource/resource.entity");
let Topic = class Topic extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Topic.prototype, "id_topic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: false }),
    __metadata("design:type", String)
], Topic.prototype, "name_topic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false }),
    __metadata("design:type", String)
], Topic.prototype, "description_topic", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'ACTIVE', length: 8 }),
    __metadata("design:type", String)
], Topic.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(Type => learning_path_entity_1.LearningPath, learningPath => learningPath.topics),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Topic.prototype, "learningPaths", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(Type => resource_entity_1.Resource, resource => resource.topics, { eager: true }),
    (0, typeorm_1.JoinTable)({
        name: "recurso_tema",
        joinColumn: {
            name: "id_tema",
            referencedColumnName: "id_topic"
        },
        inverseJoinColumn: {
            name: "id_recurso",
            referencedColumnName: "id_recurso"
        }
    }),
    __metadata("design:type", Array)
], Topic.prototype, "resources", void 0);
Topic = __decorate([
    (0, typeorm_1.Entity)('tema')
], Topic);
exports.Topic = Topic;
//# sourceMappingURL=topic.entity.js.map