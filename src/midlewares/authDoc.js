async function authDocProducao(req, res, next) {
  if (req.session.authenticated) {
    return next();
  } else {
    res.redirect("/auth");
  }

  // if (req.headers.host.includes("localhost") || req.originalUrl !== "/doc/") {
  //   return next();
  // }
}

module.exports = authDocProducao;
