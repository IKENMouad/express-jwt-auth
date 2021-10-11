const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password, name, mobile } = req.body;
  if (email && password && name) {
    const fetchedUser = await User.findOne({ email });
    if (fetchedUser) {
      return res.status(400).send({ message: "user exist with this email " });
    } else {
      const salt = await bcrypt.genSalt(10);
      const cryptedPassword = await bcrypt.hash(password, salt);
      let user = new User({ name, email, password: cryptedPassword, mobile });
      user = await user.save();
      return res
        .status(201)
        .send({ user, message: user._id ? "success" : "error" });
    }
  } else {
    return res.status(400).send({ message: "err validation" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    let user = await User.findOne({ email });
    if (user) {
      const isPassMatch = await bcrypt.compare(password, user.password);
      if (isPassMatch) {
        const token = jwt.sign({ id: user._id }, process.env.secret);
        return res
          .header("auth-token", token)
          .status(200)
          .send({ token, email: user.email, name: user.name });
      } else {
        return res.status(400).send({ message: "password not match" });
      }
    } else {
      return res.status(400).send({ message: "user not found" });
    }
  }
};

module.exports = {
  register,
  login,
};
