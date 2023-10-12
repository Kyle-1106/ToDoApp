
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
        console.log(allBodyParts);
        return allBodyParts;
    } catch (error) {
        console.log("エラー",error)   
    }   
}

//部位名取得処理
const getTrainingDisciplines=async(bodyPart:typeof Bodypart)=>{
    try {
       const selectedBodyPart:typeof Bodypart=await prisma.bodypart.findUnique({
        where:{
            name:bodyPart
        }
       });
       const bodyPartId=selectedBodyPart.id;
       const trainingDisciplines:TrainingDiscipline[]=await prisma.training_discipline.findMany({
        where:{
            bodypartId:bodyPartId
        }
       });
       if(!trainingDisciplines){
        return null;
       }
       return trainingDisciplines;
       
       

        
    } catch (error) {
        
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

}