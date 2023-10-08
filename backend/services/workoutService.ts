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



module.exports={
    getAllBodyParts,

}