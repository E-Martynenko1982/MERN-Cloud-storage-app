const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const authMiddleware = require("../middleware/auth.middleware");
const fileService = require("../services/fileService");
const File = require("../models/File");
const router = new Router();

router.post("/registration",
  [
    check("email", "Uncorrect email").isEmail(),
    check("password", "Password must be longer than 3 and shorter than 12").isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrect request", errors });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: `User with email ${email} already exist` });
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashPassword });
      await user.save();
      await fileService.createDir(new File({ user: user.id, name: "" }));
      return res.json({ message: "User was created" });
    } catch (error) {
      console.log(error);

      res.send({ message: "Server error" });
    }
  })

router.post("/login",

  async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (!isValidPassword) {
        return res.status(404).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ id: user.id }, config.get("secretKey"), { "expiresIn": "1h" });
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpace: user.diskSpace,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        }
      })
    } catch (error) {
      console.log(error);

      res.send({ message: "Server error" });
    }
  })

router.get("/auth", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Auth error: no token" });
    }

    const decoded = jwt.verify(token, config.get("secretKey"));
    const user = await User.findById(decoded.id);

    const newToken = jwt.sign({ id: user.id }, config.get("secretKey"), { expiresIn: "1h" });

    return res.json({
      token: newToken,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Auth error: invalid token" });
  }
});


module.exports = router;