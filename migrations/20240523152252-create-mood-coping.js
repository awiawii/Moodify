'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mood_Copings', {
      mood_coping_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(16)
      },
      mood_type: {
        allowNull: false,
        type: Sequelize.STRING(16)
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
    await queryInterface.dropTable('Mood_Copings');
  }
};