import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { In } from 'typeorm';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { TopicRepository } from '../topic/topic.repository';
import { UserRepository } from '../user/user.repository';
import { ReadProgressDTO } from './dtos';
import { CreateProgressDTO } from './dtos/create.progress.dto';
import { Progress } from './progress.entity';
import { ProgressRepository } from './progress.repository';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(ProgressRepository)
    private readonly _progressRepository: ProgressRepository,
    @InjectRepository(LearningPathRepository)
    private readonly _learningPathRepository: LearningPathRepository,
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    @InjectRepository(TopicRepository)
    private readonly _topicRepository: TopicRepository,
  ) { }

  async getCantidadTemas(id_user: number, id_ruta: number): Promise<number>{
    if (!id_user || !id_ruta){
      throw new BadRequestException('Se necesita id del usuario y de la ruta');
    } 
    const progress: Progress[] = await this._progressRepository.find({
      where: {status: 'ACTIVE', learningPath: In([id_ruta]), user: In([id_user])}
    })
    return progress.length
  }

  async getProgress(id_user: number, id_ruta: number): Promise<number>{
    if (!id_user || !id_ruta){
      throw new BadRequestException('Se necesita id del usuario y de la ruta');
    } 
    const progress: Progress[] = await this._progressRepository.find({
      where: {status: 'ACTIVE', learningPath: In([id_ruta]), user: In([id_user])}
    })
    let cantTemas = progress.length

    const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
      where: {status: 'ACTIVE'}, 
    });
    if(!learningPathExists) {
      throw new NotFoundException("Ruta de aprendizaje no existe");
    }

    let totalTemas = learningPathExists.cantidad_temas
    console.log(totalTemas, cantTemas)
    return (cantTemas/totalTemas)*100
  }

  async create(progress: Partial<CreateProgressDTO>): Promise<ReadProgressDTO> {
    const id_user = progress.id_user;
    const id_ruta = progress.id_ruta;
    const id_topic = progress.id_topic;

    const userExists = await this._userRepository.findOne(id_user, {
      where: {status: 'ACTIVE'}, 
    });

    const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
      where: {status: 'ACTIVE'}, 
    });

    const topicExists = await this._topicRepository.findOne(id_topic, {
      where: {status: 'ACTIVE'}, 
    });

    if(!userExists) {
      throw new NotFoundException("Usuario no existe");
    }

    if(!learningPathExists) {
      throw new NotFoundException("Ruta de aprendizaje no existe");
    }

    if(!topicExists) {
      throw new NotFoundException("Tema no existe");
    }

    const savedProgress: Progress = await this._progressRepository.save({
      user: userExists,
      learningPath: learningPathExists,
      topic: topicExists,
      status: 'ACTIVE'
    });
    
    return plainToClass(ReadProgressDTO, savedProgress)

  }

  async delete(id_user: number, id_ruta: number, id_topic: number): Promise<void>{
        await this._progressRepository.update(
          {"user":{"id":id_user},"learningPath":{"id_ruta":id_ruta},"topic":{"id_topic":id_topic}}, 
          {status: 'INACTIVE'}
        );
    }

}
