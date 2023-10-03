var loginService = require('../services/loginService');
var bcrypt = require('bcrypt');
var passport = require('passport');




//ログイン処理
const login = async (req: any, res: any) => {
    try {
      const loginData=req.body;
      //ログイン処理
      const login=await loginService.loginCheck(loginData);
    } catch (error) {
        res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
      }
  };



module.exports={
    login,
}