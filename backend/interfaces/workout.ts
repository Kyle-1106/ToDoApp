export interface Workout{
    id:number;
    userId:number;
    bodyPartId:number;
    disciplineId:number
    created_at:Date;
    updated_at:Date;
    weight:number;
    reps:number;
    RM:number;
    memo:string
}