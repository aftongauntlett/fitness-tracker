// This is an example of a Controller. Note how it requires in the model(s) it needs.

const db = require("../models")

const ExerciseCntrl = {
  // This is called (when needed) from the route page when a 
  // listing of all exercises is needed
  getAll(req, res){

    // -- YOU WILL UPDATE WHAT THE "RESPONSE OBJECT" RETURNS -- //

    db.Exercise.findAll({}).then(function (results) {
      res.json(results);
    })

    // return res.json({ searching: "Finding Exercises ..."})

    // -- EXAMPLE SEQUELIZE DB QUERY -- //
    // Exercise.find({}).then(data => {
    //   res.json(data)
    // });
  }
}

// -- WE ARE EXPORTING (MAKING AVAILABLE TO OTHER FILES) THE CONTROLLER LOGIC (OBJECT & METHODS) -- //
module.exports = ExerciseCntrl;