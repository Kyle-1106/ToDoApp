
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
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    //会員登録
    const newUser = await prisma.user.create({
      data: {
        email:userData.email,
        name:userData.name,
        password:hashedPassword
      }
       
    })
    await prisma.$disconnect();
    return newUser;
  } 
  catch (error) {
   //メールアドレス重複時の処理を後々実装予定
    throw error;
  }
  
};



//ユーザ取得
const selectUser=async (loginData:any)=>{
  console.log("userss");
  try {
    const email=loginData.email;
    console.log("userssdd");
    const user = await prisma.user.findUnique({
      where: {
        email:email
      },
    });
    console.log("userdadadss");
    console.log(user);
    await prisma.$disconnect;
    return user;
    
  } catch (error) {
    console.log(error)
    throw error;
  }

}


  module.exports={
    createUser,
    selectUser
  }
  