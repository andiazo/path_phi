import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { identity } from 'rxjs';
import { DeleteDateColumn } from 'typeorm';
import { CreateLearningPathDTO, ReadLearningPathDTO, UpdateLearningPathDTO } from './dtos';
import { AddTopicDTO } from './dtos/add-topic.dto';
import { EnrollUserDTO } from './dtos/enroll-user.dto';
import { LearningPathService } from './learning-path.service';

@Controller('learning-path')
export class LearningPathController {
  constructor(private readonly _learningPathService: LearningPathService) { }

  @Get('/consultar/:id')
  getLearningPath(@Param('id', ParseIntPipe) id: number): Promise<ReadLearningPathDTO> {
    return this._learningPathService.get(id);
  }
  //Espacio para cuando existan asociaciones uwu

  @Get()
  getLearningPaths(): Promise<ReadLearningPathDTO[]> {
    return this._learningPathService.getAll();
  }

  /*@Get('/usuario/:id')
  getByUser(@Param('id', ParseIntPipe) id:number){
      return this._learningPathService.getLearningPathByUser(id)
  }*/

  @Post('/crear-ruta')
  createLearningPath(@Body() learningPath: Partial<CreateLearningPathDTO>): Promise<ReadLearningPathDTO> {
    return this._learningPathService.create(learningPath);
  }

  @Patch('/actualizar/:id')
  updateLearningPath(
    @Param('id', ParseIntPipe) id: number,
    @Body() learningPath: Partial<UpdateLearningPathDTO>,

  ) {
    return this._learningPathService.update(id, learningPath);
  }

  @Delete('/eliminar/:id')
  deleteLearningPath(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this._learningPathService.delete(id);
  }

  @Patch('/enroll/:id/:iduser')
  enrollLearningPath(
    @Param('id', ParseIntPipe) id: number,
    @Param('iduser', ParseIntPipe) iduser: number,
  ) {
    return this._learningPathService.enroll(id, iduser);
  }

  @Delete('/leave/:iduser/:idruta')
  leaveLearningPath(
    @Param('iduser', ParseIntPipe) iduser: number,
    @Param('idruta', ParseIntPipe) idruta: number, 
  ) {
    return this._learningPathService.leave(iduser, idruta)
  }

  @Patch('/agregar-tema/:id')
  addTopic(
    @Param('id', ParseIntPipe) id: number,
    @Body() learningPathId: AddTopicDTO,
  ) {
    return this._learningPathService.addTopic(id, learningPathId);
  }
}
