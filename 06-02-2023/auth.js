const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "fabio") {
    req.user = { name: "fabio" };
    next();
  } else {
    res.status(401).send(`L'utente ${user} non è autorizzato`); // --> l'errore 401 equivale al "non sei autorizzato"
  }
};

module.exports = authorize;
