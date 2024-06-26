import {Model, DataTypes} from "sequelize"


export default (sequelize) =>{

  class Car extends Model {}

  Car.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    image: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: "cars",
    paranoid: true

  })

  return Car
}