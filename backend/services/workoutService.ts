import { TrainingDiscipline } from "../models/trainingDiscipline";

var { PrismaClient } = require('@prisma/client');
var { Bodypart } = require( "../models/bodyPart");

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

const getAllBodyParts=async (res:typeof Bodypart[])=> {
    try {
        const allBodyParts=await prisma.bodypart.findMany();
        console.log(allBodyParts);
        return allBodyParts;
    } catch (error) {
        console.log("エラー",error)   
    }   
}

const getTrainingDisciplines=async(bodyPart:any)=>{
    try {
        console.log("bfsfsfs");
       const trainingDisciplines:[TrainingDiscipline[],null]=await prisma.training_discipline.findMany({
        where:{
            name:bodyPart
        }
       });
       if(!trainingDisciplines){
        return null;
       }
       return trainingDisciplines;
       
       

        
    } catch (error) {
        
    }

}



module.exports={
    getAllBodyParts,
    getTrainingDisciplines,

}