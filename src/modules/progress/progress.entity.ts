import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { LearningPath } from "../learning-path/learning-path.entity";
import { Topic } from "../topic/topic.entity";
import { User } from "../user/user.entity";

@Entity('avance')
export class Progress extends BaseEntity {

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @ManyToOne(Type => User, { primary: true, })
  @JoinColumn()
  user: User;

  @ManyToOne(Type => LearningPath, { primary: true, })
  @JoinColumn()
  learningPath: LearningPath;

  @ManyToOne(Type => Topic, { primary: true, })
  @JoinColumn()
  topic: Topic;

}