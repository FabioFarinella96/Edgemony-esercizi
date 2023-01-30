// ESERCIZIO LEZIONE 1 NODE.JS
// Ciao ragazzi, allora eccoci col primo esercizio.
// Crea un progetto Node.js con un file chiamato app.js
// Crea un server che risponde alla porta 3000
// Crea 3 percorsi: pagina iniziale, studenti, corsi
// Nell’output puoi scrivere quello che vuoi
// Prova lo script ed esegui correttamente con il comando nel terminale
// Indica quali sono i percorsi che scriverai nella barra di ricerca del browser per raggiungere le tue pagine

const http = require("http");

const server = http.createServer((req, res) => {
  // richiesta
  if (req.url === "/pagina-iniziale") {
    res.end("Home"); // risposta che voglio indicare
  } else if (req.url === "/studenti") {
    res.end("Students"); // risposta che voglio indicare
  } else if (req.url === "/corsi") {
    res.end("Courses"); // risposta che voglio indicare
  } else {
    // 404 => codice di errore per una risora non trovata
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

// esempi di porte che posso utilizzare:  80 / 8000 / 8080 / 3000 / 3001 / 5000 / 5001
server.listen(3000);

console.log(server);

// I percorsi che bisognerà scrivere nella barra di ricerca del browser sono: localhost:3000/pagina-iniziale o studenti o corsi
