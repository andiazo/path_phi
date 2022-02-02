import { TopicRepository } from '../topic/topic.repository';
import { CreateResourceDTO, ReadResourceDTO, UpdateResourceDTO } from './dtos';
import { ResourceRepository } from './resource.repository';
export declare class ResourceService {
    private readonly _resourceRepository;
    private readonly _topicRepository;
    constructor(_resourceRepository: ResourceRepository, _topicRepository: TopicRepository);
    get(id_recurso: number): Promise<ReadResourceDTO>;
    getResourceByTopic(id_topic: number): Promise<ReadResourceDTO[]>;
    create(recurso: Partial<CreateResourceDTO>): Promise<ReadResourceDTO>;
    update(id_recurso: number, recurso: Partial<UpdateResourceDTO>): Promise<ReadResourceDTO>;
    delete(id_recurso: number): Promise<void>;
}
