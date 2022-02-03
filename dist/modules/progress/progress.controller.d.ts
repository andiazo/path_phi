import { CreateProgressDTO, ReadProgressDTO } from './dtos';
import { ProgressService } from './progress.service';
export declare class ProgressController {
    private readonly _progressService;
    constructor(_progressService: ProgressService);
    getCantidadTemas(iduser: number, idruta: number): Promise<number>;
    getProgress(iduser: number, idruta: number): Promise<number>;
    createProgress(progress: Partial<CreateProgressDTO>): Promise<ReadProgressDTO>;
    deleteProgress(iduser: number, idruta: number, idtopic: number): Promise<void>;
}
