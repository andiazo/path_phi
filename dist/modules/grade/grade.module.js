"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const user_repository_1 = require("../user/user.repository");
const grade_service_1 = require("./grade.service");
const grade_controller_1 = require("./grade.controller");
const grade_repository_1 = require("./grade.repository");
let GradeModule = class GradeModule {
};
GradeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([grade_repository_1.GradeRepository, learning_path_repository_1.LearningPathRepository, user_repository_1.UserRepository])],
        controllers: [grade_controller_1.GradeController],
        providers: [grade_service_1.GradeService]
    })
], GradeModule);
exports.GradeModule = GradeModule;
//# sourceMappingURL=grade.module.js.map