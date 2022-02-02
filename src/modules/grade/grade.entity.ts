import { Type } from "class-transformer";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LearningPath } from "../learning-path/learning-path.entity";
import { User } from "../user/user.entity";

@Entity('calificacion')
export class Grade extends BaseEntity {

  @Column({ type: 'int', nullable: false })
  grade: number;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @ManyToOne(Type => User, { primary: true, })
  @JoinColumn()
  user: User;

  @ManyToOne(Type => LearningPath, { primary: true, })
  @JoinColumn()
  learningPath: LearningPath;
}