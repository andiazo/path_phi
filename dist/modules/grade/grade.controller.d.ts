import { CreateGradeDTO, ReadGradeDTO, UpdateGradeDTO } from './dtos';
import { GradeService } from './grade.service';
export declare class GradeController {
    private readonly _gradeService;
    constructor(_gradeService: GradeService);
    getGrade(id: number): Promise<ReadGradeDTO>;
    getGradeByLearningPath(id_ruta: number): Promise<ReadGradeDTO[]>;
    getAverageGradeByLearningPath(id_ruta: number): Promise<number>;
    createGrade(grade: Partial<CreateGradeDTO>): Promise<ReadGradeDTO>;
    updateGrade(id: number, grade: Partial<UpdateGradeDTO>): Promise<ReadGradeDTO>;
    deleteGrade(id: number): Promise<void>;
}
