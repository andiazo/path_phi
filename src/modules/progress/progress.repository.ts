import { Repository, EntityRepository } from "typeorm";
import { Progress } from "./progress.entity";

@EntityRepository(Progress)
export class ProgressRepository extends Repository<Progress>{ }