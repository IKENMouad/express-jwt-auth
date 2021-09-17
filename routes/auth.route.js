const { register, login } = require("../controllers/auth.controller");

const router = require("express").Router();

router.get("/register", (req, res) => {
  console.log("Register  successful ");
  return res.send("ok");
});
router.post("/register", register);
router.post("/login", login);

module.exports = router;
