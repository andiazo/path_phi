import { join } from "path";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "../topic/topic.entity";
import { User } from "../user/user.entity";
import { Comment } from "../comment/comment.entity";

@Entity('ruta')
export class LearningPath extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id_ruta: number;

  @Column({ type: 'varchar', length: 40, nullable: false, unique: true })
  nombre_ruta: string;

  @Column({ type: 'varchar', length: 150, nullable: false, unique: true })
  descripcion_ruta: string;

  @Column({ type: 'int', nullable: false })
  dificultad: number;

  @Column({ type: 'int', nullable: false })
  cantidad_temas: number;

  @Column({ type: 'int', nullable: false })
  cantidad_recursos: number;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @ManyToMany(Type => User, user => user.learningPaths)
  @JoinColumn()
  users: User[];

  @ManyToMany(Type => Topic, topic => topic.learningPaths, { eager: true })
  @JoinTable({
    name: "ruta_tema",
    joinColumn: {
      name: "id_ruta",
      referencedColumnName: "id_ruta"
    },
    inverseJoinColumn: {
      name: "id_tema",
      referencedColumnName: "id_topic"
    }
  })
  topics: Topic[];

  @OneToMany(Type => Comment, comment => comment.learningPath, { eager: true })
  @JoinTable({
    name: "comentario_ruta",
    joinColumn: {
      name: "id_ruta",
      referencedColumnName: "id_ruta"
    },
    inverseJoinColumn: {
      name: "id_comentario",
      referencedColumnName: "id_comment"
    }
  })
  comments: Comment[];
}