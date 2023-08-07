const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

module.exports = router;
