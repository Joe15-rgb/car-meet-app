import db from "../configs/db.config.mjs"
import Validator from "../validator/index.mjs";


class BlogControllers {

  static async index(req, res) {
    res.render("index")
  }

  static async signIn(req, res) {
    res.render("register")
  }
  static async login(req, res) {
    res.render("login")
  }

  static async addUser(req, res) {
    const { error, value } = Validator.validateUser(req.body)
    if (error) {
      req.flash("error", error.details[0].message)
      res.redirect("/signup")
    } else {
      const { username, email, phone, password } = value
      const emailUser = await db.User.findOne({where: {email}})

      if(emailUser){
        req.flash("error", "Email is exist")
        res.redirect("/signup")

      }else{
        const user = await db.User.create({
         where:{
          username,
          email,
          phone,
          password
         }
        })
        res.flash("success", "account create with success")
        res.status(300).redirect("/login", {user, password})
      }


      res.end()
    }
  }
  static async getContact(req, res) {
    res.render("contact")
  }

  static async getAbout(req, res) {
    res.render("about")
  }

}


export default BlogControllers