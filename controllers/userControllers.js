const userServices = require('../services/userServices');

function createUserController(req, res) {
  let { email, username, password } = req.body;
  userServices.createUser(email, username, password)
    .then(function () {
      return res.json({
        error: false,
        status: 200,
        message: ' Create success'
    })
    })
    .catch(function (err) {
      res.json({
        error: true,
        status: 500,
        message: ' Create failed'
     })
  })
}
function getAllUsersController(req, res) {
   userServices.getAllUser()
    .then(function (data) {
      return res.json({
        message: " List user",
        data:data
      });
    })
    .catch(function (err) {
      return res.status(500).json({
      message:' failed '
    })
  })
}
function getDetailUserController(req, res) {
  userServices.getDetailUser(req.params.id)
    .then(function (data) {
      return res.json({
        message: " Info user",
        data: data,
      });
    })
    .catch(function (err) {
      return res.status(500).json({
        message: " failed ",
      });
    });
}
function deleteUserController(req, res) {
  userServices
    .deleteUser(req.params.id)
    .then(function (data) {
      return res.json({
        status:200,
        message: " Delete user success ",
        
      });
    })
    .catch(function (err) {
      return res.status(500).json({
        message: " failed ",
      });
    });
}
function updateUserController(req, res) {
  let { email, username, password, age } = req.body;

  userServices
    .updateUser(req.params.id, username, password, email, age)
    .then(function (data) {
      return res.json({
        status: 200,
        message: " update user success ",
        data:data,
      });
    })
    .catch(function (err) {
      return res.status(500).json({
        message: " failed ",
      });
    });
}
module.exports = {
  createUserController,
  getAllUsersController,
  getDetailUserController,
  deleteUserController,
  updateUserController,
};
