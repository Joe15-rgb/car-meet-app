"use strict"

import {Model, DataTypes} from "sequelize"
import hashpassword from "../utils/hashpassword.mjs"

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
    phone: DataTypes.STRING(15),
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
    user.password = hashpassword(user.password)
  })
  User.afterUpdate((user) => {
    user.password = hashpassword(user.password)
  })

  return User
}