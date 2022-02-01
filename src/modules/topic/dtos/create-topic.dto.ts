import { IsNotEmpty, IsString } from "class-validator";
import { LearningPath } from "src/modules/learning-path/learning-path.entity";

export class CreateTopicDTO{
  @IsNotEmpty()
  @IsString()
  readonly name_topic: string;

  @IsNotEmpty()
  @IsString()
  readonly description_topic: string;

  @IsNotEmpty()
  readonly learningPaths: LearningPath[];

  
}