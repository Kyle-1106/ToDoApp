import { User } from "@prisma/client";
import { SignupUser } from "../models/signupUser";
import { Login } from "../models/login";

var userService = require('../services/userService');
var express = require('express');



//新規会員登録 
const signup = async (req:any, res: any) => {
    try {
      const userData=req.body;
      const createdUser:User = await userService.createUser(userData);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json({ error: 'そのメールアドレスはすでに登録されています' });
    }
  };

//ユーザ取得
  const getUser = async (loginData:Logingit, res:any) =>{
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