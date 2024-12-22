const express = require("express");
const router = express.Router();
const { postABook, getAllBooks } = require("./book.controller");

// frontend -> backend server -> controller -> book schema -> database ->
// send data to the server -> back to the frontend

// post a book
router.post("/", postABook);

// get all books
router.get("/", getAllBooks);

// get single book
router.get("/:id", getSingleBook);

module.exports = router;
