'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coping_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coping_Type.init({
    coping_type_id: DataTypes.STRING,
    coping_type_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coping_Type',
  });
  Coping_Type.removeAttribute('id');
  return Coping_Type;
};