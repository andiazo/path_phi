import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { In } from 'typeorm';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { UserRepository } from '../user/user.repository';
import { CreateGradeDTO, ReadGradeDTO, UpdateGradeDTO } from './dtos';
import { Grade } from './grade.entity';
import { GradeRepository } from './grade.repository';

@Injectable()
export class GradeService {

  constructor(
    @InjectRepository(GradeRepository)
    private readonly _GradeRepository: GradeRepository,
    @InjectRepository(LearningPathRepository)
    private readonly _learningPathRepository: LearningPathRepository,
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
  ) { }

  async get(id_grade: number): Promise<ReadGradeDTO>{
    if (!id_grade){
      throw new BadRequestException('Se necesita id de la nota');
    } 
    const grade = await this._GradeRepository.findOne(id_grade);
    if (!grade){
      throw new NotFoundException('El recurso no existe');
    }
    return plainToClass(ReadGradeDTO, grade);
  } 

  async getGradesByLearningPath(id_ruta: number): Promise<ReadGradeDTO[]>{
    if (!id_ruta){
      throw new BadRequestException('Es necesario el ID de la ruta');
    } 
    const grades: Grade[] = await this._GradeRepository.find({
      where: {status: 'ACTIVE', learningPath: In([id_ruta])}, 
    });

    return grades.map(grade => plainToClass(ReadGradeDTO, grade));
  }

  async getAverageGradesByLearningPath(id_ruta: number): Promise<number>{
    if (!id_ruta){
      throw new BadRequestException('Es necesario el ID de la ruta');
    } 
    const grades: Grade[] = await this._GradeRepository.find({
      where: {status: 'ACTIVE', learningPath: In([id_ruta])}, 
    });
  
    let sum_grade = 0;
    for (let grade of grades){
      sum_grade += grade.grade;
    }
    const average_grade = sum_grade/grades.length;

    return average_grade;
  }0

  async create(grade: Partial<CreateGradeDTO>): Promise<ReadGradeDTO>{
    const id_user = grade.id_user;
    const id_ruta = grade.id_ruta;

    const userExists = await this._userRepository.findOne(id_user, {
      where: {status: 'ACTIVE'},
    });

    const learningPathExists = await this._learningPathRepository.findOne(id_ruta, {
      where: {status: 'ACTIVE'},
    });

    if(!userExists) {
      throw new NotFoundException("El usuario no existe");
    }

    if(!learningPathExists) {
      throw new NotFoundException("Ruta de aprendizaje no existe");
    }

    const savedGrade: Grade = await this._GradeRepository.save({
      grade: grade.grade,
      user: userExists,
      learningPath: learningPathExists,
    }); 
    return plainToClass(ReadGradeDTO, savedGrade);
  }

  async update(
        id_grade: number, grade: Partial<UpdateGradeDTO>
        ): Promise<ReadGradeDTO>{
        const gradeExists = await this._GradeRepository.findOne(id_grade, {
            where: {status: 'ACTIVE'},
        });
        if (!gradeExists){
            throw new NotFoundException('Calificación no encontrada');
        }
        const updatedGrade = await this._GradeRepository.update(id_grade, grade);

        return plainToClass(ReadGradeDTO, updatedGrade);
    }

    async delete(id_grade: number): Promise<void>{
        const gradeExists = await this._GradeRepository.findOne(id_grade, {
            where: {status: 'ACTIVE'},
        });
        if (!gradeExists){
            throw new NotFoundException('La calificación no existe');
        }
        await this._GradeRepository.update(id_grade, {status: 'INACTIVE'});
    }

}
