'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mood_copings', [
      {
        mood_coping_id: '1',
        mood_type: 'anger',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mood_coping_id: '2',
        mood_type: 'fear',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mood_coping_id: '3',
        mood_type: 'happy',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mood_coping_id: '4',
        mood_type: 'joy',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mood_coping_id: '5',
        mood_type: 'love',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mood_coping_id: '6',
        mood_type: 'sadness',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mood_coping_id: '7',
        mood_type: 'neutral',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mood_copings', null, {});
  }
};
