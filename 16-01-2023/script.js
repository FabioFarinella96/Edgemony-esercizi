// Esercitazione
// Seguendo quello fatto oggi a lezione effettuate una chiamate fetch() alla seguente API web: https://api.escuelajs.co/api/v1/products
// e stampate in console nome e descrizione del prodotto simile a questo formato

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => dataManipulation(data));

const dataManipulation = (data) => {
  data.forEach((element) => {
    console.log(element.title);
    console.log(element.description);
  });
};

// Avanzato
// Crea delle card il più verosimili possibile ad un vero e-commerce
//  e provate ad utilizzare un loader (puo anche essere un semplice messaggio) e la gestione degli errori

const products = [
  {
    id: 1,
    title: "T-shirt",
    description: "La t-shirt ideale per l'estate",
    price: 29.99,
    image: "img/t-shirt.jpg",
  },
  {
    id: 2,
    title: "Hoodie",
    description: "La felpa ideale per il prossimo inverno",
    price: 29.99,
    image: "img/hoodie.jpg",
  },
  {
    id: 3,
    title: "Shoes",
    description: "Le scarpe ideali per correre",
    price: 29.99,
    image: "img/shoes.jpg",
  },
];

function cardsGenerator(title, description, price, image) {
  const bodyEl = document.body;
  const cardEl = document.createElement("div");
  const titleEl = document.createElement("p");
  const descriptionEl = document.createElement("p");
  const priceEl = document.createElement("p");
  const imageEl = document.createElement("img");
  const buttonEl = document.createElement("button");

  cardEl.className = "card";
  titleEl.className = "title";
  descriptionEl.className = "description";
  priceEl.className = "price";
  imageEl.className = "image";

  titleEl.textContent = title;
  descriptionEl.textContent = description;
  priceEl.textContent = price;
  imageEl.setAttribute("src", image);
  buttonEl.textContent = "Acquista ora";

  cardEl.append(titleEl, descriptionEl, priceEl, imageEl, buttonEl);
  bodyEl.appendChild(cardEl);
}

products.forEach((element) =>
  cardsGenerator(
    element.title,
    element.description,
    element.price,
    element.image
  )
);
