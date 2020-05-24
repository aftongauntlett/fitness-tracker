// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {

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
