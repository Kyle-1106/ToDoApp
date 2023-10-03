
var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
router.post('/signup',userController.signup);
router.get("/getUser",userController.getUser);

module.exports = router;
  