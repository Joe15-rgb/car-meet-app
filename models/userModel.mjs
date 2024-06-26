"use strict"

import {Model, DataTypes} from "sequelize"

export default (sequelize) =>{

  class User extends Model {}

  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      unique: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  }, {
    sequelize,
    modelName: "users",
    paranoid: true

  })

  User.beforeCreate((user) => {
    user.password = User.encryptPassword(user.password)
  })
  User.afterUpdate((user) => {
    user.password = User.encryptPassword(user.password)
  })

  return User
}