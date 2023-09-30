
const { PrismaClient } = require('@prisma/client');
const User = require('../models/usermodel');


const createUser = async (userData: any) => {
  try {
    delete userData.confirmPassword;
    //データ登録
    const prisma = new PrismaClient({
      // Prismaログを有効化
      log: ['query', 'info', 'warn', 'error'],
    });
   
    const newUser = await prisma.user.create({
      data: {
        email:userData.email,
        name:userData.name,
        password:userData.password
      }
       
    })
    await prisma.$disconnect();

    // 新しいユーザーを返す
    return newUser;
  } 
  catch (error) {
    throw error;
  }
  
};
  module.exports={
    createUser,
  }
  