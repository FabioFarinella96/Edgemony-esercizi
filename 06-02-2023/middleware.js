const express = require("express");
const logger = require("./logger");
const authorize = require("./auth");
const { books } = require("./data");

const app = express();
const PORT = 3000;

app.use(express.static("css"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/public-books", (req, res) => {
  res.send(books);
  console.log(req.user);
});

app.get("/api/books/:bookId", [logger, authorize], (req, res) => {
  console.log(req.params);
  const { bookId } = req.params;
  const searchFor = books.find((book) => book.id === Number(bookId));
  if (!searchFor) {
    res.status(404).send("The book doesn't exist");
  }
  return res.json(searchFor);
});

app.get("*", (req, res) => {
  res.status(404).send("Page does not exist");
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT} `);
});
