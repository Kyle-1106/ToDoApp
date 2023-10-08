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
var { PrismaClient } = require('@prisma/client');
var { Bodypart } = require("../models/bodyPart");
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
const getAllBodyParts = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBodyParts = yield prisma.bodypart.findMany();
        console.log(allBodyParts);
        return allBodyParts;
    }
    catch (error) {
        console.log("エラー", error);
    }
});
module.exports = {
    getAllBodyParts,
};
//# sourceMappingURL=workoutService.js.map