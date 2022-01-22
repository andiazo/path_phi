import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddTopicDTO } from '../learning-path/dtos/add-topic.dto';
import { CreateTopicDTO, ReadTopicDTO, UpdateTopicDTO } from './dtos';
import { AddResourceDTO } from './dtos/add-resource.dto';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private readonly _topicService: TopicService){}

  @Get('/:id')
  getTopic(@Param('id', ParseIntPipe) id: number): Promise<ReadTopicDTO>{
    return this._topicService.get(id);
  }

  @Get('ruta/:id_ruta')
  getTopicByLearningPath(
    @Param('id_ruta', ParseIntPipe) id_ruta: number): Promise<ReadTopicDTO[]>{
    return this._topicService.getTopicByLearningPath(id_ruta);
  }

  @Post('/crear-tema')
  createTopic(@Body() topic: Partial<CreateTopicDTO>): Promise<ReadTopicDTO>{
    return this._topicService.create(topic);
  }

  @Patch('/actualizar-tema/:id')
    updateTopic(
        @Param('id', ParseIntPipe) id: number,
        @Body() topic: Partial<UpdateTopicDTO>,

    ){
        return this._topicService.update(id, topic);
    }

  @Delete('/eliminar-tema/:id')
  deleteTopic(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return this._topicService.delete(id);
  }

  @Patch('/agregar-recurso/:id')
  addResource(
    @Param('id', ParseIntPipe) id: number, 
    @Body() resourceId: AddResourceDTO, 
  ){
    return this._topicService.addResource(id, resourceId);
  }
}
