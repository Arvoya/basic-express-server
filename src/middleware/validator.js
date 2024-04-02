function validator(req, res, next) {
  let names = [
    "Jacob",
    "Isai",
    "Ahmed",
    "Brock",
    "John",
    "Justin",
    "Mak",
    "Patrick",
  ];
  if (!names.includes(req.params.name)) {
    next("Try another name in CF");
  } else {
    next();
  }
}

module.exports = validator;
