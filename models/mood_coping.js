//models//mood_coping.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mood_Coping extends Model {
    static associate(models) {
      Mood_Coping.belongsTo(models.Mood_Log, { foreignKey: 'mood_log_id' });
      Mood_Coping.belongsTo(models.Coping_Type, { foreignKey: 'coping_type_id' });
    }
  }
  Mood_Coping.init({
    mood_coping_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    coping_type_id: DataTypes.STRING,
    mood_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mood_Coping',
  });
  Mood_Coping.removeAttribute('id');
  return Mood_Coping;
};