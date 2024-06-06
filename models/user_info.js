//models/user_info.js

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
        foreignKey: 'uid',
        as: 'Journal'
      });
    }
  }

User_Info.init({
    uid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    country: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    profile_picture: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User_Info',
});

User_Info.removeAttribute('id');
return User_Info;
};
