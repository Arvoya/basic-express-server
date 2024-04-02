const express = require("express");
const cors = require("cors");
const validatePerson = require("../src/middleware/validator.js");
const logger = require("../src/middleware/logger.js");
const notFound = require("../src/error-handlers/404.js");
const serverError = require("../src/error-handlers/500.js");

const app = express();

app.use(cors());
app.use(logger);

app.get("/person/:name", validatePerson, (req, res) => {
  res.json({ name: req.params.name });
});

app.use(serverError);
app.use(notFound);

module.exports = app;
