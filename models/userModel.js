const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  age: Number
})
module.exports = mongoose.model("users" , userSchema)
