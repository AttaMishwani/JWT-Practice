const User = require("../models/user-model");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create user (password will be hashed automatically)
    const userCreated = await User.create({
      username,
      email,
      password
    });

    // Send only username, email, hashed password
    res.status(201).json({
      username: userCreated.username,
      email: userCreated.email,
      password: userCreated.password
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;   } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = { register , login };
