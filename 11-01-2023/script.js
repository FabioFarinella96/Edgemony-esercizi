// ESERCIZIO 1
// Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere,
// come immagini, testo o titoli, indispensabile pero aggiungere un button con una X come testo.

// Aggiungere un evento al cui click del mouse sulla class intera: Cambi il colore del testo di tutta la card

// ---------------------------------

// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - Elimini la card stessa

// change color

function titleColorChange() {
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");

  title.style.color = "blue";
  subtitle.style.color = "blue";
}

const changeColor = document
  .querySelector(".card")
  .addEventListener("click", titleColorChange);

// delete card button

function deleteCardButton() {
  const section = document.querySelector(".card");

  section.style.display = "none";
}

const deleteCard = document
  .querySelector(".button")
  .addEventListener("click", deleteCardButton);

// -------------------------->>-----<<----------------------------

// ESERCIZIO 2
// Completare la funzione quoteGen al fine di avere delle quotes che mostrino tanto il testo che l'autore del testo stesso.

const quotes = [
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 2,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    id: 3,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    id: 4,
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    id: 5,
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    id: 6,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },

  {
    id: 8,
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    id: 9,
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    id: 10,
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    id: 11,
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    id: 12,
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 13,
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },

  {
    id: 15,
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  {
    id: 16,
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    id: 17,
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    id: 18,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 19,
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    id: 20,
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
];

// Ho aggiunto due oggetti a quotes
quotes.push(
  {
    quote: "Life is beautiful",
    author: "Fabio Farinella",
  },
  {
    quote: "Lasciate ogni speranza o voi ch'entrate",
    author: "Dante Alighieri",
  }
);

function quoteGen(quote, author) {
  const bodyEl = document.body;
  const quoteSection = document.createElement("section");
  const quoteEl = document.createElement("p");
  const quoteAuthor = document.createElement("em");

  quoteSection.className = "quoteSection";
  quoteEl.className = "quoteEl";
  quoteAuthor.className = "quoteAuthor";

  quoteEl.textContent = quote;
  quoteAuthor.textContent = author;

  quoteEl.style.color = "white";
  quoteAuthor.style.color = "white";

  quoteSection.append(quoteEl, quoteAuthor);
  bodyEl.append(quoteSection);

  quoteSection.addEventListener("mouseover", () => {
    quoteEl.style.color = "black";
    quoteAuthor.style.color = "black";
  });

  quoteSection.addEventListener("mouseout", () => {
    quoteEl.style.color = "white";
    quoteAuthor.style.color = "white";
  });
}

quotes.forEach((element) => quoteGen(element.quote, element.author));
