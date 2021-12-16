import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { DeleteDateColumn } from 'typeorm';
import { CreateLearningPathDTO, ReadLearningPathDTO, UpdateLearningPathDTO, EnrollUserDTO } from './dtos';
import { LearningPathService } from './learning-path.service';

@Controller('learning-path')
export class LearningPathController {
    constructor(private readonly _learningPathService: LearningPathService){}

    @Get(':id')
    getLearningPath(@Param('id', ParseIntPipe) id:number): Promise<ReadLearningPathDTO>{
        return this._learningPathService.get(id);
    }
    //Espacio para cuando existan asociaciones uwu

    @Get()
    getLearningPaths(): Promise<ReadLearningPathDTO[]> {
        console.log("En efecto");
        return this._learningPathService.getAll();
    }

    /*@Get('/usuario/:id')
    getByUser(@Param('id', ParseIntPipe) id:number){
        return this._learningPathService.getLearningPathByUser(id)
    }*/

    @Post('/crear-ruta')
    createLearningPath(@Body() learningPath: Partial<CreateLearningPathDTO>): Promise<ReadLearningPathDTO>{
        return this._learningPathService.create(learningPath);
    }

    @Patch(':id')
    updateLearningPath(
        @Param('id', ParseIntPipe) id: number,
        @Body() learningPath: Partial<UpdateLearningPathDTO>,

    ){
        return this._learningPathService.update(id, learningPath);
    }

    @Delete(':id')
    deleteLearningPath(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this._learningPathService.delete(id);
    }

    @Patch('/enroll/:id')
    enrollLearningPath(
        @Param('id', ParseIntPipe) id: number,
        @Body() userId: EnrollUserDTO,
    ){
        return this._learningPathService.enroll(id, userId);
    }
}
