// Ciao @qui
// vi allego lo starter da cui partirete per l'esercizio di oggi.
// Implementate l'applicazione con i percorsi per mostrare 2 pagine html, per esempio,
// una pagina prodotti e una pagina cliente, oltre alla home page che è già impostata.
// Fate attenzione a cosa vi servirà per mostrare e poi integrare le due pagine esterne.

const http = require("http");
const os = require("os");

const fs = require("fs");

const productsPage = fs.readFileSync("productsPage.html");
const usersPage = fs.readFileSync("usersPage.html");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(messaggio);
  } else if (req.url === "/products") {
    res.end(productsPage);
  } else if (req.url === "/users") {
    res.end(usersPage);
  } else {
    res.writeHead(404);
    res.end("Sorry, page not found");
  }
});

server.listen(3001);
