export class WorkoutLog{
    id:number;
    userId:number;
    bodyPartId:number;
    bodyPartName:string;
    training_disciplineId:number;
    training_disciplineName:string;
    created_at:Date;
    updated_at:Date;
    weight:number;
    reps:number;
    RM:number;
    memo:string
}