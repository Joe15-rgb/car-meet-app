import express from "express"
import BlogControllers from "../controllers/blogControllers.mjs"

const router = express.Router()

router.get("/", BlogControllers.index)

router.route('/signup')
.get(BlogControllers.signup)
.post(BlogControllers.addUser)

export default router