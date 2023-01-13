import { cE, qS } from "./utils.js";

// Esercizio 1
// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato,
// seguendo le logiche viste durante la lezione. Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

const imgCarousel = qS(".img__carousel");
const firstButton = qS(".imgChanger1");
const secondButton = qS(".imgChanger2");
const thirdButton = qS(".imgChanger3");

const images = ["img/img1.jpg?1", "img/img2.jpg?2", "img/img3.jpg?3"];

firstButton.addEventListener("click", () => {
  firstButton.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  secondButton.style = "none";
  thirdButton.style = "none";
  imgCarousel.style.backgroundImage = `url(${images[0]})`;
});

secondButton.addEventListener("click", () => {
  secondButton.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  firstButton.style = "none";
  thirdButton.style = "none";
  imgCarousel.style.backgroundImage = `url(${images[1]})`;
});

thirdButton.addEventListener("click", () => {
  thirdButton.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  firstButton.style = "none";
  secondButton.style = "none";
  imgCarousel.style.backgroundImage = `url(${images[2]})`;
});

// Avanzato
// Creare il template dello slider cui sopra completamente dinamico (via Javascript).

const bodyEl = document.body;
const containerEl = cE("div");
const imageEl = cE("div");
const buttonsEl = cE("div");
const button1 = cE("div");
const button2 = cE("div");
const button3 = cE("div");

containerEl.className = "containerEl";
imageEl.className = "imageEl";
buttonsEl.className = "buttonsEl";
button1.className = "button1";
button2.className = "button2";
button3.className = "button3";

buttonsEl.append(button1, button2, button3);
containerEl.append(imageEl, buttonsEl);
bodyEl.append(containerEl);

button1.addEventListener("click", () => {
  button1.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  imageEl.style.backgroundImage = `url(${images[0]})`;
  button2.style = "none";
  button3.style = "none";
});

button2.addEventListener("click", () => {
  button2.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  imageEl.style.backgroundImage = `url(${images[1]})`;
  button1.style = "none";
  button3.style = "none";
});

button3.addEventListener("click", () => {
  button3.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  imageEl.style.backgroundImage = `url(${images[2]})`;
  button1.style = "none";
  button2.style = "none";
});
