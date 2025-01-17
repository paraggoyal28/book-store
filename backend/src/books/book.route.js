const express = require("express");
const router = express.Router();
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

// frontend -> backend server -> controller -> book schema -> database ->
// send data to the server -> back to the frontend

// post a book
router.post("/", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// get single book
router.get("/:id", getSingleBook);

// update book
router.put("/:id", verifyAdminToken, updateBook);

// delete a book
router.delete("/:id", verifyAdminToken, deleteBook);
module.exports = router;
