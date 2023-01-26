import { GET } from "./api.js";

const qS = (type) => document.querySelector(type);
const cE = (element) => document.createElement(element);

// Esercizio 1
// Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

// mostra il timer in schermo, come visto a lezione;
// che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
// la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.

const bodyEl = qS("body");
const container = cE("div");
const counterEl = cE("h2");
const boomText = cE("h1");
const buttonEl = cE("button");
const mainTitle = qS(".main-title");

container.className = "container";
counterEl.className = "counter";
boomText.className = "boom-text";
buttonEl.className = "button";

counterEl.textContent = "START";
buttonEl.textContent = "STOP";

container.append(counterEl, buttonEl);
bodyEl.append(container, boomText);

let counter = 6;

const countdown = setInterval(() => {
  if (counter === 1) {
    bodyEl.style.backgroundColor = "rgb(21, 21, 21)";
    container.remove();
    boomText.textContent = "Boom!";
    mainTitle.style.color = "white";
  } else {
    counter--;
    counterEl.textContent = counter;
  }
}, 1000);

buttonEl.addEventListener("click", () => {
  clearInterval(countdown);
});

// Avanzato
// Continuare l'esercizio avanzato della lezione di ieri 25-01-2023

const ageStatusBar = cE("div");

const ageStatusBarGen = (value, userAge) => {
  const wrapper = cE("div");
  const textEl = cE("h4");
  const statusEl = cE("div");

  wrapper.className = "age-status-bar";
  textEl.textContent = value;
  statusEl.className = "age-status-bar__status";
  statusEl.style.height = "0px";

  statusEl.style.height = `${userAge * 10}px`;

  wrapper.append(textEl, statusEl);
  return wrapper;
};

const wrapperEl = qS(".wrapper");
let firstStage, secondStage, thirdStage, fourhStage, fifthStage;
let stagesCount = [];

GET("users?limit=100")
  .then(({ users }) => {
    const userAge = users.map((user) => user.age);
    const firstStage = {
      ages: userAge.filter((age) => age <= 19),
      text: "0 - 19",
    };
    const secondStage = {
      ages: userAge.filter((age) => age <= 29 && age >= 20),
      text: "20 - 29",
    };
    const thirdStage = {
      ages: userAge.filter((age) => age <= 39 && age >= 30),
      text: "30 - 39",
    };
    const fourhStage = {
      ages: userAge.filter((age) => age <= 49 && age >= 40),
      text: "40 - 49",
    };
    const fifthStage = {
      ages: userAge.filter((age) => age <= 59 && age >= 50),
      text: "50 - 59",
    };

    stagesCount.push(
      firstStage,
      secondStage,
      thirdStage,
      fourhStage,
      fifthStage
    );
  })
  .then(() => {
    stagesCount.map((stage) =>
      wrapperEl.appendChild(ageStatusBarGen(stage.text, stage.ages.length))
    );
  });
