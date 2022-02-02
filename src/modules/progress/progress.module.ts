import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { TopicRepository } from '../topic/topic.repository';
import { UserRepository } from '../user/user.repository';
import { ProgressController } from './progress.controller';
import { ProgressRepository } from './progress.repository';
import { ProgressService } from './progress.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProgressRepository, LearningPathRepository, UserRepository, TopicRepository])],
  controllers: [ProgressController],
  providers: [ProgressService]
})
export class ProgressModule {}
