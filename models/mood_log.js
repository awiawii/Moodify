//models/mood_logs.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mood_Log extends Model {
    static associate(models) {
      Mood_Log.hasMany(models.Mood_Coping, { foreignKey: 'mood_log_id' });
    }
  }
  Mood_Log.init({
    mood_log_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    journal_id: DataTypes.STRING,
    mood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mood_Log',
  });
  Mood_Log.removeAttribute('id');
  return Mood_Log;
};
