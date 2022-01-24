import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicRepository } from '../topic/topic.repository';
import { UserRepository } from '../user/user.repository';
import { LearningPathController } from './learning-path.controller';
import { LearningPathRepository } from './learning-path.repository';
import { LearningPathService } from './learning-path.service';

@Module({
  imports: [TypeOrmModule.forFeature([LearningPathRepository, UserRepository, TopicRepository])],
  controllers: [LearningPathController],
  providers: [LearningPathService]
})
export class LearningPathModule {}
