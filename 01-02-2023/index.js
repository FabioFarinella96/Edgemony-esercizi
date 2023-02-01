const http = require("http");
const fs = require("fs");

let paginaArticoli = `<!doctype html>
<html>
<head>
</head>
<body>
  <h1>Questa è la pagina articoli</p>
</body>
</html>`;

let paginaCommenti = `<!doctype html>
<html>
<head>
</head>
<body>
  <h1>Questa è la pagina commenti</p>
</body>
</html>`;

let paginaUtenti = `<!doctype html>
<html>
<head>
</head>
<body>
  <h1>Questa è la pagina utenti</p>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Questa è la homePage");
  } else if (req.url === "/commenti") {
    res.end(paginaCommenti);
  } else if (req.url === "/utenti") {
    res.end(paginaUtenti);
  } else if (req.url === "/articoli") {
    res.end(paginaArticoli);
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3001);
