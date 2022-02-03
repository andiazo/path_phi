import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { TopicRepository } from '../topic/topic.repository';
import { UserRepository } from '../user/user.repository';
import { ReadProgressDTO } from './dtos';
import { CreateProgressDTO } from './dtos/create.progress.dto';
import { ProgressRepository } from './progress.repository';
export declare class ProgressService {
    private readonly _progressRepository;
    private readonly _learningPathRepository;
    private readonly _userRepository;
    private readonly _topicRepository;
    constructor(_progressRepository: ProgressRepository, _learningPathRepository: LearningPathRepository, _userRepository: UserRepository, _topicRepository: TopicRepository);
    getCantidadTemas(id_user: number, id_ruta: number): Promise<number>;
    getProgress(id_user: number, id_ruta: number): Promise<number>;
    create(progress: Partial<CreateProgressDTO>): Promise<ReadProgressDTO>;
    delete(id_user: number, id_ruta: number, id_topic: number): Promise<void>;
}
