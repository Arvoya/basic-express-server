function validator(req, res, next) {
  if (!req.params.name) {
    next("No name provided");
  } else {
    next();
  }
}

module.exports = validator;
