fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    const newData = data.filter((item) => item.category.id === 1);
    newData.forEach((element) => {
      postGenerator(element);
      console.log(element);
    });
  })
  .catch((e) => console.log("Questo è il mio errore: ", e));

//   main (cards)
const postGenerator = (item) => {
  const bodyEl = document.body;
  const containerEl = document.querySelector(".container");
  const postEl = document.createElement("div");
  const titleEl = document.createElement("p");
  const descriptionEl = document.createElement("p");
  const priceEl = document.createElement("p");
  const buttonEl = document.createElement("button");
  const imageEl = document.createElement("img");

  containerEl.className = "container";
  postEl.className = "post";
  titleEl.className = "postTitle";
  descriptionEl.className = "postDescription";
  priceEl.className = "postPrice";
  buttonEl.className = "postButton";
  imageEl.className = "postImage";

  titleEl.textContent = item.title.substr(0, 10);
  descriptionEl.textContent = item.description.substr(0, 30);
  priceEl.textContent = `€ ${item.price}`;
  buttonEl.textContent = "Add to cart";
  imageEl.setAttribute("src", item.images);

  postEl.append(imageEl, titleEl, descriptionEl, priceEl, buttonEl);
  containerEl.append(postEl);
  bodyEl.appendChild(containerEl);

  // carrello
  const cart = [];

  buttonEl.addEventListener("click", () => {
    cart.push(item);
    cartCreation();
    console.log(data);
  });

  // tendina
  const carrello = document.querySelector(".cartButton");
  const tendinaEl = document.querySelector(".tendina");

  carrello.addEventListener("click", () => {
    tendinaEl.classList.toggle("showTendina");
  });

  const cartCreation = () => {
    tendinaEl.innerHTML = "";

    cart.forEach((item, index) => {
      const cartEl = document.createElement("div");
      cartEl.className = "cartEl";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.textContent = "X";

      cartEl.innerHTML = `<p>${item.title}</p><p>${item.price}</p>`;

      deleteBtn.addEventListener("click", () => {
        cartEl.remove();
        cart.splice(index, 1);
      });

      cartEl.append(deleteBtn);
      tendinaEl.appendChild(cartEl);
    });
  };
};
