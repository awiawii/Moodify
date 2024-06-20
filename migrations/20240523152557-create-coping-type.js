'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coping_Types', {
      coping_type_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      mood_coping_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Mood_Copings',
          key: 'mood_coping_id'
        }
      },
      coping_type_name: {
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
    await queryInterface.dropTable('Coping_Types');
  }
};