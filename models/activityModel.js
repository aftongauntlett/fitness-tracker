// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        duration: {
            type: DataTypes.INTEGER,
            validate: {

            }
        },
        weight: {
            type: DataTypes.INTEGER,
        },
        reps: {
            type: DataTypes.INTEGER
        },
        sets: {
            type: DataTypes.INTEGER
        },
        distance: {
            type: DataTypes.INTEGER
        }
    });
    Activity.associate = function (models) {
        Activity.hasOne(models.Exercise, {
            onDelete: "cascade"
        })
        Activity.belongsTo(models.Workout, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Activity;
};
