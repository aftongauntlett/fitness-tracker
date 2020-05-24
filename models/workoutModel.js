// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3],
            }
        }
    });
    Workout.associate = function (models) {
        Workout.hasMany(models.Activity, {
            onDelete: "cascade"
        })
    }
    return Workout;
};
