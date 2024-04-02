function logger(req, res, next) {
  console.log(req.method, req.path);
}

module.exports = logger;
