const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = { customCssUrl: "/swagger-ui.css" };
const routes = require("./src/routes");
const authDocProducao = require("./src/midlewares/authDoc");
const session = require("cookie-session");
const app = express();
require("dotenv").config();

// configuração express
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Use sessions to track authenticated users
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

const swaggerFile = require("./swagger/swagger_output.json");

// app.get("/", (req, res) => {
//   res.redirect("/auth");
// });

app.use(
  "/doc",
  authDocProducao,
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, swaggerOptions)
);

// restante das rotas
routes(app);

// inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

module.exports = app;
