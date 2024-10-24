const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const userRoute = require("./Route/userRoute");
const bookRoute = require("./Route/bookRoute");
app.use(express.json());

app.use("/api", userRoute);
app.use("/api", bookRoute);

mongoose
  .connect("mongodb://localhost:27017/BookReview")
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log("Can't connect to mongoDB", err);
  });

app.listen("8040", () => {
  console.log("The server is running on port 8040");
});
