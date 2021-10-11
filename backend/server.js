const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
console.log("__dirname", __dirname);
require("dotenv").config({ path: __dirname + "/.env" });

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

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));
