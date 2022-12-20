// Esercizio 1
// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto,
// e aggiungere al suo interno dieci elementi di tipo string a scelta,
// rispettando i seguenti punti:

// utilizzare il ciclo for classico

// sarà l'utente ad inserire queste stringhe (prompt)

// alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

let artists = [];

for (let i = 0; i < 10; i++) {
  artists.push(prompt("Inserisci i tuoi 10 artisti preferiti"));
}

console.log(artists);

// AVANZATO

// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (for in e for of)

for (let artIndex in artists) {
  console.log(artIndex);
}

for (let artValue of artists) {
  console.log(artValue);
}
