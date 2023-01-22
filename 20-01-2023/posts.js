const addProduct = (objBody, type) => {
  fetch(`https://api.escuelajs.co/api/v1/` + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          `${type} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
        );
      } else {
        alert(`${type} CARICATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};

// form per aggiungere prodotti (metodo POST)

const form = document.querySelector("#addProduct");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const category = document.querySelector("#categoryId");
const image = document.querySelector("#image");

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
  addProduct(newObj, "products");
});

// form per aggiungere categoria (metodo POST)

const categoriesForm = document.querySelector("#addCategories");
const categoryName = document.querySelector("#categoryName");
const categoryImage = document.querySelector("#categoryImage");

categoriesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    name: categoryName.value,
    image: categoryImage.value,
  };

  console.log(newObj);
  addProduct(newObj, "categories");
});

// form per rimuovere prodotto

const deletePost = (callType, idProduct) => {
  fetch(`https://api.escuelajs.co/api/v1/` + callType + `/` + idProduct, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${callType} NON è STATO RIMOSSO: ` + data.message);
      } else {
        alert(`${callType} RIMOSSO CORRETTAMENTE`);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};

const deleteForm = document.querySelector("#deleteProduct");
const productId = document.querySelector("#productId");

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target[0].value);

  deletePost("products", productId.value);
});
