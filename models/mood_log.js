'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mood_Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mood_Log.init({
    mood_log_id: DataTypes.STRING,
    journal_id: DataTypes.STRING,
    mood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mood_Log',
  });
  Mood_Log.removeAttribute('id');
  return Mood_Log;
};