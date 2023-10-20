import { JWT } from "../models/jwt";
import { Login } from "../models/login";
import { Response } from 'express';

var errorMessageService = require( '../services/errorMessageService');
var loginService = require('../services/loginService');




//ログイン処理
const login = async (req:Request, res:Response):Promise<void> => {

    try {
      if(req.body==null){
        const errorMessage:string=errorMessageService.requestInvalid;        
        throw new Error(errorMessage)
      }

      const requestBody = req.body;

      //型ガード
      if (!isValidLogin(requestBody)) {
        const errorMessage: string = errorMessageService.invalidLoginData;
        throw new Error(errorMessage);
      }
      //ログイン＆JWT発行
      const loginData:Login=requestBody;
      const loginToken:JWT=await loginService.loginCheck(loginData);
      if(!loginToken){
        throw new Error(errorMessageService.failedCreateToken)
      }
      res.status(200).json(loginToken);

    } catch (error) {
      console.log(error)
      res.status(500).json({ error: errorMessageService.failedLogin });
      }
  };

  //型ガード
  const isValidLogin=(data: any): data is Login=> {
    return data && typeof data === 'object' && 'email' in data && 'password' in data;
  }

module.exports={
    login,
}