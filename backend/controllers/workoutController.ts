import { BodyPart } from "../models/bodyPart"
import { TrainingDiscipline } from "../models/trainingDiscipline";
import { Workout } from "../models/workout";

var workoutService = require('../services/workoutService');


//部位名取得
const getBodyParts=async (req:any,res:any) =>{
    try {
        //部位名を取得
        const allBodyParts:typeof BodyPart=await workoutService.getAllBodyParts();
        if(!allBodyParts){
            throw new Error("部位名を取得できませんでした");
        }
        res.status(200).json(allBodyParts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: '部位名の取得に失敗しました。' });
    }   
}

//部位ID取得
const getBodyPartId=async(req:any,res:any)=>{
    try {
        console.log("ewq")
        console.log(req)
        const bodyPartName=req.query.name;
        console.log("bodyPartName")
        console.log(bodyPartName)
        const bodyPart=await workoutService.getBodyPart(bodyPartName);
        console.log(bodyPart)
        res.status(200).json(bodyPart);
    } catch (error) {
        console.log(error)
        throw new Error("部位IDの取得ができません");
    }
  
}

//種目名取得
const getTrainingDisciplines=async (req:any,res:any)=>{
    try {
        const bodyPartId=Number(req.query.id);
        console.log("bodyPartId")
        console.log(bodyPartId)
        const trainingDisciplines:TrainingDiscipline[]=await workoutService.getTrainingDisciplines(bodyPartId);
        console.log("trainingDisciplines")
        console.log(trainingDisciplines)
        res.status(200).json(trainingDisciplines)
    } catch (error) {
        console.log(error)
        throw new Error("種目の取得ができません");
        
    }
}

//種目登録
const registTrainingDiscipline=async(req:any,res:any)=>{
    try {
        const name=req.body.id;
        const id=req.body.name;
        const trainingDisciplines=await workoutService.registTrainingDiscipline(name,id);
        res.status(200).json(trainingDisciplines)
    } catch (error) {
        console.log(error)
        throw Error ("種目が取得取得できませんでした")
    }
}

const recordWorkout=async(workout:Workout,res:any)=>{
    const workoutlog=workoutService.recordWorkout(workout);

}







module.exports={
    getBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,
    recordWorkout,
    getBodyPartId,
}