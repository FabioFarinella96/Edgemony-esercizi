// ## Esercitazione
// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Creiamo una nuova pagina al nostro e-commerce che includa un form
// Questo form dovrà contenere i seguenti campi:
// title
// price
// category
// image (dove inseriremo un url ad immagine presente nel web)
// description
// aggiungiamo poi un addEventlistner al form che venga triggherato al submit. Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori

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
    categoryId: parseInt(price.value),
    images: [image.value],
  };
  console.log(newObj);
  funzionePost(newObj);
});

// Avanzato
// Inviare l'oggetto creato in precedenza ad una funzione che faccia una fetch() con il metodo POST per caricare il nuovo elemento al database
// Gestite le risposte del POST in modo da dare un feedback all'utente
// NB: ricordate di stringhificare l'oggetto con il metodo JSON.stringify()

const creationPost = (objBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
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
    .then((data) => console.log("Post pubblicato: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};
