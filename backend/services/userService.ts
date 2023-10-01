
const { PrismaClient } = require('@prisma/client');
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const saltRounds = 10;



const createUser = async (userData: any) => {
  try {
    delete userData.confirmPassword;
   
    const prisma = new PrismaClient({
      // Prismaログを有効化
      log: ['query', 'info', 'warn', 'error'],
    });
    //パスワードハッシュ化
    const hashedPassword = await bcrypt.hash('password', saltRounds);
    //データ登録
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
  