const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./src/books/book.route");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main()
  .then(() => console.log("Mongo DB connected successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
