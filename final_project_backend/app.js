const express = require("express");
const cors = require('cors')
const cliArgs = require("./appSetup.js");
const authEndpoint = require("./routes/auth.js");
const middlewares = require("./middlewares");
const { checkSchema } = require("express-validator")
const validators = require("./validators");

const app = express();
require('./swagger')(app)

// App config
var corsOptions = {
  origin: '*', // TODO: Cambiar los orígenes permitidos
  optionsSuccessStatus: 200,
}

// Built-in middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors(corsOptions))


// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/auth", middlewares.jwtProtected, authEndpoint.checkUser);
app.post("/auth/login", checkSchema(validators.loginValidator()), authEndpoint.login);
app.post("/auth/register", checkSchema(validators.loginValidator()), authEndpoint.register);
app.post("/auth/recover", checkSchema(validators.emailValidation()), authEndpoint.recoverEmail);
app.use(middlewares.notFound);

// Server
const server = app.listen(cliArgs.port, cliArgs.bind, () => {
  console.log(
    `Running backend service over http://${cliArgs.bind}:${cliArgs.port} -- ${process.env.ENV} mode`
  );
});
server.timeout = parseInt(process.env.REQ_TIMEOUT_SECS) * 1000;
