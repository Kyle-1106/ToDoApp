var loginService = require('../services/loginService');
var userService=require('../services/userService')
var bcrypt = require('bcrypt')



//ログイン処理
const login = async (req: any, res: any) => {
    try {
      const loginData=req.body;
      console.log("loginData")
      console.log(loginData)
      //ユーザ取得
      const user=await userService.selectUser(loginData);
      console.log("userここまで")
      console.log(user)


      //パスワード認証 
      const login=await loginService.loginCheck(loginData,user);
      

 

    //   const newUser = await userService.createUser(use);
    //   res.json(newUser);
    } catch (error) {
        // res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
        // console.log(error)
      }
  };



module.exports={
    login,
}