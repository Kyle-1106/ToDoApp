"use strict";
var express = require('express');
var router = express.Router();
var workoutController = require('../controllers/workoutController');
router.get('/getBodyParts', workoutController.getBodyParts);
module.exports = router;
//# sourceMappingURL=workoutRoutes.js.map