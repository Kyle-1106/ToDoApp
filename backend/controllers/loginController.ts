var loginService = require('../services/loginService');
var userService=require('../services/userService')
var bcrypt = require('bcrypt')



//ログイン処理
const login = async (req: any, res: any) => {
    try {
      const loginData=req.body;
      console.log("loginData")
      console.log(typeof loginData)
      //ユーザ取得
      const user=await userService.selectUser(loginData);
      console.log("成功?")
      //パスワード認証 
      const login=await loginService.loginCheck(loginData,user);
      console.log("成功!")
    
    //   res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
      }
  };



module.exports={
    login,
}