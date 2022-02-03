import { CreateResourceDTO, ReadResourceDTO, UpdateResourceDTO } from './dtos';
import { ResourceService } from './resource.service';
export declare class ResourceController {
    private readonly _resourceService;
    constructor(_resourceService: ResourceService);
    getResource(id: number): Promise<ReadResourceDTO>;
    getResourceByTopic(id_topic: number): Promise<ReadResourceDTO[]>;
    createResource(resource: Partial<CreateResourceDTO>): Promise<ReadResourceDTO>;
    updateResource(id: number, recurso: Partial<UpdateResourceDTO>): Promise<ReadResourceDTO>;
    deleteResource(id: number): Promise<void>;
}
