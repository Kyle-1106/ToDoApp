"use strict";
var express = require('express');
var router = express.Router();
const cors = require('cors');
var app = express();
// app.use(cors({
//     //http://localhost:4200からのアクセスを受け付ける
//     origin: 'http://localhost:4200',

//     credentials: true,
//     //レスポンスstatusを200に設定
//     optionsSuccessStatus: 200 
// }));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
app.post('/api/endpoint', (req, res) => {
    const requestData = req.body;
    console.log('POSTデータを受け取りました:', requestData);
    // レスポンスを送信
    //res.json({ message: 'データを受け取りました' });
});
module.exports = router;
