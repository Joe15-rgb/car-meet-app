import Joi from "joi"


class Validator {
  static validateUser(user) {
    const schema = Joi.object({
      username: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Username cannot be empty",
        "any.required": "Username is required",
        "string.min": "Username must be at least 3 characters long",
        "string.max": "Username must be at most 30 characters long"
      }),
      password: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Password cannot be empty",
        "any.required": "Password is required",
        "string.min": "Password must be at least 3 characters long",
        "string.max": "Password must be at most 30 characters long",
      }),
      confirmPassword: Joi.ref("password"),
      email: Joi.string().email().required().messages({
        "string.empty": "Email cannot be empty",
        "any.required": "Email is required",
        "string.email": "Email must be valid"
      }),
      isAdmin: Joi.boolean()
    }).with("password", "confirmPassword")
    return schema.validate(user)
  }
  static validateCard(card) {
    const schema = Joi.object({
      brand: Joi.string().required().messages({
        "string.empty": "Brand cannot be empty",
        "any.required": "Brand is required"
      }),
      color: Joi.string().required().messages({
        "string.empty": "Color cannot be empty",
        "any.required": "Color is required",
        "string.base": "Color must be a string",

      }),
      price: Joi.number().required().messages({
        "number.empty": "Price cannot be empty",
        "any.required": "Price is required",
        "number.base": "Price must be a number",
      }),
      model: Joi.string().required().messages({
        "string.empty": "Model cannot be empty",
        "any.required": "Model is required",
        "string.base": "Model must be a string",
      }),
      year: Joi.number().required().messages({
        "number.empty": "Year cannot be empty",
        "any.required": "Yead is required"
      }),
      image: Joi.string().required().messages({
        "string.empty": "Image cannot be empty",
        "any.required": "Image is required"
      }),
    })
    return schema.validate(card)
  }
}


export default Validator