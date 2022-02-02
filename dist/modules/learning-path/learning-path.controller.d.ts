import { CreateLearningPathDTO, ReadLearningPathDTO, UpdateLearningPathDTO } from './dtos';
import { AddTopicDTO } from './dtos/add-topic.dto';
import { LearningPathService } from './learning-path.service';
export declare class LearningPathController {
    private readonly _learningPathService;
    constructor(_learningPathService: LearningPathService);
    getLearningPath(id: number): Promise<ReadLearningPathDTO>;
    getLearningPaths(): Promise<ReadLearningPathDTO[]>;
    createLearningPath(learningPath: Partial<CreateLearningPathDTO>): Promise<ReadLearningPathDTO>;
    updateLearningPath(id: number, learningPath: Partial<UpdateLearningPathDTO>): Promise<ReadLearningPathDTO>;
    deleteLearningPath(id: number): Promise<void>;
    enrollLearningPath(id: number, iduser: number): Promise<import("../user/dto").ReadUserDto>;
    leaveLearningPath(iduser: number, idruta: number): Promise<void>;
    addTopic(id: number, learningPathId: AddTopicDTO): Promise<ReadLearningPathDTO>;
}
