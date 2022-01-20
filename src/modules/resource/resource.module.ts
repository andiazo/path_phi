import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicRepository } from '../topic/topic.repository';
import { ResourceController } from './resource.controller';
import { ResourceRepository } from './resource.repository';
import { ResourceService } from './resource.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceRepository, TopicRepository])],
  controllers: [ResourceController],
  providers: [ResourceService]
})
export class ResourceModule {}
