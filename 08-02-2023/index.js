const express = require("express");
const jsonFile = require("./articoli");
const app = express();
const PORT = 8080;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// metodi http

app.get("/api/articoli", (req, res) => {
  res.status(200).json({ success: true, data: jsonFile });
});

// metodo post
app.post("/api/articoli/new", (req, res) => {
  const { id, title } = req.body;

  if (!id || !title) {
    res.status(404).json({ success: false, msg: "Non trovo i dati necessari" });
  }

  res
    .status(200)
    .json({ success: true, article: [...jsonFile, { id: id, title: title }] });
});

// metodo put
app.put("/api/articoli/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const article = jsonFile.find((article) => article.id === Number(id));

  if (!article) {
    res
      .status(400)
      .json({ success: false, msg: `non esiste un dato con id ${id}` });
  }

  const newArticle = jsonFile.map((article) => {
    if (article.id === Number(id)) {
      article.title = title;
    }
    return article;
  });
  res.status(200).json({ success: true, data: newArticle });
});

// metodo delete
app.delete("/api/articoli/:id", (req, res) => {
  const article = jsonFile.find(
    (article) => article.id === Number(req.params.id)
  );

  if (!article) {
    res.status(400).json({
      success: false,
      msg: `non esiste un dato con id ${req.params.id}`,
    });
  }

  const newArticle = jsonFile.filter(
    (article) => article.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newArticle });
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});

// /login

app.post("/login", (req, res) => {
  const { name } = req.body;
  res.status(200).send(`Benvenuto/a ${name}`);
});
