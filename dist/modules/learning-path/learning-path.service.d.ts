import { TopicRepository } from '../topic/topic.repository';
import { ReadUserDto } from '../user/dto';
import { UserRepository } from '../user/user.repository';
import { CreateLearningPathDTO, ReadLearningPathDTO, UpdateLearningPathDTO } from './dtos';
import { AddTopicDTO } from './dtos/add-topic.dto';
import { LearningPathRepository } from './learning-path.repository';
export declare class LearningPathService {
    private readonly _learningPathRepository;
    private readonly _userRepository;
    private readonly _topicRepository;
    constructor(_learningPathRepository: LearningPathRepository, _userRepository: UserRepository, _topicRepository: TopicRepository);
    get(id_ruta: number): Promise<ReadLearningPathDTO>;
    getAll(): Promise<ReadLearningPathDTO[]>;
    create(learningPath: Partial<CreateLearningPathDTO>): Promise<ReadLearningPathDTO>;
    update(id_ruta: number, learningPath: Partial<UpdateLearningPathDTO>): Promise<ReadLearningPathDTO>;
    delete(id_ruta: number): Promise<void>;
    enroll(id_ruta: number, userId: number): Promise<ReadUserDto>;
    leave(id_user: number, id_ruta: number): Promise<void>;
    addTopic(id_ruta: number, topicId: AddTopicDTO): Promise<ReadLearningPathDTO>;
}
