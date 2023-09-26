var express = require('express');
var router = express.Router();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {  // 変更箇所
  res.render('index', { title: 'Express' });
});

app.post('/api/endpoint', (req:any, res:any) => {
  res.set({ 'Access-Control-Allow-Origin': '*' }); 
  const requestData = req.body;
  console.log('POSTデータを受け取りました:', requestData);

  // レスポンスを送信
  //res.json({ message: 'データを受け取りました' });
});
module.exports = router;
