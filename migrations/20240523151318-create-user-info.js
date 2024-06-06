'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_infos', {
      uid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      account_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING
      },
      birthday: {
        allowNull: true,
        type: Sequelize.DATE
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      profile_picture: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_infos');
  }
};
