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
const bcrypt = require('bcrypt');
const saltRounds = 10;
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        delete userData.confirmPassword;
        //データ登録
        const prisma = new PrismaClient({
            // Prismaログを有効化
            log: ['query', 'info', 'warn', 'error'],
        });
        const hashedPassword = yield bcrypt.hash('password', saltRounds);
        const newUser = yield prisma.user.create({
            data: {
                email: userData.email,
                name: userData.name,
                password: hashedPassword
            }
        });
        yield prisma.$disconnect();
        // 新しいユーザーを返す
        return newUser;
    }
    catch (error) {
        //メールアドレス重複時の処理を後々実装予定
        throw error;
    }
});
module.exports = {
    createUser,
};
