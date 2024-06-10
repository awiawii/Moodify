//models/coping_tools.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coping_Tool extends Model {
    static associate(models) {
      Coping_Tool.belongsTo(models.Coping_Type, { foreignKey: 'coping_type_id' });
    }
  }
  Coping_Tool.init({
    coping_tool_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    coping_tool_name: DataTypes.STRING,
    text: DataTypes.TEXT,
    content_url: DataTypes.STRING,
    coping_type_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coping_Tool',

  });
  Coping_Tool.removeAttribute('id');
  return Coping_Tool;
};