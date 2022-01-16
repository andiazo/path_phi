import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { TopicController } from './topic.controller';
import { TopicRepository } from './topic.repository';
import { TopicService } from './topic.service';

@Module({
  imports: [TypeOrmModule.forFeature([TopicRepository, LearningPathRepository])],
  controllers: [TopicController],
  providers: [TopicService]
})
export class TopicModule {}
