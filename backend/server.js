const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to Mongoose")
);

app.use(express.json());
app.use(cors())

const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const { auth } = require("./middlewares/auth.middleware");

app.use("/api/auth", authRoutes);
app.use("/api/users", [auth], userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("listening on port " + PORT));
