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
var userService = require('../services/userService');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/jwt.config');
//パスワード認証とトークン発行
const loginCheck = (loginData, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //該当ユーザ取得
        const user = yield userService.selectUser(loginData);
        const hashdPassword = user.password;
        const password = loginData.password;
        console.log("toddkne");
        //パスワード認証
        const compare = yield bcrypt.compare(password, hashdPassword);
        console.log("tokdadane");
        if (compare) {
            console.log("パスワードが正しくありません。");
        }
        console.log("tokn111111e");
        console.log(user);
        const payload = {
            email: user.email
        };
        const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);
        console.log("tokne");
        console.log(token);
        const body = {
            email: user.email,
            token: token,
        };
        res.json(body);
    }
    catch (error) {
    }
});
module.exports = {
    loginCheck,
};
