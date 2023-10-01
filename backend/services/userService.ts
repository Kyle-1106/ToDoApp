
const { PrismaClient } = require('@prisma/client');
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const saltRounds = 10;



const createUser = async (userData: any) => {
  try {
    delete userData.confirmPassword;
    //データ登録
    const prisma = new PrismaClient({
      // Prismaログを有効化
      log: ['query', 'info', 'warn', 'error'],
    });
    const hashedPassword = await bcrypt.hash('password', saltRounds);
   
    const newUser = await prisma.user.create({
      data: {
        email:userData.email,
        name:userData.name,
        password:hashedPassword
      }
       
    })
    await prisma.$disconnect();

    // 新しいユーザーを返す
    return newUser;
  } 
  catch (error) {
   //メールアドレス重複時の処理を後々実装予定
    throw error;
  }
  
};
  module.exports={
    createUser,
  }
  