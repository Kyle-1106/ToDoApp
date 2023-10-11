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

//種目名取得
const getTrainingDisciplines=async (req:any,res:any)=>{
    try {
        const bodyPart:string=req.query.name;
        const trainingDisciplines:TrainingDiscipline[]=await workoutService.getTrainingDisciplines(bodyPart);
        console.log(trainingDisciplines)
        res.status(200).json(trainingDisciplines)
    } catch (error) {
        console.log(error)
        throw new Error("種目の取得ができません");
        
    }
}





module.exports={
    getBodyParts,
    getTrainingDisciplines,
}