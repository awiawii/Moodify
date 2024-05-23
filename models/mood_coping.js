'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mood_Coping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mood_Coping.init({
    mood_log_id: DataTypes.STRING,
    coping_type_id: DataTypes.STRING,
    coping_tool_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mood_Coping',
  });
  Mood_Coping.removeAttribute('id');
  return Mood_Coping;
};