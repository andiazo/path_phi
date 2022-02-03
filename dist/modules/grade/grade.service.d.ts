import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { UserRepository } from '../user/user.repository';
import { CreateGradeDTO, ReadGradeDTO, UpdateGradeDTO } from './dtos';
import { GradeRepository } from './grade.repository';
export declare class GradeService {
    private readonly _GradeRepository;
    private readonly _learningPathRepository;
    private readonly _userRepository;
    constructor(_GradeRepository: GradeRepository, _learningPathRepository: LearningPathRepository, _userRepository: UserRepository);
    get(id_grade: number): Promise<ReadGradeDTO>;
    getGradesByLearningPath(id_ruta: number): Promise<ReadGradeDTO[]>;
    getAverageGradesByLearningPath(id_ruta: number): Promise<number>;
    0: any;
    create(grade: Partial<CreateGradeDTO>): Promise<ReadGradeDTO>;
    update(id_grade: number, grade: Partial<UpdateGradeDTO>): Promise<ReadGradeDTO>;
    delete(id_grade: number): Promise<void>;
}
