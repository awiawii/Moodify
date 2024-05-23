'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mood_Logs', {
      mood_log_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      journal_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mood: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mood_Logs');
  }
};