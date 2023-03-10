// Sulla base della lezione odierna, e utilizzando l'array di oggetti esposto alla fine di questo documento, svolgere i seguenti esercizi:

// Esercizio 1
// Eseguire sull'array riportato sotto:

// un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
// un metodo map che memorizzi in una variabile tutti gli userId di ogni singolo elemento e quindi richiamarli con un console.log a parte
// un metodo filter che stampi in console.log i soli ID di ogni singolo elemento i cui valori siano maggiori o uguali a 4

// Avanzato
// Crare una todo list personale, con logica in linea a quanto visto a lezione e applicando lo stile preferito

const todos = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4,
  },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
  },
  {
    id: 5,
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 31,
  },
  {
    id: 6,
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 39,
  },
  {
    id: 7,
    todo: "Go see a Broadway production",
    completed: false,
    userId: 32,
  },
  {
    id: 8,
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
    userId: 13,
  },
  {
    id: 9,
    todo: "Invite some friends over for a game night",
    completed: false,
    userId: 47,
  },
  {
    id: 10,
    todo: "Have a football scrimmage with some friends",
    completed: false,
    userId: 19,
  },
  {
    id: 11,
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
    userId: 39,
  },
  {
    id: 12,
    todo: "Organize pantry",
    completed: true,
    userId: 39,
  },
  {
    id: 13,
    todo: "Buy a new house decoration",
    completed: false,
    userId: 16,
  },
  {
    id: 14,
    todo: "Plan a vacation I've always wanted to take",
    completed: false,
    userId: 28,
  },
  {
    id: 15,
    todo: "Clean out car",
    completed: false,
    userId: 33,
  },
  {
    id: 16,
    todo: "Draw and color a Mandala",
    completed: true,
    userId: 24,
  },
  {
    id: 17,
    todo: "Create a cookbook with favorite recipes",
    completed: false,
    userId: 1,
  },
  {
    id: 18,
    todo: "Bake a pie with some friends",
    completed: false,
    userId: 1,
  },
  {
    id: 19,
    todo: "Create a compost pile",
    completed: true,
    userId: 5,
  },
  {
    id: 20,
    todo: "Take a hike at a local park",
    completed: true,
    userId: 43,
  },
  {
    id: 21,
    todo: "Take a class at local community center that interests you",
    completed: false,
    userId: 22,
  },
  {
    id: 22,
    todo: "Research a topic interested in",
    completed: false,
    userId: 4,
  },
  {
    id: 23,
    todo: "Plan a trip to another country",
    completed: true,
    userId: 37,
  },
  {
    id: 24,
    todo: "Improve touch typing",
    completed: false,
    userId: 45,
  },
  {
    id: 25,
    todo: "Learn Express.js",
    completed: false,
    userId: 49,
  },
  {
    id: 26,
    todo: "Learn calligraphy",
    completed: false,
    userId: 50,
  },
  {
    id: 27,
    todo: "Have a photo session with some friends",
    completed: false,
    userId: 14,
  },
  {
    id: 28,
    todo: "Go to the gym",
    completed: false,
    userId: 15,
  },
  {
    id: 29,
    todo: "Make own LEGO creation",
    completed: false,
    userId: 30,
  },
  {
    id: 30,
    todo: "Take cat on a walk",
    completed: false,
    userId: 15,
  },
];

// Stampo in console.log i soli ID di ogni singolo elemento

todos.forEach((element) => console.log(element.id));

// Stampo in console.log tutti gli userID di ogni singolo elemento

const userIds = todos.map((element) => element.userId);

console.log(userIds);

// Stampo in console.log solo gli ID di ogni singolo elemento i cui valori sono maggiori o uguali a 4

const majorsId = todos
  .filter((element) => element.id >= 4)
  .map((element) => element.id);

console.log(majorsId);

// TODO LIST

const personalToDoList = [
  {
    id: 1,
    description: "Alzarsi la mattina",
  },
  {
    id: 2,
    description: "Fare colazione",
  },
  {
    id: 3,
    description: "Partecipare alla lezione di Edgemony",
  },
  {
    id: 4,
    description: "Studiare durante il pomeriggio",
  },
  {
    id: 5,
    description: "Andare a letto presto la sera",
  },
  {
    id: 6,
    description: "Repeat.",
  },
];

function toDoListGenerate(description) {
  const bodyEl = document.body;
  const container = document.createElement("div");
  const textEl = document.createElement("p");
  const checkEl = document.createElement("div");

  textEl.textContent = description;
  textEl.style.color = "white";

  container.className = "container";
  textEl.className = "text";
  checkEl.className = "checkEl";

  container.append(textEl, checkEl);
  bodyEl.appendChild(container);

  checkEl.addEventListener("click", () => {
    checkEl.classList.toggle("checkedEl");
  });
}

personalToDoList.forEach((element) => toDoListGenerate(element.description));
