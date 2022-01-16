import { Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ReadLearningPathDTO } from "src/modules/learning-path/dtos";

export class ReadTopicDTO{
  @Expose()
  @IsNumber()
  readonly id_topic: number;

  @Expose()
  @IsString()
  readonly name_topic: string;

  @Expose()
  @IsString()
  readonly description_topic: string;

  @Expose()
  @Type(type => ReadLearningPathDTO)
  readonly  learningPaths: ReadLearningPathDTO[];
}