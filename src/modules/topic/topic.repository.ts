import { EntityRepository, Repository } from "typeorm";
import { Topic } from "./topic.entity";

@EntityRepository(Topic)
export class TopicRepository extends Repository<Topic>{}