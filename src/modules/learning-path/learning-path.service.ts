import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { In } from 'typeorm';
import { UserRepository } from '../user/user.repository';
import { CreateLearningPathDTO, ReadLearningPathDTO, UpdateLearningPathDTO, EnrollUserDTO } from './dtos';
import { LearningPath } from './learning-path.entity';
import { LearningPathRepository } from './learning-path.repository';

@Injectable()
export class LearningPathService {
    constructor(
        @InjectRepository(LearningPathRepository)
        private readonly _learningPathRepository: LearningPathRepository,
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository,
    ){}

    async get(id_ruta: number): Promise<ReadLearningPathDTO>{
        if (id_ruta){
            throw new BadRequestException('No se ha enviado id_ruta');

        }
        const learningPath: LearningPath = await this._learningPathRepository.findOne(id_ruta, {
            where: {status: 'ACTIVE'},
        });

        if (!learningPath){
            throw new NotFoundException('Ruta no encontrada');
        }
        return plainToClass(ReadLearningPathDTO, learningPath);


    }

    async getAll(): Promise<ReadLearningPathDTO[]>{
        const learningPaths: LearningPath[] = await this._learningPathRepository.find({
            where: {status: 'ACTIVE'},
        });
        return learningPaths.map(learningPath => plainToClass(ReadLearningPathDTO, learningPath));
    }

    /*async getLearningPathByUser(id_usuario: number): Promise<ReadLearningPathDTO[]>{
        if (!id_usuario){
            throw new BadRequestException('Se necesita el id del usuario');
        } 
        const learningPaths: LearningPath[] = await this._learningPathRepository.find({
            where: {status: 'ACTIVE'},
            relations: ['users'],
        });

        console.log(learningPaths[0].users)

        return learningPaths.map(learningPath => plainToClass(ReadLearningPathDTO, learningPath));
    }*/

    async create (learningPath: Partial<CreateLearningPathDTO>): Promise<ReadLearningPathDTO>{
        const savedLearningPath: LearningPath = await this._learningPathRepository.save({
            nombre_ruta: learningPath.nombre_ruta,
            descripcion_ruta: learningPath.descripcion_ruta,
            dificultad: learningPath.dificultad,
            cantidad_temas: learningPath.cantidad_temas,
            cantidad_recursos: learningPath.cantidad_recursos, 
        });
        return plainToClass(ReadLearningPathDTO, savedLearningPath);
    }

    async update(
        id_ruta: number, learningPath: Partial<UpdateLearningPathDTO>
        ): Promise<ReadLearningPathDTO>{
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: {status: 'ACTIVE'},
        });
        if (!learningPathExists){
            throw new NotFoundException('Ruta no encontrada');
        }
        const updatedLearningPath = await this._learningPathRepository.update(id_ruta, learningPath);

        return plainToClass(ReadLearningPathDTO, updatedLearningPath);
    }

    async delete(id_ruta:number): Promise<void>{
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: {status: 'ACTIVE'},
        });
        if (!learningPathExists){
            throw new NotFoundException('Esa ruta no existe');
        }
        await this._learningPathRepository.update(id_ruta, {status: 'INACTIVE'});
    }

    async enroll(id_ruta:number, userId:EnrollUserDTO): Promise<ReadLearningPathDTO>{
        const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
            where: {status: 'ACTIVE'},
        });
        if (!learningPathExists){
            throw new NotFoundException('Esa ruta no existe');
        }
        const userExists = await this._userRepository.findOne(userId.id, {
            where: { status: 'ACTIVE' },
          });
        if(!userExists){
            throw new NotFoundException('Este usuario no existe');
        }

        let users_list = learningPathExists.users

        users_list.push(userExists)

        learningPathExists.users = users_list

        const updateLearn = await this._learningPathRepository.save(learningPathExists);

        return plainToClass(ReadLearningPathDTO, updateLearn);
    }
}
