import { IsNotEmpty, IsNumber } from "class-validator";

export class AddTopicDTO{
  @IsNotEmpty()
  @IsNumber()
  readonly id_topic: number;
}