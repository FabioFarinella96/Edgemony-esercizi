import mockJson from "./mock.json" assert { type: "json" };
import graphicMock from "./graphicMock.json" assert { type: "json" };

// Esercizio 1
// Sulla base della lezione del giorno, creare un mock in formato JSON.
// Riprendere uno degli esercizi passati (es. generatore di una card prodotto),
// eliminare eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare i dati.

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const bodyEl = qS("body");
const mockContainer = cE("div");
mockContainer.className = "mockContainer";
const graphicContainer = cE("div");
graphicContainer.className = "graphicContainer";
bodyEl.append(mockContainer, graphicContainer);

const productGenerator = (mockJson) => {
  const cardEl = cE("div");
  const titleEl = cE("h2");
  const descriptionEl = cE("p");
  const priceEl = cE("p");
  const brandEl = cE("p");
  const imageEl = cE("img");

  cardEl.className = "card";
  titleEl.className = "title";
  descriptionEl.className = "description";
  priceEl.className = "price";
  brandEl.className = "brand";
  imageEl.className = "image";

  titleEl.textContent = mockJson.title;
  descriptionEl.textContent = mockJson.description;
  priceEl.textContent = `€ ${mockJson.brand}`;
  brandEl.textContent = mockJson.brand;

  brandEl.style.fontWeight = "bold";

  imageEl.setAttribute("src", mockJson.image);
  imageEl.setAttribute("alt", mockJson.title);

  cardEl.append(titleEl, descriptionEl, priceEl, brandEl, imageEl);
  mockContainer.append(cardEl);
  return cardEl;
};

mockContainer.appendChild(productGenerator(mockJson));

// Avanzato
// Creare un grafico a piacere basato su una api a scelta oppure su un mock costruito ad hoc.

// Non sono riuscito ad andare avanti, mi sono bloccato

const graphicGenerator = (graphicMock) => {
  const graphic = cE("div");
  const maletext = cE("h3");
  const femaletext = cE("h3");
  const rangeEl = cE("div");

  graphic.className = "graphic";
  maletext.className = "maleText";
  femaletext.className = "femaletext";
  rangeEl.className = "rangeEl";

  let maleCount = 0;
  let femaleCount = 0;
  for (let i = 0; i < graphicMock.length; i++) {
    if (graphicMock[i].users.gender === "male") {
      maleCount++;
    } else if (graphicMock[i].users.gender === "female") {
      femaleCount++;
    }
  }

  let malePercentage = (maleCount / graphicMock.length) * 100;
  let femalePercentage = (femaleCount / graphicMock.length) * 100;

  maletext.textContent = malePercentage;
  femaletext.textContent = femalePercentage;

  graphic.append(maletext, femaletext, rangeEl);
  return graphic;
};

graphicMock.users.map((user) =>
  graphicContainer.appendChild(graphicGenerator(user))
);
