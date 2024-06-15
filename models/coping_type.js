//models/coping_types.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coping_Type extends Model {
    static associate(models) {
      Coping_Type.hasMany(models.Coping_Tool, { foreignKey: 'coping_type_id' });
      Coping_Type.belongsTo(models.Mood_Coping, { foreignKey: 'mood_coping_id' });
    }
  }
  Coping_Type.init({
    coping_type_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    mood_coping_id: DataTypes.STRING,
    coping_type_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coping_Type',

  });
  Coping_Type.removeAttribute('id');
  return Coping_Type;
};