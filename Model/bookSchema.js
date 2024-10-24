const mongoose = require("mongoose");

const book = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const bookSchema = mongoose.model("book", book);

module.exports = bookSchema;
