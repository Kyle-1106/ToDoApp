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
      const email=loginData.email;
      //ユーザ取得
      const user=await userService.selectUser(email);
      res.json(user);
      
    } catch (error) {
      console.log("error")
      console.log(error)
      res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
      // console.log(error)
    }
    
  };



module.exports={
    signup,
    getUser
}