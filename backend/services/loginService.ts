
var bcrypt = require('bcrypt');


//パスワード認証
const loginCheck=async (loginData:any,user:any) =>{
    try {
        const hashdPassword=user.password;
        const password=loginData.password; 
        const compare=await bcrypt.compare(password,hashdPassword);
        //トークン発行
        if(compare){

        }
        else{
            console.log("パスワードが正しくありません。")
        }

    } catch (error) {
        
    }
    
}

module.exports={
    loginCheck,
  }