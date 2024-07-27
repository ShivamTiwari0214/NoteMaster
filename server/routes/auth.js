const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchusers = require("../middleware/fetchusers");

const User = require("../models/User");
const JWT_SECRET = "HELLO"; // Consider using an environment variable

// ROUTE 1: Creating a user using POST "/api/auth/"
router.post(
  "/",
  [
    body("name", "Enter a valid name.").isLength({ min: 3 }),
    body("userName","userName invalid").isLength({min:3}),
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Password must be at least 8 characters.").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let flag = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ flag, errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ flag, error: "Sorry, this email is already taken" });
      }

      // Hash and salt the password
      let salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        userName:req.body.userName,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      flag = true;
      res.json({ flag, authtoken });
    } catch (error) {
      res.status(500).send("Internal Server Error.");
    }
  }
);

// ROUTE 2: Authenticating a user using POST "/api/auth/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      let flag = false;
      if (!user) {
        return res.status(400).json({ flag, error: "Incorrect credentials. Please try again." });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ flag, error: "Incorrect credentials. Please try again." });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      flag = true;
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ flag, authtoken });
    } catch (error) {
      res.status(500).send("Internal Server Error.");
    }
  }
);

// ROUTE 3: Get logged in user details using POST "/api/auth/getuser"
router.post("/getuser", fetchusers, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
