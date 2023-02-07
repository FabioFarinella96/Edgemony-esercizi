const express = require("express");
const users = require("./users.json");
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.post("/api/users", (req, res) => {
  const { id, name, username, email, street, city } = req.body;

  return res.status(200).json({
    success: true,
    user: { id: id, name: name, username: username, email: email },
    address: { street: street, city: city },
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
