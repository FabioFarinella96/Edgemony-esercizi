fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => data.forEach((element) => cardGenerator(element)));

const cart = [];

const cardGenerator = (data) => {
  const bodyEl = document.body;
  const container = document.querySelector(".container");
  const tendinaEl = document.querySelector(".tendina");
  const hamburgerEl = document.querySelector(".hamburger");
  const cardEl = document.createElement("div");
  const titleEl = document.createElement("p");
  const descriptionEl = document.createElement("p");
  const imageEl = document.createElement("img");
  const buttonEl = document.createElement("button");

  cardEl.className = "card";
  titleEl.className = "card__title";
  descriptionEl.className = "card__description";
  imageEl.className = "card__image";
  buttonEl.className = "card__button";

  // con il metodo substr(), partendo dal primo carattere,
  // ne ritorna 10 per il titolo e 30 per la descrizione

  titleEl.textContent = data.title.substr(0, 10);
  descriptionEl.textContent = data.description.substr(0, 30);
  imageEl.setAttribute("src", data.images);
  buttonEl.textContent = "Aggiungi al carrello";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  container.append(cardEl);
  bodyEl.appendChild(container);

  // EVENTI

  hamburgerEl.addEventListener("click", () => {
    tendinaEl.classList.toggle("show");
  });

  buttonEl.addEventListener("click", () => {
    cart.push(data);
    cartCreation();
    console.log(cart);
  });

  // CARRELLO
  const cartCreation = () => {
    tendinaEl.innerHTML = "";
    cart.forEach((item) => {
      const cartEl = document.createElement("div");
      cartEl.className = "cartEl";
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.textContent = "X";
      cartEl.innerHTML = `<p>${item.title}</p><p>${item.price}</p>`;
      cartEl.append(deleteBtn);
      tendinaEl.appendChild(cartEl);

      deleteBtn.addEventListener("click", () => {
        cartEl.remove();
      });
    });
  };
};
