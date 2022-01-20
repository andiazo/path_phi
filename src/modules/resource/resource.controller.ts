import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddResourceDTO } from '../topic/dtos/add-resource.dto';
import { CreateResourceDTO, ReadResourceDTO, UpdateResourceDTO } from './dtos';
import { ResourceService } from './resource.service';

@Controller('recurso')
export class ResourceController {
  constructor(private readonly _resourceService: ResourceService){}

  @Get('/:id')
  getResource(@Param('id', ParseIntPipe) id: number): Promise<ReadResourceDTO>{
    return this._resourceService.get(id);
  }

  @Get('ruta/:id_topic')
  getResourceByTopic(
    @Param('id_topic', ParseIntPipe) id_topic: number): Promise<ReadResourceDTO[]>{
    return this._resourceService.getResourceByTopic(id_topic);
  }

  @Post('/crear-recurso')
  createResource(@Body() resource: Partial<CreateResourceDTO>): Promise<ReadResourceDTO>{
    return this._resourceService.create(resource);
  }

  @Patch('/actualizar-recurso/:id')
    updateResource(
        @Param('id', ParseIntPipe) id: number,
        @Body() recurso: Partial<UpdateResourceDTO>,

    ){
        return this._resourceService.update(id, recurso);
    }

  @Delete('/eliminar-tema/:id')
  deleteResource(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return this._resourceService.delete(id);
  }
}

