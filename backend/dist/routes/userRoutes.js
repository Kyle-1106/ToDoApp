"use strict";
var express = require('express');
var router = express.Router();
var app = express();
const userController = require('../controllers/userController');
router.post('/signup', userController.signup);
module.exports = router;
