import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { ResourceRepository } from '../resource/resource.repository';
import { CreateTopicDTO, ReadTopicDTO, UpdateTopicDTO } from './dtos';
import { AddResourceDTO } from './dtos/add-resource.dto';
import { TopicRepository } from './topic.repository';
export declare class TopicService {
    private readonly _topicRepository;
    private readonly _learningPathRepository;
    private readonly _resourceRepository;
    constructor(_topicRepository: TopicRepository, _learningPathRepository: LearningPathRepository, _resourceRepository: ResourceRepository);
    get(id_topic: number): Promise<ReadTopicDTO>;
    getTopicByLearningPath(id_ruta: number): Promise<ReadTopicDTO[]>;
    create(topic: Partial<CreateTopicDTO>): Promise<ReadTopicDTO>;
    update(id_topic: number, topic: Partial<UpdateTopicDTO>): Promise<ReadTopicDTO>;
    delete(id_topic: number): Promise<void>;
    addResource(id_topic: number, resourceId: AddResourceDTO): Promise<ReadTopicDTO>;
}
