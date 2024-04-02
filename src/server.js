const express = require("express");
const cors = require("cors");
const validatePerson = require("../src/middleware/validator.js");
const logger = require("../src/middleware/logger.js");

const app = express();

app.use(cors());
app.use(logger);

app.get("/person:name", validatePerson, (req, res) => {
  res.json({ name: req.params.name });
});

module.exports = app;
