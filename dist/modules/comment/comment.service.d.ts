import { CommentRepository } from './comment.repository';
import { LearningPathRepository } from '../learning-path/learning-path.repository';
import { UserRepository } from '../user/user.repository';
import { ReadCommentDTO } from './dtos/read-comment.dto';
import { CreateCommentDTO } from './dtos/create-comment.dto';
import { UpdateCommentDTO } from './dtos/update-comment.dto';
export declare class CommentService {
    private readonly _CommentRepository;
    private readonly _learningPathRepository;
    private readonly _userRepository;
    constructor(_CommentRepository: CommentRepository, _learningPathRepository: LearningPathRepository, _userRepository: UserRepository);
    get(id_comment: number): Promise<ReadCommentDTO>;
    getCommentByLearninPath(id_ruta: number): Promise<ReadCommentDTO[]>;
    create(comment: Partial<CreateCommentDTO>): Promise<ReadCommentDTO>;
    update(id_comment: number, comment: Partial<UpdateCommentDTO>): Promise<ReadCommentDTO>;
    delete(id_comment: number): Promise<void>;
}
