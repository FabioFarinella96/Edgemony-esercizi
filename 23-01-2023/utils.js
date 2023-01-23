const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

// const productCard = (data) => {
//   const wrapperEl = cE("div");
//   const imageEl = cE("img");
//   const textWrapperEl = cE("div");
//   const titleEl = cE("h3");
//   const descriptionEl = cE("p");
//   const priceEl = cE("span");
//   const stockEl = cE("span");

//   wrapperEl.className = "product-card";
//   imageEl.setAttribute("src", data.thumbnail);
//   imageEl.setAttribute("alt", data.title);
//   textWrapperEl.className = "product-card__text";
//   titleEl.textContent = data.title;
//   descriptionEl.textContent = data.description;
//   priceEl.textContent = data.price;
//   stockEl.textContent = data.stock;

//   textWrapperEl.append(titleEl, descriptionEl, priceEl, stockEl);
//   wrapperEl.append(imageEl, textWrapperEl);
//   return wrapperEl;
// };

const quotesCard = (data) => {
  const wrapperEl = cE("div");
  const quoteCard = cE("div");
  const quoteEl = cE("p");
  const quoteAuthor = cE("p");

  wrapperEl.className = "wrapper";
  quoteCard.className = "quote-card";
  quoteEl.className = "quote";
  quoteAuthor.className = "quote-author";

  quoteEl.textContent = data.quote;
  quoteAuthor.textContent = data.author;

  quoteCard.append(quoteEl, quoteAuthor);
  wrapperEl.append(quoteCard);
  return quoteCard;
};

export { cE, qS, quotesCard };
