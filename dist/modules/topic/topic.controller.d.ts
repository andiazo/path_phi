import { CreateTopicDTO, ReadTopicDTO, UpdateTopicDTO } from './dtos';
import { AddResourceDTO } from './dtos/add-resource.dto';
import { TopicService } from './topic.service';
export declare class TopicController {
    private readonly _topicService;
    constructor(_topicService: TopicService);
    getTopic(id: number): Promise<ReadTopicDTO>;
    getTopicByLearningPath(id_ruta: number): Promise<ReadTopicDTO[]>;
    createTopic(topic: Partial<CreateTopicDTO>): Promise<ReadTopicDTO>;
    updateTopic(id: number, topic: Partial<UpdateTopicDTO>): Promise<ReadTopicDTO>;
    deleteTopic(id: number): Promise<void>;
    addResource(id: number, resourceId: AddResourceDTO): Promise<ReadTopicDTO>;
}
