import { IsNotEmpty } from "class-validator";
export class EnrollLearningPathDTO{
    @IsNotEmpty()
    readonly users: number[];
}