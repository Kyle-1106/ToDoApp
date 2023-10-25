import { PrismaClient } from "@prisma/client";
import { SignupUser } from "../interfaces/signupUser";
import { User } from "../interfaces/user";
var errorMessageService=require('../services/errorMessageService')
var bcrypt = require('bcrypt');

const saltRounds = 10;
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});


//新規登録
const createUser = async (userData: SignupUser) => {
  try {
    //パスワードハッシュ化
    const hashedPassword:string = await bcrypt.hash(userData.password, saltRounds);
    //会員登録
    const createdUser:User = await prisma.user.create({
      data: {
        email:userData.email,
        name:userData.name,
        password:hashedPassword
      }
    })
    await prisma.$disconnect();
    return createdUser;
  } 
  catch (error) {
    await prisma.$disconnect();
    throw new Error(errorMessageService.duplicateUser);
  }
  
};



//ユーザ取得
const selectUser=async (email:string,user:User)=>{
  try {
    const user:User|null= await prisma.user.findUnique({
      where: {
        email:email
      },
    })
    if(!user){
      throw new Error(errorMessageService.failedGetUser)
    }
    return user;
    
  } catch (error) {
    console.log(error)
    throw error;
  }
  finally{
    await prisma.$disconnect;
  }
}
  module.exports={
    createUser,
    selectUser
  }
  