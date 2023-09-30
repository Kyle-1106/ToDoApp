const userService = require('../services/userService');

//新規会員登録 
console.log("コントローラ１")

const signup = async (req: any, res: any) => {
    try {
      const userData=req.body;
      const newUser = await userService.createUser(userData);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'ユーザーの作成に失敗しました。' });
    }
  };



module.exports={
    signup,
}