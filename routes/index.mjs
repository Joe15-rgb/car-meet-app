import express from "express"
import BlogControllers from "../controllers/blogControllers.mjs"

const router = express.Router()

router.get("/", BlogControllers.index)

router.route('/register')
.get(BlogControllers.signIn)
.post(BlogControllers.addUser)


router.route('/login')
.get(BlogControllers.login)
.post(BlogControllers.login)

router.get('/contact', BlogControllers.getContact)

router.get('/about', BlogControllers.getAbout)


export default router