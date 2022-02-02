"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const topic_repository_1 = require("../topic/topic.repository");
const user_repository_1 = require("../user/user.repository");
const progress_controller_1 = require("./progress.controller");
const progress_repository_1 = require("./progress.repository");
const progress_service_1 = require("./progress.service");
let ProgressModule = class ProgressModule {
};
ProgressModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([progress_repository_1.ProgressRepository, learning_path_repository_1.LearningPathRepository, user_repository_1.UserRepository, topic_repository_1.TopicRepository])],
        controllers: [progress_controller_1.ProgressController],
        providers: [progress_service_1.ProgressService]
    })
], ProgressModule);
exports.ProgressModule = ProgressModule;
//# sourceMappingURL=progress.module.js.map