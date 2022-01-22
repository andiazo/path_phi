import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { In } from 'typeorm';
import { ReadLearningPathDTO } from '../learning-path/dtos';
import { AddTopicDTO } from '../learning-path/dtos/add-topic.dto';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { Resource } from '../resource/resource.entity';
import { ResourceRepository } from '../resource/resource.repository';
import { CreateTopicDTO, ReadTopicDTO, UpdateTopicDTO } from './dtos';
import { AddResourceDTO } from './dtos/add-resource.dto';
import { Topic } from './topic.entity';
import { TopicRepository } from './topic.repository';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(TopicRepository)
    private readonly _topicRepository: TopicRepository,
    @InjectRepository(TopicRepository)
    private readonly _learningPathRepository: LearningPathRepository,
    @InjectRepository(ResourceRepository)
    private readonly _resourceRepository: ResourceRepository,
  ){}
  async get(id_topic: number): Promise<ReadTopicDTO>{
    if (!id_topic){
      throw new BadRequestException('Se necesita el ID del tema');
    } 
    const topic = await this._topicRepository.findOne(id_topic);
    if (!topic){
      throw new NotFoundException('El tema no existe');
    }
    return plainToClass(ReadTopicDTO, topic);
  } 

  async getTopicByLearningPath(id_ruta: number): Promise<ReadTopicDTO[]>{
    if (!id_ruta){
      throw new BadRequestException('Es necesario el ID de la ruta');
    } 
    const topics: Topic[] = await this._topicRepository.find({
      where: {status: 'ACTIVE', learningPaths: In([id_ruta])}, 
    });
    return topics.map(topic => plainToClass(ReadTopicDTO, topic));
  }

  async create(topic: Partial<CreateTopicDTO>): Promise<ReadTopicDTO>{
    const savedTopic: Topic = await this._topicRepository.save({
      name_topic: topic.name_topic, 
      description_topic: topic.description_topic
    }); 
    return plainToClass(ReadTopicDTO, savedTopic);
  }

  async update(
        id_topic: number, topic: Partial<UpdateTopicDTO>
        ): Promise<ReadTopicDTO>{
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: {status: 'ACTIVE'},
        });
        if (!topicExists){
            throw new NotFoundException('Tema no encontrado');
        }
        const updatedTopic = await this._topicRepository.update(id_topic, topic);

        return plainToClass(ReadTopicDTO, updatedTopic);
    }

    async delete(id_topic: number): Promise<void>{
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: {status: 'ACTIVE'},
        });
        if (!topicExists){
            throw new NotFoundException('Ese tema no existe');
        }
        await this._topicRepository.update(id_topic, {status: 'INACTIVE'});
    }
    
    async addResource(id_topic: number, resourceId: AddResourceDTO): Promise<ReadTopicDTO>{
        const topicExists = await this._topicRepository.findOne(id_topic, {
            where: {status: 'ACTIVE'},
        });
        if (!topicExists){
            throw new NotFoundException('Ese tema no existe');
        }
        const resourceExists = await this._resourceRepository.findOne(resourceId.resource_id)
        if(!resourceExists){
            throw new NotFoundException('Este recurso no existe');
        }
        let resources_list: Resource[] = topicExists.resources;
        resources_list == undefined? resources_list = [resourceExists]:
          resources_list.push(resourceExists);        //twitwi
        topicExists.resources = resources_list;

        const updateTopic = await this._topicRepository.save(topicExists);
        return plainToClass(ReadTopicDTO, updateTopic);
    }

    
}
