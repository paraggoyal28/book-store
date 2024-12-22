const Book = require("./book.model");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book saved successfully!", book: newBook });
  } catch (error) {
    console.error("Error creating book: ", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Books fetched successfully!", books });
  } catch (error) {
    console.log("Error fetching book: ", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).send({ message: "Book fetched successfully!", book });
  } catch (error) {
    console.log("Error fetching book: ", error);
    res.status(500).send({ message: "Failed to fetch book" });
  }
};

module.exports = { postABook, getAllBooks, getSingleBook };
