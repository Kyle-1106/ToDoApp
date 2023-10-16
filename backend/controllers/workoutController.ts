import { BodyPart } from "../models/bodyPart"
import { TrainingDiscipline } from "../models/trainingDiscipline";

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
        const bodyPartName=req.query.name;
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
        const trainingDisciplines:TrainingDiscipline[]=await workoutService.getTrainingDisciplines(bodyPartId);
        res.status(200).json(trainingDisciplines)
    } catch (error) {
        console.log(error)
        throw new Error("種目の取得ができません");
        
    }
}

//種目登録
const registTrainingDiscipline=async(req:any,res:any)=>{
    try {
        const bodyPartId:number=req.body.bodyPartId;
        const disciplineName:string=req.body.bodyPartName;
        const trainingDisciplines=await workoutService.registTrainingDiscipline(bodyPartId,disciplineName);
        res.status(200).json(trainingDisciplines)
    } catch (error) {
        console.log(error)
        throw Error ("種目が取得取得できませんでした")
    }
}


//ワークアウト登録
const recordWorkout=async(req:any,res:any)=>{
    try {
        console.log("workout")
        const workout=req.body;
        console.log(workout)
        const workoutlog=await workoutService.recordWorkout(workout);
        res.status(200).json(workoutlog);
        
    } catch (error) {
        console.log(error);
        throw new Error("ワークアウトの登録ができません")
        
    }
   
}







module.exports={
    getBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,
    recordWorkout,
    getBodyPartId,
}