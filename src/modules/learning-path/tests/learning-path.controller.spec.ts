import { Test, TestingModule } from '@nestjs/testing';
import { LearningPathController } from './learning-path.controller';

describe('LearningPathController', () => {
  let controller: LearningPathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningPathController],
    }).compile();

    controller = module.get<LearningPathController>(LearningPathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
