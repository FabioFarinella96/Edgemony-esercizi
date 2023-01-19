// FORM PRODOTTI

const form = document.querySelector("#form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const image = document.querySelector("#image");
const description = document.querySelector("#description");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    title: title.value,
    price: parseInt(price.value),
    description: description.value,
    categoryId: parseInt(category.value),
    images: [image.value],
  };
  console.log(newObj);
  creationPost(newObj, "products");
});

// Esercitazione
// Lavoriamo sempre al nostro e-commerce

// Abbelliamolo il più possibile, inserendo nuovi elementi per farlo sembrare sempre più simile ad un vero e-commerce... SIATE CREATEVI!!!
// Creiamo un secondo nuovo form per l'aggiunzione tramite il metodo POST di una nuova categoria nel nostro backend.

// FORM CATEGORIE

const categoryForm = document.querySelector("#categoryForm");
const categoryName = document.querySelector("#categoryName");
const categoryImage = document.querySelector("#categoryImage");

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    name: categoryName.value,
    image: categoryImage.value,
  };
  console.log(newObj);
  creationPost(newObj, "categories");
});

const creationPost = (objBody, type) => {
  fetch("https://api.escuelajs.co/api/v1/" + type, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(objBody), // body data type must match "Content-Type" header
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${type} NON CARICATO: ` + data.message);
      } else {
        alert(`${type} CARICATO CORRETTAMENTE`);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
