import { Repository, EntityRepository } from "typeorm";
import { LearningPath } from "./learning-path.entity";

@EntityRepository(LearningPath)
export class LearningPathRepository extends Repository<LearningPath>{ }