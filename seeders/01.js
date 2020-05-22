'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // Add 2 more tables, Workouts and Activities
    // Activity = Duration, Weight, Sets, Reps and Distance
    // no handlebars - make api call to jquery

    return queryInterface.bulkInsert('Exercises', [
      { exercise_name: 'Barbell Curl', exercise_type: 'Weight Training', createdAt: new Date(), updatedAt: new Date() },
      { exercise_name: 'Lateral Curl', exercise_type: 'Weight Training', createdAt: new Date(), updatedAt: new Date() },
      { exercise_name: 'Bench Press', exercise_type: 'Weight Training', createdAt: new Date(), updatedAt: new Date() },
      { exercise_name: 'Treadmill', exercise_type: 'Cardio', createdAt: new Date(), updatedAt: new Date() },
      { exercise_name: 'Stairmaster', exercise_type: 'Cardio', createdAt: new Date(), updatedAt: new Date() },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Users', null, {});
  }
};
