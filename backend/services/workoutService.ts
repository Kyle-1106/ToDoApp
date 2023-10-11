
import { TrainingDiscipline } from "../models/trainingDiscipline";

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



module.exports={
    getAllBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,

}