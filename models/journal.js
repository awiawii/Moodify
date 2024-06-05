'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    static associate(models) {
      Journal.hasMany(models.Mood_Log, {
        foreignKey: 'journal_id',
        as: 'Mood'
      });
    }
  }
  Journal.init({
    journal_id: {type:DataTypes.STRING,primaryKey:true},
    user_id: DataTypes.STRING,
    journal_title: DataTypes.STRING,
    journal_text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Journal',
  });
  Journal.removeAttribute('id');
  return Journal;
};