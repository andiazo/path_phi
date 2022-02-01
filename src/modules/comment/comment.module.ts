import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { UserRepository } from '../user/user.repository';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([LearningPathRepository, UserRepository])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
