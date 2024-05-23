'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coping_Tools', {
      coping_tool_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      coping_type_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coping_tool_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content_url: {
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
    await queryInterface.dropTable('Coping_Tools');
  }
};