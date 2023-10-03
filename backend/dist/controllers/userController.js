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
var express = require('express');
//新規会員登録 
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield userService.createUser(userData);
        res.json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: 'ユーザーの作成に失敗しました。' });
    }
});
//ユーザ取得
const getUser = (loginData, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //ユーザ取得
        const login = loginService.loginCheck(loginData);
        res.json();
    }
    catch (error) {
        res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
    }
});
module.exports = {
    signup,
    getUser
};
