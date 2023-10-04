var userService=require('../services/userService')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/jwt.config');



//パスワード認証とトークン発行
const loginCheck=async (loginData:any) =>{
    try {
        //該当ユーザ取得
        const user=await userService.selectUser(loginData);
        console.log("user");
        console.log(user);
        //パスワード認証
        const hashdPassword=user.password;
        const password=loginData.password; 
        const compare=await bcrypt.compare(password,hashdPassword);
        console.log("ここきてる");
        if(!compare){
            console.log("パスワードが正しくありません。");
            throw new Error("パスワードが正しくありません");
            
        }
        const payload = {
            email: user.email
          };
          console.log("ここきてdada");
        const token=jwt.sign(payload,config.jwt.secret,config.jwt.options);
        const body={
            email:user.email,
            token:token,
        }
        console.log("body")
        console.log(body)
        console.log("res.json(body)")
        
        return body;

        
    } catch (error) {
        
    }
    
}


module.exports={
    loginCheck,
  }