'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {foreignKey: 'author'})
      User.hasMany(models.Comment, {foreignKey: 'author'})
      User.belongsTo(models.Role)
    }
  };
  User.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    lien: DataTypes.TEXT,
    role: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};