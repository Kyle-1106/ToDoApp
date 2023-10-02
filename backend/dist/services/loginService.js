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
var bcrypt = require('bcrypt');
const loginCheck = (loginData, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashdPassword = user.password;
        const password = loginData.password;
        console.log(password);
        console.log("login");
        const compare = yield bcrypt.compare(password, hashdPassword);
        console.log("compare");
        console.log(compare);
        //ログイン成功時にトークン発行
        // if(compare=1){
        // }
    }
    catch (error) {
    }
});
module.exports = {
    loginCheck,
};
