import { User } from "@prisma/client";
import { SignupUser } from "../interfaces/signupUser";
import { Login } from "../interfaces/login";
import { JWT } from "../interfaces/jwt";
import { Response } from "express";
var userService = require('../services/userService');
var loginService = require('../services/loginService');
var errorMessageService = require( '../services/errorMessageService');



//新規会員登録 
const signup = async (req:Request, res:Response):Promise<void> => {
    try {
      //リクエスト内容検証
      if(req.body==null){
        const errorMessage:string=errorMessageService.requestInvalid;
        throw new Error(errorMessage)
      }
      const requestBody=req.body;

      //型ガード
      if(!isValidSignup(requestBody)){
        const errorMessage: string = errorMessageService.invalidSignupData;
        throw new Error(errorMessage);
      }
      //ユーザ登録
      await userService.createUser(requestBody);

      //JWT設定
      const signupData:Login={"email":requestBody.email,"password":requestBody.password};
      const loginToken:JWT=await loginService.loginCheck(signupData);
      if(!loginToken){
        throw new Error(errorMessageService.failedCreateToken)
      }

      res.status(200).json(loginToken);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

//ユーザ取得
  const getUser = async (req:any, res:Response):Promise<void> => {
    try {
      //リクエスト内容検証
      if(req.body==null){
        const errorMessage:string=errorMessageService.requestInvalid;
        throw new Error(errorMessage)
      }
      const requestBody=req.body;
      const email:string=req.query.email;
      //ユーザ取得
      const user=await userService.selectUser(email);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
    
  };

   //型ガード
    const isValidSignup=(data: any): data is SignupUser=> {
    return data && typeof data === 'object' && 'name' in data && 'email' in data && 'password' in data;
  }

module.exports={
    signup,
    getUser
}