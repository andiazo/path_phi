"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const resource_repository_1 = require("../resource/resource.repository");
const topic_controller_1 = require("./topic.controller");
const topic_repository_1 = require("./topic.repository");
const topic_service_1 = require("./topic.service");
let TopicModule = class TopicModule {
};
TopicModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([topic_repository_1.TopicRepository, learning_path_repository_1.LearningPathRepository, resource_repository_1.ResourceRepository])],
        controllers: [topic_controller_1.TopicController],
        providers: [topic_service_1.TopicService]
    })
], TopicModule);
exports.TopicModule = TopicModule;
//# sourceMappingURL=topic.module.js.map