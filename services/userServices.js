let userModel = require('../models/userModel');
function createUser(username, password,email) {
  return userModel.create({
    email,username,password
  })
}
function getAllUser() {
  return userModel.find({});
}
function getDetailUser(id) {
  return userModel.findOne({_id:id});
}
function deleteUser(id) {
  return userModel.deleteOne({ _id: id });
}
function updateUser(id, username, password, email, age) {
  let updateUser = {};
  if (email) updateUser.email = email;
  if (username) updateUser.username = username;
  if (password) updateUser.password = password;
  if (age) updateUser.age = age;
  return userModel.updateOne({_id: id },updateUser);
}
module.exports = {
  createUser,
  getAllUser,
  getDetailUser,
  updateUser,
  deleteUser,
};
