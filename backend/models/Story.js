const mongoose = require("mongoose");
var storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, 
    },
    description: {
      type: String,
      required: true, 
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storySchema);
