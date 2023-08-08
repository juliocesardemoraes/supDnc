var express = require("express");
var router = express.Router();

// Route to render the authentication form
router.get("/", (req, res) => {
  if (req.query.senhaIncorreta == "true") {
    res.status(401).send(`
        <form method="post" action="/auth/check">
          <p style="color: red;">Senha errada!</p>
          <label for="senhaDigitada">Senha da documentação:</label>
          <input type="password" name="senhaDigitada" id="senhaDigitada" />
          <button type"submit">Entrar</button>
        </form>`);
  } else {
    res.status(200).send(`
      <form method="post" action="/auth/check">
        <label for="senhaDigitada">Senha da documentação:</label>
        <input type="password" name="senhaDigitada" id="senhaDigitada" />
        <button type="submit">Entrar</button>
      </form>
    `);
  }
});

// Route to handle form submission and authenticate
router.post("/check", (req, res) => {
  const { senhaDigitada } = req.body;

  if (senhaDigitada === process.env.SWAGGER_SENHA_DOC) {
    // Authentication successful, redirect to Swagger documentation
    req.session.authenticated = true;
    res.redirect("/doc");
  } else {
    // Authentication failed, display error
    res.redirect("/auth?senhaIncorreta=true");
    res.status(401).send("Senha incorreta!");
  }
});

module.exports = router;
