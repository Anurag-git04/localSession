const express = require("express");
const { saveUser, getUsers } = require("../controllers/userController");

const router = express.Router();

// Routes
router.post("/save", saveUser); // Save user data
router.get("/users", getUsers); // Get all users

module.exports = router;
