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
exports.Resource = void 0;
const typeorm_1 = require("typeorm");
const topic_entity_1 = require("../topic/topic.entity");
let Resource = class Resource extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Resource.prototype, "id_recurso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: false, unique: true }),
    __metadata("design:type", String)
], Resource.prototype, "nombre_recurso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, unique: true }),
    __metadata("design:type", String)
], Resource.prototype, "descripcion_recurso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, unique: true }),
    __metadata("design:type", String)
], Resource.prototype, "enlace_recurso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'ACTIVE', length: 8 }),
    __metadata("design:type", String)
], Resource.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(Type => topic_entity_1.Topic, topic => topic.resources),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Resource.prototype, "topics", void 0);
Resource = __decorate([
    (0, typeorm_1.Entity)('recurso')
], Resource);
exports.Resource = Resource;
//# sourceMappingURL=resource.entity.js.map