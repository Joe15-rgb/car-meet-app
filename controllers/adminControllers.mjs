"use strict"

class AdminControllers{
  static async index(req, res){
    res.status(200).render("admin/index")
  }
  static async deleteUser(req, res){
  }

}

export default AdminControllers