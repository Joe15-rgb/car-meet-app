import Sequelize from "sequelize"
import carModel from "../models/carModel.mjs"

const db = {
  car: carModel(sequelize)
}


const sequelize = new Sequelize("car_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false
})


sequelize.sync({ force: false }).then(() => {
  console.log("Connection has been established successfully.")
}).catch((error) => {
  console.error("Unable to connect to the database:", error)
})

export default db