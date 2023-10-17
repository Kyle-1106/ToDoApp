import { JWT } from "../models/jwt";
import { Login } from "../models/login";

var loginService = require('../services/loginService');
var bcrypt = require('bcrypt');


//ログイン処理
const login = async (req:any, res:any) => {
    try {
      const loginData:Login=req.body;
      //ログイン処理
      const loginToken:JWT=await loginService.loginCheck(loginData);
      if(!loginToken){
        throw new Error("トークンの作成に失敗しました")
      }
      res.status(200).json(loginToken);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
      }
  };

  
module.exports={
    login,
}