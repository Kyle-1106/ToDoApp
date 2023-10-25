export interface Workout{
    id:number;
    userId:number;
    bodyPartId:number;
    training_disciplineId:number
    created_at:Date;
    updated_at:Date;
    weight:number;
    reps:number;
    RM:number;
    memo:string
}
export interface  workoutInfo{
  userId:number;
  bodyPartId:number;
  disciplineId:number;
  weight:number;
  reps:number;
  memo:string;
}