import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { UserRepository } from '../user/user.repository';
import { ReadCommentDTO } from './dtos/read-comment.dto';
import { plainToClass } from 'class-transformer';
import { In, Not } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDTO } from './dtos/create-comment.dto';
import { UpdateCommentDTO } from './dtos/update-comment.dto';


@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(CommentRepository)
    private readonly _CommentRepository: CommentRepository,
    @InjectRepository(LearningPathRepository)
    private readonly _learningPathRepository: LearningPathRepository,
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
  ) { }

  async get(id_comment: number): Promise<ReadCommentDTO>{
    if (!id_comment){
      throw new BadRequestException('Se necesita ID del comentario');
    } 
    const comment = await this._CommentRepository.findOne(id_comment);
    if (!comment){
      throw new NotFoundException('El recurso no existe');
    }
    return plainToClass(ReadCommentDTO, comment);
  } 

  async getCommentByLearninPath(id_ruta: number): Promise<ReadCommentDTO[]>{
    if (!id_ruta){
      throw new BadRequestException('Es necesario el ID de la ruta');
    } 
    const comments: Comment[] = await this._CommentRepository.find({
      where: {status: 'ACTIVE', learningPath: In([id_ruta])}, 
    });
    return comments.map(comment => plainToClass(ReadCommentDTO, comment));
  }

  async create(comment: Partial<CreateCommentDTO>): Promise<ReadCommentDTO>{
    const id_user = comment.id_user;
    const id_ruta = comment.id_ruta;
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

    const savedComment: Comment = await this._CommentRepository.save({
      content: comment.content,
      user: userExists,
      learningPath: learningPathExists,
    }); 
    return plainToClass(ReadCommentDTO, savedComment);
  }

  async update(
        id_comment: number, comment: Partial<UpdateCommentDTO>
        ): Promise<ReadCommentDTO>{
        const commentExists = await this._CommentRepository.findOne(id_comment, {
            where: {status: 'ACTIVE'},
        });
        if (!commentExists){
            throw new NotFoundException('Comentario no encontrado');
        }
        const updatedComment = await this._CommentRepository.update(id_comment, comment);

        return plainToClass(ReadCommentDTO, updatedComment);
    }

    async delete(id_comment: number): Promise<void>{
        const commentExists = await this._CommentRepository.findOne(id_comment, {
            where: {status: 'ACTIVE'},
        });
        if (!commentExists){
            throw new NotFoundException('El comentario no existe');
        }
        await this._CommentRepository.update(id_comment, {status: 'INACTIVE'});
    }


}
