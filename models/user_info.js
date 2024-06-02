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
      User_Info.hasMany(models.Journal, {
        foreignKey: 'user_id',
        as: 'Journal'
      });
    }
  }
  User_Info.init({
    user_id: {type:DataTypes.STRING,primaryKey:true},
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