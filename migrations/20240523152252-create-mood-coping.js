'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mood_Copings', {
      mood_log_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coping_type_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coping_tool_id: {
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
    await queryInterface.dropTable('Mood_Copings');
  }
};