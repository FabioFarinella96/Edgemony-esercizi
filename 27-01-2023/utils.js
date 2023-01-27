const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGenerator = (data) => {
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");

  cardEl.className = "card";
  titleEl.className = "title";

  imageEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`
  );
  imageEl.setAttribute("alt", data.name);

  titleEl.textContent = data.name;

  cardEl.append(imageEl, titleEl);

  return cardEl;
};

export { cE, qS, cardGenerator };
