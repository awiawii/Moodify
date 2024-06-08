'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Journals', {
      journal_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      uid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      journal_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      journal_text: {
        allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Journals');
  }
};