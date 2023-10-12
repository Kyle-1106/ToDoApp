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
var loginService = require('../services/loginService');
//新規会員登録 
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const createdUser = yield userService.createUser(userData);
        const selectedUser = yield userService.selectUser(userData);
        //JWT設定
        const signupData = { "id": selectedUser.id, "email": userData.email, "password": userData.password };
        const loginToken = yield loginService.loginCheck(signupData);
        if (!loginToken) {
            throw new Error("トークンの作成に失敗しました");
        }
        res.status(200).json(loginToken);
    }
    catch (error) {
        res.status(500).json({ error: 'そのメールアドレスはすでに登録されています' });
    }
});
//ユーザ取得
const getUser = (loginData, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = loginData.email;
        //ユーザ取得
        const user = yield userService.selectUser(email);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
    }
});
module.exports = {
    signup,
    getUser
};
//# sourceMappingURL=userController.js.map