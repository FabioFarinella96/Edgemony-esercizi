// Esercizio 1
// Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript. Devo essere presenti i seguenti elementi:

// Image di sfondo
// Un titolo principale
// Un sottotitolo descrittivo breve

import { products } from "./mocks.js";

const heroSection = (title, subtitle) => {
  const bodyEl = document.body;
  const heroEl = document.createElement("section");
  const heroTitle = document.createElement("h1");
  const heroSubTitle = document.createElement("p");
  const heroImg = document.createElement("img");

  heroEl.className = "hero";

  heroTitle.className = "hero__title";
  heroTitle.textContent = title;

  heroSubTitle.className = "hero__subTitle";
  heroSubTitle.textContent = subtitle;

  heroImg.className = "hero__img";

  heroEl.appendChild(heroImg);
  heroEl.appendChild(heroTitle);
  heroEl.appendChild(heroSubTitle);

  bodyEl.appendChild(heroEl);
};

heroSection("Prodotti per te", "Scopri tutti i nostri prodotti");

// Avanzato
// Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e aggiunga anche una sezione relativa a dei prodotti
// (simile a quanto visto a lezione), attenzione a creare un contenitore che inglobi tutti i singoli prodotti (qualcosa simile a productListEl).

const createCard = (title, img, description) => {
  const bodyEl = document.body;
  const cardEl = document.createElement("div");
  const titleEl = document.createElement("h2");
  const imgEl = document.createElement("img");
  const descriptionEl = document.createElement("p");

  cardEl.className = "card";

  titleEl.className = "card__title";
  titleEl.textContent = title;

  imgEl.className = "card__img";
  imgEl.setAttribute("src", img);
  imgEl.setAttribute("alt", title);

  descriptionEl.className = "card__description";
  descriptionEl.textContent = description;

  cardEl.append(titleEl, imgEl, descriptionEl);
  bodyEl.appendChild(cardEl);
};

for (let product of products) {
  createCard(product.title, product.img, product.description);
}
