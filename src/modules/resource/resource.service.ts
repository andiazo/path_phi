import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { In } from 'typeorm';
import { ReadTopicDTO } from '../topic/dtos';
import { AddResourceDTO } from '../topic/dtos/add-resource.dto';
import { TopicRepository } from '../topic/topic.repository';
import { CreateResourceDTO, ReadResourceDTO, UpdateResourceDTO } from './dtos';
import { Resource } from './resource.entity';
import { ResourceRepository } from './resource.repository';

@Injectable()
export class ResourceService {
  constructor (
    @InjectRepository(ResourceRepository)
    private readonly _resourceRepository: ResourceRepository,
    
    @InjectRepository(TopicRepository)
    private readonly _topicRepository: TopicRepository,
  ){}

  async get(id_recurso: number): Promise<ReadResourceDTO>{
    if (!id_recurso){
      throw new BadRequestException('Se necesita el ID del recurso');
    } 
    const recurso = await this._resourceRepository.findOne(id_recurso);
    if (!recurso){
      throw new NotFoundException('El recurso no existe');
    }
    return plainToClass(ReadResourceDTO, recurso);
  } 

  async getResourceByTopic(id_topic: number): Promise<ReadResourceDTO[]>{
    if (!id_topic){
      throw new BadRequestException('Es necesario el ID del tema');
    } 
    const recursos: Resource[] = await this._resourceRepository.find({
      where: {status: 'ACTIVE', topics: In([id_topic])}, 
    });
    return recursos.map(recurso => plainToClass(ReadResourceDTO, recurso));
  }

  async create(recurso: Partial<CreateResourceDTO>): Promise<ReadResourceDTO>{
    const savedResource: Resource = await this._resourceRepository.save({
      nombre_recurso: recurso.nombre_recurso, 
      descripcion_recurso: recurso.descripcion_recurso, 
      enlace_recurso: recurso.enlace_recurso
    }); 
    return plainToClass(ReadResourceDTO, savedResource);
  }

  async update(
        id_recurso: number, recurso: Partial<UpdateResourceDTO>
        ): Promise<ReadResourceDTO>{
        const resourceExists = await this._resourceRepository.findOne(id_recurso, {
            where: {status: 'ACTIVE'},
        });
        if (!resourceExists){
            throw new NotFoundException('Recurso no encontrado');
        }
        const updatedResource = await this._resourceRepository.update(id_recurso, recurso);

        return plainToClass(ReadResourceDTO, updatedResource);
    }

    async delete(id_recurso: number): Promise<void>{
        const recursoExists = await this._resourceRepository.findOne(id_recurso, {
            where: {status: 'ACTIVE'},
        });
        if (!recursoExists){
            throw new NotFoundException('Ese tema no existe');
        }
        await this._resourceRepository.update(id_recurso, {status: 'INACTIVE'});
    }

}
