import { GET } from "./api.js";
import { cE, qS, cardGenerator } from "./utils.js";

// Esercizio 1
// Sulla base dell'esercizio del giorno:

// Creare un account su https://developers.themoviedb.org/
// Ottenere una API KEY
// creare una pagina web che effettui anche una sola chiamata GET stavolta per renderizzare una lista di serie tv,
// esempio popular o top rated o entrambe, e visaulizzare a schermo con uno stile a piacere.

const mostPopularEl = qS(".most_popular");
const topRatedEl = qS(".top_rated");

GET("tv", "top_rated").then((data) =>
  data.results.map((tv) => mostPopularEl.appendChild(cardGenerator(tv)))
);

GET("tv", "popular").then((data) =>
  data.results.map((tv) => topRatedEl.appendChild(cardGenerator(tv)))
);
