const express = require("express");
const bookRoute = express.Router();
const {
  addBook,
  getBooks,
  deleteBook,
} = require("../Controller/bookController");

bookRoute.post("/books", addBook);
module.exports = bookRoute;
