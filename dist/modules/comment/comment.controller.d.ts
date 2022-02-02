import { CommentService } from './comment.service';
import { CreateCommentDTO, ReadCommentDTO, UpdateCommentDTO } from './dtos';
export declare class CommentController {
    private readonly _commentService;
    constructor(_commentService: CommentService);
    getComment(id: number): Promise<ReadCommentDTO>;
    getCommentByLearningPath(id_ruta: number): Promise<ReadCommentDTO[]>;
    createComment(comment: Partial<CreateCommentDTO>): Promise<ReadCommentDTO>;
    updateComment(id: number, comment: Partial<UpdateCommentDTO>): Promise<ReadCommentDTO>;
    deleteComment(id: number): Promise<void>;
}
