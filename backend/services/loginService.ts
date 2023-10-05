import { User } from "@prisma/client";
import { JWT } from "../models/jwt";
import { Login } from "../models/login";

var userService=require('../services/userService')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/jwt.config');



//パスワード認証とトークン発行
const loginCheck=async (loginData:Login,jwtBody:JWT) =>{
    try {
        //該当ユーザ取得
        const user:User=await userService.selectUser(loginData);
        //パスワード認証
        const hashdPassword=user.password;
        const password=loginData.password; 
        const compare:boolean=await bcrypt.compare(password,hashdPassword);
        if(!compare){
            throw new Error("パスワードが正しくありません");
        }
        //jwtの作成
        const payload = {
            id:user.id,
            email: user.email
          };
        const token=jwt.sign(payload,config.jwt.secret,config.jwt.options);
        const jwtBody:JWT={
            email:user.email,
            token:token,
        }
        return jwtBody;
    } catch (error) {
       console.log(error)
    }
    
}
module.exports={
    loginCheck,
  }