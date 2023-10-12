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
var { PrismaClient } = require('@prisma/client');
var { Bodypart } = require("../models/bodyPart");
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
//部位取得処理
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
//部位名取得処理
const getTrainingDisciplines = (bodyPart) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const selectedBodyPart = yield prisma.bodypart.findUnique({
            where: {
                name: bodyPart
            }
        });
        const bodyPartId = selectedBodyPart.id;
        const trainingDisciplines = yield prisma.training_discipline.findMany({
            where: {
                bodypartId: bodyPartId
            }
        });
        if (!trainingDisciplines) {
            return null;
        }
        return trainingDisciplines;
    }
    catch (error) {
    }
});
const registTrainingDiscipline = (trainingDisciplineName, trainingDisciplineBodyPartId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(trainingDisciplineName);
        console.log(trainingDisciplineBodyPartId);
        yield prisma.training_discipline.create({
            data: {
                name: trainingDisciplineName,
                bodypartId: trainingDisciplineBodyPartId
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
const recordWorkout = (workout, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = yield prisma.user.findUnique({
            where: {
                email: workout.email,
            },
            select: {
                id: true
            },
        });
        // const bodypartId=await prisma.bodypart.findUnique({
        //     where:{
        //         bodypart:workout.bodyPart
        //     },
        //     select:{
        //         id:true
        //     },
        // })
        const record = yield prisma.workoutlog.create({
            data: {
                userId: userId,
                bodypartId: workout.bodyPartId
            }
        });
    }
    catch (error) {
    }
});
module.exports = {
    getAllBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,
    recordWorkout,
};
//# sourceMappingURL=workoutService.js.map