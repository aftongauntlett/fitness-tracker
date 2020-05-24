// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {

    });
    Workout.associate = function (models) {
        Workout.hasMany(models.Activity, {
            onDelete: "cascade"
        })
    }
    return Workout;
};
