import { User } from "@prisma/client";
import { SignupUser } from "../models/signupUser";
import { Login } from "../models/login";

var userService = require('../services/userService');
import { JWT } from "../models/jwt";

var loginService = require('../services/loginService');


//新規会員登録 
const signup = async (req:any, res: any) => {
    try {
      const userData:User=req.body;
      const createdUser:User = await userService.createUser(userData);
      //JWT設定
      const signupData:Login={"email":userData.email,"password":userData.password};
      const loginToken:JWT=await loginService.loginCheck(signupData);
      if(!loginToken){
        throw new Error("トークンの作成に失敗しました")
      }
      res.status(200).json(loginToken);
    } catch (error) {
      res.status(500).json({ error: 'そのメールアドレスはすでに登録されています' });
    }
  };

//ユーザ取得
  const getUser = async (loginData:Login, res:any) =>{
    try {
      const email=loginData.email;
      //ユーザ取得
      const user=await userService.selectUser(email);
      res.json(user);
      
    } catch (error) {
      res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
    }
    
  };

module.exports={
    signup,
    getUser
}