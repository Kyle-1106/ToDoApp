import { JWT } from "../interfaces/jwt";
import { Login } from "../interfaces/login";
import { User } from "../interfaces/user";

var userService=require('../services/userService')
var errorMessageService=require('../services/errorMessageService')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/jwt.config');



//パスワード認証とJWT発行
const loginCheck=async (loginData:Login) =>{
    try {
        //該当ユーザ取得
        const user:User=await userService.selectUser(loginData);
        //パスワード認証
        const hashdPassword=user.password;
        const password=loginData.password; 
        const compare:boolean=await bcrypt.compare(password,hashdPassword);
        if(!compare){
            throw new Error(errorMessageService.incorectPassword);
        }
        //jwtの作成
        const payload = {
            id:user.id,
            name:user.name,
            email: user.email
          };
        const token=jwt.sign(payload,config.jwt.secret,config.jwt.options);
        const jwtBody:JWT={
            userId:user.id,
            name:user.name,
            email:user.email,
            token:token,
        }
        return jwtBody;
    } catch (error) {
      console.log(error);
      throw error;
    }
    
}
module.exports={
    loginCheck,
  }