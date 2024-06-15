'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mood_Copings', [
      { mood_coping_id: '1', mood_type: 'Angry', createdAt: new Date(), updatedAt: new Date() },
      { mood_coping_id: '2', mood_type: 'Fear', createdAt: new Date(), updatedAt: new Date() },
      { mood_coping_id: '3', mood_type: 'Happy', createdAt: new Date(), updatedAt: new Date() },
      { mood_coping_id: '4', mood_type: 'Joy', createdAt: new Date(), updatedAt: new Date() },
      { mood_coping_id: '5', mood_type: 'Love', createdAt: new Date(), updatedAt: new Date() },
      { mood_coping_id: '6', mood_type: 'Sadness', createdAt: new Date(), updatedAt: new Date() },
      { mood_coping_id: '7', mood_type: 'Neutral', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Mood_Copings', null, {});
  }
};
