const app = require("../index.js");
app.get("/", (req, res) => {
  res.redirect("/auth");
});
module.exports = app;
