import { IsString } from "class-validator";

export class UpdateTopicDTO{
  @IsString()
  readonly name_topic: string;

  @IsString()
  readonly description_topic: string;
}