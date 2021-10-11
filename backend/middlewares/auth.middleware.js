const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token || !token.startswith("Bearer ")) {
    return res.status(401).send("Access Denied");
  } else {
    try {
      const virefied = jwt.verify(token, process.env.secret);
      req.user = virefied;
      next();
    } catch (err) {
      return res.status(401).send({ message: "Invalid token", token });
    }
  }
};

module.exports = {
  auth,
};
