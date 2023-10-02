
var { PrismaClient } = require('@prisma/client');

var bcrypt = require('bcrypt');
const saltRounds = 10;

const prisma = new PrismaClient({
  // Prismaログを有効化
  log: ['query', 'info', 'warn', 'error'],
});


//新規登録
const createUser = async (userData: any) => {
  try {
    delete userData.confirmPassword;
   
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

//ユーザ取得
const selectUser=async (loginData:any)=>{
  
  try {
    //ユーザ取得
    
    console.log("ここは")
    const email=loginData.email;
    const prisma = new PrismaClient({
      // Prismaログを有効化
      log: ['query', 'info', 'warn', 'error'],
    });
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log("ここでのuser")
    console.log(user)
    await prisma.$disconnect;
    return user;
    
  } catch (error) {
    console.log(error)
    throw error;
  }
  finally{
    
  }

}


  module.exports={
    createUser,
    selectUser
  }
  