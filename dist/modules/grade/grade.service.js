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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
const learning_path_repository_1 = require("../learning-path/learning-path.repository");
const user_repository_1 = require("../user/user.repository");
const dtos_1 = require("./dtos");
const grade_repository_1 = require("./grade.repository");
let GradeService = class GradeService {
    constructor(_GradeRepository, _learningPathRepository, _userRepository) {
        this._GradeRepository = _GradeRepository;
        this._learningPathRepository = _learningPathRepository;
        this._userRepository = _userRepository;
    }
    async get(id_grade) {
        if (!id_grade) {
            throw new common_1.BadRequestException('Se necesita id de la nota');
        }
        const grade = await this._GradeRepository.findOne(id_grade);
        if (!grade) {
            throw new common_1.NotFoundException('El recurso no existe');
        }
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadGradeDTO, grade);
    }
    async getGradesByLearningPath(id_ruta) {
        if (!id_ruta) {
            throw new common_1.BadRequestException('Es necesario el ID de la ruta');
        }
        const grades = await this._GradeRepository.find({
            where: { status: 'ACTIVE', learningPath: (0, typeorm_2.In)([id_ruta]) },
        });
        return grades.map(grade => (0, class_transformer_1.plainToClass)(dtos_1.ReadGradeDTO, grade));
    }
    async getAverageGradesByLearningPath(id_ruta) {
        if (!id_ruta) {
            throw new common_1.BadRequestException('Es necesario el ID de la ruta');
        }
        const grades = await this._GradeRepository.find({
            where: { status: 'ACTIVE', learningPath: (0, typeorm_2.In)([id_ruta]) },
        });
        let sum_grade = 0;
        for (let grade of grades) {
            sum_grade += grade.grade;
        }
        const average_grade = sum_grade / grades.length;
        return average_grade;
    }
    async create(grade) {
        const id_user = grade.id_user;
        const id_ruta = grade.id_ruta;
        const userExists = await this._userRepository.findOne(id_user, {
            where: { status: 'ACTIVE' },
        });
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: { status: 'ACTIVE' },
        });
        if (!userExists) {
            throw new common_1.NotFoundException("El usuario no existe");
        }
        if (!learningPathExists) {
            throw new common_1.NotFoundException("Ruta de aprendizaje no existe");
        }
        const savedGrade = await this._GradeRepository.save({
            grade: grade.grade,
            user: userExists,
            learningPath: learningPathExists,
        });
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadGradeDTO, savedGrade);
    }
    async update(id_grade, grade) {
        const gradeExists = await this._GradeRepository.findOne(id_grade, {
            where: { status: 'ACTIVE' },
        });
        if (!gradeExists) {
            throw new common_1.NotFoundException('Calificación no encontrada');
        }
        const updatedGrade = await this._GradeRepository.update(id_grade, grade);
        return (0, class_transformer_1.plainToClass)(dtos_1.ReadGradeDTO, updatedGrade);
    }
    async delete(id_grade) {
        const gradeExists = await this._GradeRepository.findOne(id_grade, {
            where: { status: 'ACTIVE' },
        });
        if (!gradeExists) {
            throw new common_1.NotFoundException('La calificación no existe');
        }
        await this._GradeRepository.update(id_grade, { status: 'INACTIVE' });
    }
};
GradeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grade_repository_1.GradeRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(learning_path_repository_1.LearningPathRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [grade_repository_1.GradeRepository,
        learning_path_repository_1.LearningPathRepository,
        user_repository_1.UserRepository])
], GradeService);
exports.GradeService = GradeService;
//# sourceMappingURL=grade.service.js.map