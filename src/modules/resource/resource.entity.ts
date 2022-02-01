import { Type } from "class-transformer";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "../topic/topic.entity";

@Entity('recurso')
export class Resource extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_recurso: number;
    
    @Column({type: 'varchar', length: 40, nullable: false, unique: true})
    nombre_recurso: string;

    @Column({type: 'varchar', length: 150, nullable: false, unique: true})
    descripcion_recurso: string;

    @Column({type: 'varchar', length: 150, nullable: false, unique: true})
    enlace_recurso: string;

    @Column({type: 'varchar', default: 'ACTIVE', length: 8})
    status: string;

    @ManyToMany(Type => Topic, topic => topic.resources )
    @JoinColumn()
    topics: Topic[];
}