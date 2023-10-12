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
var workoutService = require('../services/workoutService');
//部位名取得
const getBodyParts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //部位名を取得
        const allBodyParts = yield workoutService.getAllBodyParts();
        if (!allBodyParts) {
            throw new Error("部位名を取得できませんでした");
        }
        res.status(200).json(allBodyParts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: '部位名の取得に失敗しました。' });
    }
});
//部位ID取得
const getBodyPartId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bodyPartName = req.query.name;
        const bodyPart = yield workoutService.getBodyPart(bodyPartName);
        console.log("bodyPart");
        console.log(bodyPart);
        res.status(200).json(bodyPart);
    }
    catch (error) {
        console.log(error);
        throw new Error("部位IDの取得ができません");
    }
});
//種目名取得
const getTrainingDisciplines = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bodyPart = req.query.name;
        const trainingDisciplines = yield workoutService.getTrainingDisciplines(bodyPart);
        console.log("trainingDisciplines");
        console.log(trainingDisciplines);
        res.status(200).json(trainingDisciplines);
    }
    catch (error) {
        console.log(error);
        throw new Error("種目の取得ができません");
    }
});
//種目登録
const registTrainingDiscipline = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.id;
        const id = req.body.name;
        const trainingDisciplines = yield workoutService.registTrainingDiscipline(name, id);
        res.status(200).json(trainingDisciplines);
    }
    catch (error) {
        console.log(error);
        throw Error("種目が取得取得できませんでした");
    }
});
const recordWorkout = (workout, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workoutlog = workoutService.recordWorkout(workout);
});
module.exports = {
    getBodyParts,
    getTrainingDisciplines,
    registTrainingDiscipline,
    recordWorkout,
    getBodyPartId,
};
//# sourceMappingURL=workoutController.js.map