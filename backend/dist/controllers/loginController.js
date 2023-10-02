"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var loginService = require('../services/loginService');
var userService = require('../services/userService');
var bcrypt = require('bcrypt');
//ログイン処理
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = req.body;
        console.log("loginData");
        console.log(loginData);
        //ユーザ取得
        const user = yield userService.selectUser(loginData);
        console.log("userここまで");
        console.log(user);
        //パスワード認証 
        const login = yield loginService.loginCheck(loginData, user);
        //   const newUser = await userService.createUser(use);
        //   res.json(newUser);
    }
    catch (error) {
        // res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
        // console.log(error)
    }
});
module.exports = {
    login,
};
