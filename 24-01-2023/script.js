import { cE, qS, usersCard } from "./utils.js";
import { GET, POST } from "./api.js";

const onPostsDelete = () => {
  const usersEls = document.querySelectorAll(".userCard");

  usersEls.forEach((post) => post.remove());
};

const bodyEl = qS("body");

const searchInputEl = qS("#input");
let searchName = "";

searchInputEl.addEventListener("input", (e) => {
  onPostsDelete();
  searchName = e.target.value;

  GET("users").then((data) =>
    data.users.map((user) => {
      if (user.firstName.includes(searchName))
        bodyEl.appendChild(usersCard(user));
    })
  );
});

GET("users").then((data) =>
  data.users.map((user) => bodyEl.appendChild(usersCard(user)))
);
