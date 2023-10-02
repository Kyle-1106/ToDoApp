
var bcrypt = require('bcrypt');



const loginCheck=async (loginData:any,user:any) =>{
    try {
        const hashdPassword=user.password;
        
        const password=loginData.password; 
        
        
        
        console.log(password) 
        console.log("login")
        const compare=await bcrypt.compare(password,hashdPassword);
        console.log("compare")
        console.log(compare)
        //ログイン成功時にトークン発行
        // if(compare=1){

        // }
    } catch (error) {
        
    }
    
}

module.exports={
    loginCheck,
  }