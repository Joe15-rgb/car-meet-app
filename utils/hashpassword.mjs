"use strict"

import bcrypt from "bcrypt"


const hashpassword = (password) => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}


export default hashpassword