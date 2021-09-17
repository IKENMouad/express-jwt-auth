const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to Mongoose")
);

app.use(bodyParser.json());

const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("listening on port " + PORT));
