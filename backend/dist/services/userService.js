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
const { PrismaClient } = require('@prisma/client');
const User = require('../models/usermodel');
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("ここまで来てる？");
        console.log(userData);
        delete userData.confirmPassword;
        console.log(userData);
        //データ登録
        const prisma = new PrismaClient({
            // ログを有効化
            log: ['query', 'info', 'warn', 'error'],
        });
        console.log("prisma");
        const newUser = yield prisma.user.create({
            data: {
                email: userData.email,
                name: userData.name,
                password: userData.password
            }
        });
        yield prisma.$disconnect();
        // 新しいユーザーを返す
        return newUser;
        console.log(newUser);
    }
    catch (error) {
        console.log("ここやで");
        throw error;
    }
});
module.exports = {
    createUser,
};
