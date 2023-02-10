const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = 8080;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

// routing

app.get("/", (req, res) => {
  res.render("index", {
    homePage: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    about: "About page",
  });
});

app.get("/formazione", (req, res) => {
  res.render("formazione", {
    formazione: "Formazione",
  });
});

app.get("/web-design", (req, res) => {
  res.render("web-design", {
    webDesign: "Web-design",
  });
});

app.get("/contatti", (req, res) => {
  res.render("contatti", {
    contatti: "Contatti",
  });
});

app.get("*", (req, res) => {
  res.status(404).render("404", {
    error: "404 | Page not found",
  });
});

// porta
app.listen(PORT, (req, res) => {
  console.log(`Server attivo su ${PORT}`);
});
