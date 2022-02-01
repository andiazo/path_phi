import { Type } from "class-transformer";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LearningPathController } from "../learning-path/learning-path.controller";
import { LearningPath } from "../learning-path/learning-path.entity";
import { User } from "../user/user.entity";

@Entity('comentario')
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_comment: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  content: string;


  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @ManyToOne(Type => User, user => user.comments)
  @JoinColumn()
  user: User;

  @OneToMany(Type => LearningPath, learningPath => learningPath.comments, { eager: true })
  @JoinTable({
    name: "comentario_ruta",
    JoinColumn: {
      name: "id_comentario",
      referencedColumnName: "id_comment"
    },
    inverseJoinColumn: {
      name: "id_ruta",
      referencedColumnName: "id_ruta"
    }
  })
  learningPath: LearningPath;
}