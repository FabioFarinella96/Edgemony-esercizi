const express = require("express");

// creo l'applicazione col supporto di Express
const app = express();
const PORT = 8080;

// uso il metodo static che è il middleware per la gestione delle risorse statiche
// use() introduce l'uso dei middleware
app.use(express.static("public"));

//routing base
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/assets/index.html");
});

app.get("/code-hobby", (req, res) => {
  res.sendFile(__dirname + "/public/assets/codeHobby.html");
});

app.get("/guitar-hobby", (req, res) => {
  res.sendFile(__dirname + "/public/assets/guitarHobby.html");
});

app.get("/videogames-hobby", (req, res) => {
  res.sendFile(__dirname + "/public/assets/gamesHobby.html");
});

app.get("*", (req, res) => {
  res.send("404 | pagina non trovata");
});

// metto in ascolto il server
app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
