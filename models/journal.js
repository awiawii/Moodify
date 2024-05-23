'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Journal.init({
    journal_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    journal_title: DataTypes.STRING,
    journal_text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Journal',
  });
  Journal.removeAttribute('id');
  return Journal;
};