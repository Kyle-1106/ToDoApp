
import { TrainingDiscipline } from "../models/trainingDiscipline";
import { Workout } from "../models/workout";

var { PrismaClient } = require('@prisma/client');
var { Bodypart } = require( "../models/bodyPart");

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });


  //部位取得処理
const getAllBodyParts=async (res:typeof Bodypart[])=> {
    try {
        const allBodyParts=await prisma.bodypart.findMany();
        return allBodyParts;
    } catch (error) {
        console.log("エラー",error)   
    }   
}

//部位名取得処理
const getTrainingDisciplines=async(bodyPartId:number)=>{
    try {
       const trainingDisciplines:TrainingDiscipline[]=await prisma.training_discipline.findMany({
        where:{
            bodypartId:bodyPartId
        }
       });
       if(!trainingDisciplines){
        return null;
       }
       console.log("trainingDisciplines")
       console.log(trainingDisciplines)
       return trainingDisciplines;
    } catch (error) {
        
    }
}


//部位ID取得処理
const getBodyPart=async(bodyPartName:any,req:any)=>{
    try {
        console.log("bodyPartName")
        console.log(bodyPartName)
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

const registTrainingDiscipline=async(trainingDisciplineName:string,trainingDisciplineBodyPartId:number)=>{
    try {
        console.log(trainingDisciplineName)
        console.log(trainingDisciplineBodyPartId)

        await prisma.training_discipline.create({
            data:{
                name:trainingDisciplineName,
                bodypartId:trainingDisciplineBodyPartId
            }
        })
        
    } catch (error) {
        console.log(error)
        
    }
    
}


const recordWorkout=async(workout:Workout,res:any)=>{
    try {
        const userId=await prisma.user.findUnique({
            where:{
                email:workout.email,
            },
            select:{
                id:true
            },
        })
        // const bodypartId=await prisma.bodypart.findUnique({
        //     where:{
        //         bodypart:workout.bodyPart
        //     },
        //     select:{
        //         id:true
        //     },
        // })
        
        const record=await prisma.workoutlog.create({
            data:{
                userId:userId,
                bodypartId:workout.bodyPartId
            }
        })
    } catch (error) {
        
    }
   

}



module.exports={
    getAllBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,
    recordWorkout,
    getBodyPart,
}