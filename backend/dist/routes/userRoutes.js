"use strict";
var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
console.log("post");
router.post('/signup', userController.signup);
console.log("afterpost");
module.exports = router;
