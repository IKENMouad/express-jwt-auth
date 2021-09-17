const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    stories: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Story",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
