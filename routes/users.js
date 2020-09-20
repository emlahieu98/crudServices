var express = require('express');
var router = express.Router();
var {
  createUserController,
  getAllUsersController,
  getDetailUserController,
  deleteUserController,
  updateUserController,
} = require("../controllers/userControllers");

/* GET users . */
router.post("/register", createUserController);

router.get("/", getAllUsersController);

router.get("/:id", getDetailUserController);
router.delete("/:id", deleteUserController);
router.put("/:id", updateUserController);


module.exports = router;
