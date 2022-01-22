import { Exclude, Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ReadLearningPathDTO } from "src/modules/learning-path/dtos";
import { ReadResourceDTO } from "src/modules/resource/dtos";
import { Resource } from "src/modules/resource/resource.entity";

@Exclude()
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
  @Type(type => ReadResourceDTO)
  readonly resources: ReadResourceDTO[];
  
  @Expose()
  @Type(type => ReadLearningPathDTO)
  readonly  learningPaths: ReadLearningPathDTO[];

}