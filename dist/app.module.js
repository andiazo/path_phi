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
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const config_keys_1 = require("./config/config.keys");
const database_module_1 = require("./database/database.module");
const user_module_1 = require("./modules/user/user.module");
const role_module_1 = require("./modules/role/role.module");
const auth_module_1 = require("./modules/auth/auth.module");
const learning_path_module_1 = require("./modules/learning-path/learning-path.module");
const topic_module_1 = require("./modules/topic/topic.module");
const resource_module_1 = require("./modules/resource/resource.module");
const comment_module_1 = require("./modules/comment/comment.module");
const grade_module_1 = require("./modules/grade/grade.module");
const progress_module_1 = require("./modules/progress/progress.module");
let AppModule = AppModule_1 = class AppModule {
    constructor(_configService) {
        this._configService = _configService;
        AppModule_1.port = this._configService.get(config_keys_1.Configuration.PORT);
    }
};
AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [config_module_1.ConfigModule, database_module_1.DatabaseModule, user_module_1.UserModule, role_module_1.RoleModule, auth_module_1.AuthModule, learning_path_module_1.LearningPathModule, topic_module_1.TopicModule, resource_module_1.ResourceModule, comment_module_1.CommentModule, grade_module_1.GradeModule, progress_module_1.ProgressModule],
    }),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map