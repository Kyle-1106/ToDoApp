import { User } from "@prisma/client";

var { PrismaClient } = require('@prisma/client');

var bcrypt = require('bcrypt');
const saltRounds = 10;

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});


//新規登録
const createUser = async (userData: any) => {
  try {
    delete userData.confirmPassword;
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
    throw new Error("そのメールアドレスはすでに登録されています");
  }
  
};



//ユーザ取得
const selectUser=async (userData:User,user:User)=>{
  try {
    const email=userData.email;
    const user:User= await prisma.user.findUnique({
      where: {
        email:email
      },
    })
    if(!user){
      throw new Error("該当ユーザが見つかりません")
    }
    await prisma.$disconnect;
    return user;
    
  } catch (error) {
    console.log(error)
  }
}
  module.exports={
    createUser,
    selectUser
  }
  