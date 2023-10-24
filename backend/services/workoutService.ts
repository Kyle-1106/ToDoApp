import { TrainingDiscipline } from "../interfaces/trainingDiscipline";
import { Workout } from "../interfaces/workout";

var { PrismaClient } = require('@prisma/client');
var errorService =require("../services/errorMessageService");

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });


  //部位取得処理
const getAllBodyParts=async ()=> {
    try {
      //部位名取得
        const allBodyParts=await prisma.bodypart.findMany();
        if(!allBodyParts){
          throw new Error(errorService.failedGetBodyParts)
        }
        await prisma.$disconnect();
        return allBodyParts;
    } catch (error) {
        await prisma.$disconnect;
        throw error;
    }   
}

//部位ID取得処理
const getBodyPart=async(bodyPartName:any,req:any)=>{
  try {
      const bodyPart=await prisma.bodypart.findUnique({
          where:{
              name:bodyPartName
          },
      })
      return bodyPart;
      
  } catch (error) {
      throw Error("部位IDを取得できませんでした")
  }
  
}

//種目名取得処理
const getTrainingDisciplines=async(bodyPartId:number)=>{
  try {
    const trainingDisciplines:TrainingDiscipline=await prisma.training_discipline.findMany({
      where:{
        bodypartId:bodyPartId
      },
    })
    if(!trainingDisciplines){
      throw new Error(errorService.failedGetBodyParts)
    }
    await prisma.$disconnect;
    return trainingDisciplines;
  } catch (error) {
    await prisma.$disconnect;
    throw error;
  }
}



//種目登録
const registTrainingDiscipline=async(bodyPartId:number,disciplineName:string)=>{
    try {
        const registardDiscipline:TrainingDiscipline=await prisma.training_discipline.create({
            data:{
                name:disciplineName,
                bodypartId:bodyPartId
            }
        })
        if(!registTrainingDiscipline){
          throw new Error(errorService.failedGetTrainingDiscipline)
        }
        return registardDiscipline;
    } catch (error) {
        console.log(error)
        throw error; 
    }
    
}

//ワークアウト登録
const recordWorkout=async(workout:any,res:any)=>{
    try {
        const record:Workout=await prisma.workoutLog.create({
            data:{
                userId:workout.userId,
                bodypartId:workout.bodyPartId,
                training_disciplineId:workout.disciplineId,
                weight:workout.weight,
                rep:workout.reps,
                RM:workout.weight*workout.reps/40+workout.weight,
                memo:workout.memo
            }
        })
        await prisma.$disconnect();
        return record;
    } catch (error) {
        
    }
   

}


//ワークアウト取得
const getWorkout=async(userId:number,res:any)=>{
    try {
        const workoutLogs = await prisma.workoutLog.findMany({
            where: {
              userId: userId, 
            },
            include: {
              bodypart: {
                select: {
                  name: true, 
                },
              },
              training_discipline: {
                select: {
                  name: true,
                },
              },
            },
          });
        return workoutLogs;
        
    } catch (error) {
        console.log("ワークアウトの取得に失敗しました");
        throw new Error("ワークアウトの取得に失敗しました");
    }
}



module.exports={
    getAllBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,
    recordWorkout,
    getBodyPart,
    getWorkout,
}