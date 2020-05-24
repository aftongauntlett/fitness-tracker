const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');
const WorkoutController = require("../controllers/workoutController");

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //


// GET  "/""
// Calls controller which will return all activities for a specific workout
// router.get("/", ExerciseCntrl.getAll);
router.get("/exercise", function (req, res, next) {
    return ExerciseCntrl.getAll(req, res, next);
})

router.post("/workout", function (req, res) {
    return WorkoutController.new(req, res);
})

// -- ADD ADDITIONAL ROUTES -- //

module.exports = router

