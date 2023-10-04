"use strict";
var express = require('express');
var router = express.Router();
var app = express();
const userController = require('../controllers/userController');
router.post('/signup', (req, res) => {
    const requestData = req.body;
    console.log('POSTデータを受け取りました:', requestData);
    // レスポンスを送信
    res.json({ message: 'データを受け取りました' });
});
// // console.log("ここには来た1");
// // //新規会員登録処理
// // router.post('/signup',userController.signup);
// // console.log("ここには来た");
module.exports = router;
