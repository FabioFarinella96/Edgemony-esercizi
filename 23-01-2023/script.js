import { qS, cE, quotesCard } from "./utils.js";
import { GET, POST, DELETE, PUT } from "./api.js";

// Esercizio 1
// Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando ASYNC / AWAIT) che effettui una chiamata al seguente endpoint: https://dummyjson.com/quotes.

// Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1. Per qulunque riferimento utilizzare la documentazione presente al seguente indirizzo: https://dummyjson.com/

// Avanzate
// Sulla base dell'esercizio 1, riadattare il proprio codice al fine di prevedere anche un pulsante al cui click su di esso, venga generata una nuova quote, in modo del tutto random.

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);

const changeButton = qS(".changeButton");

changeButton.addEventListener("click", () => {
  wrapperEl.innerHTML = "";
  GET("quotes/random?rnd=" + Math.random()).then((data) => {
    wrapperEl.appendChild(quotesCard(data));
    console.log(data);
  });
});
