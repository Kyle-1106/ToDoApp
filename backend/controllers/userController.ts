var userService = require('../services/userService');
var express = require('express');



//新規会員登録 
const signup = async (req: any, res: any) => {
    try {
      const userData=req.body;
      const newUser = await userService.createUser(userData);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'ユーザーの作成に失敗しました。' });
    }
  };

//ユーザ取得
  const getUser = async (loginData:any, res:any) =>{
    try {
      //ユーザ取得
      const login=loginService.loginCheck(loginData);
      res.json();
      
    } catch (error) {
      res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
    }
    
  };



module.exports={
    signup,
    getUser
}