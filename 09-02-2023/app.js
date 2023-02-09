const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = 4000;

const myPreferences = { pet: "dog", color: "green", season: "summer" };

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home", {
    nome: "Fabio",
    titolo: "My own web site",
    ...myPreferences,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    nome: "Fabio",
    titolo: "About",
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
