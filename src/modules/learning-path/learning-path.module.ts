import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/user.repository';
import { LearningPathController } from './learning-path.controller';
import { LearningPathRepository } from './learning-path.repository';
import { LearningPathService } from './learning-path.service';

@Module({
  imports: [TypeOrmModule.forFeature([LearningPathRepository, UserRepository])],
  controllers: [LearningPathController],
  providers: [LearningPathService]
})
export class LearningPathModule {}
