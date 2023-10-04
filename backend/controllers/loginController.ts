var loginService = require('../services/loginService');
var bcrypt = require('bcrypt');




//ログイン処理
const login = async (req: any, res: any) => {
    try {
      const loginData=req.body;
      //ログイン処理
      console.log("ここきてwる");
      const loginToken=await loginService.loginCheck(loginData);
      console.log("loginToken")
      console.log(loginToken)
      res.json(loginToken);

    } catch (error) {
      console.error(error);
        res.status(500).json({ error: 'ユーザー情報の取得に失敗しました。' });
      }
  };



module.exports={
    login,
}