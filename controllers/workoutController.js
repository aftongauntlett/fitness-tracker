const db = require("../models");

const WorkoutController = {
    new(req, res) {
        return new Promise((resolve, reject) => {
            db.Workout.create(req.body).then(results => {
                res.redirect("/")
            })
        })
    }
}

module.exports = WorkoutController;