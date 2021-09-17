const User = require("../models/User");

const fetchUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(200).send({ users, total: users.length });
};

const fetchUser = async (req, res) => {
  const { userId } = req.params;
  if (userId) {
    const user = await User.findById(userId);
    if (user) {
      return res.status(200).send({ user });
    }
  }
};

module.exports = {
  fetchUser,
  fetchUsers,
};
