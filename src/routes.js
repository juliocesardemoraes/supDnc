function routes(app) {
  app.use("/users", require("./routes/users"));
  app.use("/auth", require("./routes/auth"));

  return;
}

module.exports = routes;
