const http = require("http");
const booksApi = require("./lista-libri");

//creo il server e imposto l'applicativo con il tipo di risorse da gestire
let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(booksApi));
});

// provo a passare le impostazioni di server tramite una funzione di callback che richiamo nel metodo listen()
const callback = () => {
  const address = server.address().address; // 127.0.0.1 => indirizzo di localhost
  const port = server.address().port;
  console.log(`Server in ascolto su http://${address}:${port}`);
};

server.listen(8000, "localhost", callback);

// leggo il json
console.log(booksApi);
