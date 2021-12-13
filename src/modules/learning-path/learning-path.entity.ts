import { join } from "path";
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('ruta')
export class LearningPath extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id_ruta: number;
    
    @Column({type: 'varchar', length: 40, nullable: false, unique: true})
    nombre_ruta: string;

    @Column({type: 'varchar', length: 150, nullable: false, unique: true})
    descripcion_ruta: string;

    @Column({type: 'int', nullable: false})
    dificultad: number;
    
    @Column({type: 'int', nullable: false})
    cantidad_temas: number;

    @Column({type: 'int', nullable: false})
    cantidad_recursos: number;

    @Column({type: 'varchar', default: 'ACTIVE', length: 8})
    status: string;

    @ManyToMany(Type => User, user => user.learningPaths, {eager: true})
    @JoinColumn()
    users: User[];

}