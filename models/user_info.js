'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Info.init({
    user_id: DataTypes.STRING,
    account_id: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    country: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Info',
  });
  User_Info.removeAttribute('id');
  return User_Info;
};