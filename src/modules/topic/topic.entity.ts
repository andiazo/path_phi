import path from "path/posix";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { LearningPathController } from "../learning-path/learning-path.controller";
import { LearningPath } from "../learning-path/learning-path.entity";

@Entity('tema')
export class Topic extends BaseEntity{
  @PrimaryGeneratedColumn('increment')
  id_topic: number; 
  
  @Column({type: 'varchar', length: 40, nullable: false})
  name_topic: string;

  @Column({type: 'varchar', length: 150, nullable: false})
  description_topic: string;

  @Column({type: 'varchar', default: 'ACTIVE', length: 8})
  status: string;

  @ManyToMany(type => LearningPath, learningPath => learningPath.topics )
  @JoinTable({
    name: "tema-ruta",
    joinColumn: {
      name: "id_tema", 
      referencedColumnName: "id_topic"
    }, 
    inverseJoinColumn: {
      name: "id_ruta", 
      referencedColumnName: "id_ruta"
    }
  })
  learningPaths: LearningPath[]; 
}