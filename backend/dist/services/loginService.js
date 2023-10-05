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
Object.defineProperty(exports, "__esModule", { value: true });
var userService = require('../services/userService');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/jwt.config');
//パスワード認証とトークン発行
const loginCheck = (loginData, jwtBody) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //該当ユーザ取得
        const user = yield userService.selectUser(loginData);
        //パスワード認証
        const hashdPassword = user.password;
        const password = loginData.password;
        const compare = yield bcrypt.compare(password, hashdPassword);
        if (!compare) {
            throw new Error("パスワードが正しくありません");
        }
        //jwtの作成
        const payload = {
            email: user.email
        };
        const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);
        const jwtBody = {
            email: user.email,
            token: token,
        };
        return jwtBody;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    loginCheck,
};
//# sourceMappingURL=loginService.js.map