import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, JoinTable, ManyToMany, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { UserDetails } from './user.details.entity';
import { Role } from '../role/role.entity';
import { LearningPath } from "../learning-path/learning-path.entity";
import { Comment } from "../comment/comment.entity";

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToOne(type => UserDetails, { cascade: true, nullable: false, eager: true })
  @JoinColumn({ name: 'detail_id' })
  details: UserDetails;

  @ManyToMany(type => Role, role => role.users, { eager: true })
  @JoinTable({ name: 'user_roles' })
  roles: Role[];

  @ManyToMany(type => LearningPath, learningPath => learningPath.users, { eager: true })
  @JoinTable({
    name: "inscripcion",
    joinColumn: {
      name: "id_usuario",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "id_ruta",
      referencedColumnName: "id_ruta"
    }
  })
  learningPaths: LearningPath[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(Type => Comment, comment => comment.user, { eager: true })
  @JoinTable({
    name: "user_comentario",
    joinColumn: {
      name: "id_usuario",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "id_comment",
      referencedColumnName: "id_comment"
    }
  })
  comment: Comment;

  /**

  @OneToMany(type => Comment, comment => comment.user, { eager: true })
  @JoinTable({
    name: "usuario_comentario",
    joinColumn: {
      name: "id_usuario",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "id_ruta",
      referencedColumnName: "id_ruta"
    }
  })
  comments: Comment[];
 */
}