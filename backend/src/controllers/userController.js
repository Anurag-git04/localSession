const User = require("../models/User");

// Save user data
const saveUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "User saved successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all users (for testing)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { saveUser, getUsers };
