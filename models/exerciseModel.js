// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    }

  });
  Exercise.associate = function (models) {
    Exercise.belongsTo(models.Activity, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Exercise;
};
