import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProgressDTO, ReadProgressDTO } from './dtos';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly _progressService: ProgressService){}

  @Get('cantidad-temas-vistos/:iduser/:idruta')
  getCantidadTemas(@Param('iduser', ParseIntPipe) iduser: number, @Param('idruta', ParseIntPipe) idruta: number): Promise<number>{
    return this._progressService.getCantidadTemas(iduser, idruta)
  }

  @Get('/:iduser/:idruta')
  getProgress(@Param('iduser', ParseIntPipe) iduser: number, @Param('idruta', ParseIntPipe) idruta: number): Promise<number> {
    return this._progressService.getProgress(iduser, idruta)
  }

  @Post('/avanzar')
  createProgress(@Body() progress: Partial<CreateProgressDTO>): Promise<ReadProgressDTO>{
    return this._progressService.create(progress);
  }

  @Delete('/eliminar-avance/:iduser/:idruta/:idtopic')
  deleteProgress(@Param('iduser', ParseIntPipe) iduser: number, @Param('idruta') idruta: number, @Param('idtopic') idtopic: number): Promise<void>{
    return this._progressService.delete(iduser, idruta, idtopic);
  }

}
