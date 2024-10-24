const bookSchema = require("../Model/bookSchema");

const addBook = async (req, res) => {
  try {
    const { title, author, genre, description } = req.body;

    const bookAdd = new bookSchema({
      title: title,
      author: author,
      genre: genre,
      description: description,
    });
    const newBook = await bookAdd.save();

    res.status(200).json({ msg: "You have added a book", newBook });
  } catch (err) {
    console.log(err);
    res.json({ msg: "Server Error" });
  }
};

const getBooks = () => {};

const deleteBook = () => {};

module.exports = { addBook, getBooks, deleteBook };
