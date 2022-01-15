import path from "path/posix";
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { LearningPathController } from "../learning-path/learning-path.controller";
import { LearningPath } from "../learning-path/learning-path.entity";

@Entity('tema')
export class Topic extends BaseEntity{
  @PrimaryGeneratedColumn('increment')
  id_toplic: number; 
  
  @Column({type: 'varchar', length: 40, nullable: false})
  name_topic: string;

  @Column({type: 'varchar', length: 150, nullable: false})
  description_topic: string;

  @ManyToMany(type => LearningPath, learningPath => learningPath.topics )
  @JoinColumn()
  learningPaths: LearningPath[]; 
}