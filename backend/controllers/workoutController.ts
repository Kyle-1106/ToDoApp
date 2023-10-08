import { BodyPart } from "../models/bodyPart"

var workoutService = require('../services/workoutService');



const getBodyParts=async (req:any,res:any) =>{
    try {
        //部位名を取得
        const allBodyParts:typeof Bodypart=await workoutService.getAllBodyParts();
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



module.exports={
    getBodyParts,
}