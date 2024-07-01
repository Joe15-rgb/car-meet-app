"use strict"

import bcrypt from "bcryptjs"


const hashpassword = (password) => {
  return bcrypt.hashSync(password, 10)
}


export default hashpassword