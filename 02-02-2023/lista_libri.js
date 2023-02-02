const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    let html = fs.readFileSync("home-page.html");
    res.end(html);
  } else if (req.url === "/api/books-api") {
    res.writeHead(200, { "Content-type": "text/plain" }); // tipo di contenuto: text/plain, text/html, application/json
    let booksApi = fs.readFileSync("booksAPI.json");
    res.end(booksApi);
  } else if (req.url === "/chi-sono") {
    let html2 = fs.readFileSync("chi-sono.html");
    res.end(html2);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(8181);

console.log("Server attivo");
