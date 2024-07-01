import Sequelize from "sequelize"
import carModel from "../models/carModel.mjs"
import userModel from "../models/userModel.mjs"
import dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize(
   process.env.DB_NAME,
   process.env.DB_USER,
   process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  logging: false
})


const db = {
  Car: carModel(sequelize),
  User: userModel(sequelize)
}

db.User.hasMany(db.Car)
db.Car.belongsTo(db.User)


sequelize.sync({ force: false }).then(() => {
  console.log("Connection has been established successfully.")
}).catch((error) => {
  console.error("Unable to connect to the database:", error)
})

export default db