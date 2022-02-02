import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateGradeDTO, ReadGradeDTO, UpdateGradeDTO } from './dtos';
import { GradeService } from './grade.service';

@Controller('grade')
export class GradeController {
  constructor(private readonly _gradeService: GradeService){}

  @Get('/:id')
  getGrade(@Param('id', ParseIntPipe) id: number): Promise<ReadGradeDTO>{
    return this._gradeService.get(id);
  }

  @Get('/calificaciones/:id_ruta')
  getGradeByLearningPath(
    @Param('id_ruta', ParseIntPipe) id_ruta: number): Promise<ReadGradeDTO[]>{
    return this._gradeService.getGradesByLearningPath(id_ruta);
  }

  @Get('/calificaciones/promedio/:id_ruta')
  getAverageGradeByLearningPath(
    @Param('id_ruta', ParseIntPipe) id_ruta: number): Promise<number>{
    return this._gradeService.getAverageGradesByLearningPath(id_ruta);
  }

  @Post('/calificar')
  createGrade(@Body() grade: Partial<CreateGradeDTO>): Promise<ReadGradeDTO>{
    return this._gradeService.create(grade);
  }

  @Patch('/actualizar-calificacion/:id')
    updateGrade(
        @Param('id', ParseIntPipe) id: number,
        @Body() grade: Partial<UpdateGradeDTO>,
    ){
        return this._gradeService.update(id, grade);
    }

  @Delete('/eliminar-calificacion/:id')
  deleteGrade(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return this._gradeService.delete(id);
  }
}
