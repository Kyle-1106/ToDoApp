
const userModel = require('../models/usermodel');

const createUser = async (userData: any) => {
    return userModel.createUsers(userData);
  };


  module.exports={
    createUser
  }
  