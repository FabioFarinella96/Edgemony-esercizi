const express = require("express");
const hbs = require("hbs");
const session = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "la mia sessione" }));

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

// login

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(`${req.body.name} ${req.body.password}`);

  if (!req.body.name || !req.body.password) {
    res.status(404);
    res.render("login", { message: "*Compila tutti i campi" });
  } else {
    let name = "Fabio";
    let password = "fabio96";
    let userAuth = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

// funzione di controllo per proteggere la pagina privata dall'esterno

const check = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
};

// private page

app.get("/private", check, (req, res) => {
  res.render("private");
});

// warning page

app.get("/warning", (req, res) => {
  res.render("warning");
});

// logout

app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
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
