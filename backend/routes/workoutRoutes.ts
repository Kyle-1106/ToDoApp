
var express = require('express');
var router = express.Router();
var workoutController = require('../controllers/workoutController');


router.get('/getBodyParts',workoutController.getBodyParts);
router.get("/getBodyPartId",workoutController.getBodyPartId);
router.get("/getTrainingDisciplines",workoutController.getTrainingDisciplines);
router.get("/getWorkout",workoutController.getWorkout);
router.post("/registTrainingDiscipline",workoutController.registTrainingDiscipline);
router.post("/recordWorkout",workoutController.recordWorkout);

module.exports = router;
  
