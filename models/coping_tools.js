'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coping_Tools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coping_Tools.init({
    coping_tool_id: DataTypes.STRING,
    coping_type_id: DataTypes.STRING,
    coping_tool_name: DataTypes.STRING,
    content_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coping_Tools',
  });
  Coping_Tools.removeAttribute('id');
  return Coping_Tools;
};