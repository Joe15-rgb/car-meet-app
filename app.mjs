"use strict"
import express from "express"
import morgan from "morgan"
import session from "express-session"
import indexRouter from "./routes/index.mjs"
import cluster from "node:cluster"
import os from "node:os"
import dotenv from "dotenv"


dotenv.config()

const app = express()
const numCPU = os.cpus().length
const PORT = process.env.PORT || 8000


app.use(morgan("tiny"))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true
}))

app.use("/", indexRouter)

//Error handling
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send("Something went wrong")
})


//cluster
if (cluster.isPrimary) {
  for (let i = 0; i < numCPU; i++) {
    cluster.fork()
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    cluster.fork()
  })
} else {
  app.listen(PORT, () => console.log(`Listening on port ${3000}`))
}








