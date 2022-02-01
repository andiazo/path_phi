import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDTO, ReadCommentDTO, UpdateCommentDTO } from './dtos';

@Controller('comment')
export class CommentController {
  constructor(private readonly _commentService: CommentService){}

  @Get('/:id')
  getComment(@Param('id', ParseIntPipe) id: number): Promise<ReadCommentDTO>{
    return this._commentService.get(id);
  }

  @Get('/comment/:id_ruta')
  getCommentByLearningPath(
    @Param('id_ruta', ParseIntPipe) id_ruta: number): Promise<ReadCommentDTO[]>{
    return this._commentService.getCommentByLearninPath(id_ruta);
  }

  @Post('/crear-comentario')
  createComment(@Body() comment: Partial<CreateCommentDTO>): Promise<ReadCommentDTO>{
    return this._commentService.create(comment);
  }

  @Patch('/actualizar-comentario/:id')
    updateComment(
        @Param('id', ParseIntPipe) id: number,
        @Body() comment: Partial<UpdateCommentDTO>,

    ){
        return this._commentService.update(id, comment);
    }

  @Delete('/eliminar-comment/:id')
  deleteComment(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return this._commentService.delete(id);
  }
}