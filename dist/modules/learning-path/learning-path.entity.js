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
exports.LearningPath = void 0;
const typeorm_1 = require("typeorm");
const topic_entity_1 = require("../topic/topic.entity");
const user_entity_1 = require("../user/user.entity");
const comment_entity_1 = require("../comment/comment.entity");
let LearningPath = class LearningPath extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LearningPath.prototype, "id_ruta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: false, unique: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "nombre_ruta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, unique: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "descripcion_ruta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], LearningPath.prototype, "dificultad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], LearningPath.prototype, "cantidad_temas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], LearningPath.prototype, "cantidad_recursos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'ACTIVE', length: 8 }),
    __metadata("design:type", String)
], LearningPath.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => user_entity_1.User, user => user.learningPaths),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], LearningPath.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(Type => topic_entity_1.Topic, topic => topic.learningPaths, { eager: true }),
    (0, typeorm_1.JoinTable)({
        name: "ruta_tema",
        joinColumn: {
            name: "id_ruta",
            referencedColumnName: "id_ruta"
        },
        inverseJoinColumn: {
            name: "id_tema",
            referencedColumnName: "id_topic"
        }
    }),
    __metadata("design:type", Array)
], LearningPath.prototype, "topics", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(Type => comment_entity_1.Comment, comment => comment.learningPath, { eager: true }),
    (0, typeorm_1.JoinTable)({
        name: "comentario_ruta",
        joinColumn: {
            name: "id_ruta",
            referencedColumnName: "id_ruta"
        },
        inverseJoinColumn: {
            name: "id_comentario",
            referencedColumnName: "id_comment"
        }
    }),
    __metadata("design:type", Array)
], LearningPath.prototype, "comments", void 0);
LearningPath = __decorate([
    (0, typeorm_1.Entity)('ruta')
], LearningPath);
exports.LearningPath = LearningPath;
//# sourceMappingURL=learning-path.entity.js.map