async function authDocProducao(req, res, next) {
  if (req.session.authenticated) {
    // Usuário digitou a senha certa
    return next();
  } else {
    res.redirect("/auth");
  }

  if (req.headers.host.includes("localhost") || req.originalUrl !== "/doc/") {
    // Usuário está no localhost
    return next();
  }
}

module.exports = authDocProducao;
