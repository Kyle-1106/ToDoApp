const userService = require('../services/userService');

//新規会員登録
const signup = async (req:any, res:any) => {
    try {
      const newUser = await userService.createUser(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'ユーザーの作成に失敗しました。' });
    }
  };



module.exports={
    signup,
}