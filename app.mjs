"use strict"
import express from "express"
import morgan from "morgan"
import session from "express-session"
import  indexRouter from "./routes/index.mjs"

const app = express()

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

//worked thead




app.listen(3000, () => console.log("Listening on port 3000"))




