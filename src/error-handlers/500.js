function serverError(err, req, res, next) {
  console.log(err);
  res.status(500).send("Person not found!");
}

module.exports = serverError;
