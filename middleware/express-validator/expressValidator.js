const { check } = require("express-validator");

module.exports.registerUserValidator = [
  check("name", "Ime je prazno").not().isEmpty(),
  check("lastName", "Prezime je prazno").not().isEmpty(),
  check("userName", "Korisničko ime je prazno").not().isEmpty(),
  check("email", "E-mail je prazno").isEmail(),
  check(
    "password",
    "Lozinka treba da ima minimum 6 i najviše 12 karaktera"
  ).isLength({ min: 6, max: 12 }),
];

module.exports.loginUserValidator = [
  check("email", "E-mail je prazno").isEmail(),
  check(
    "password",
    "Lozinka treba da ima minimum 6 i najviše 12 karaktera"
  ).isLength({ min: 6 }),
];

module.exports.searchUserByUsernameValidator = [
  check("userNameFromSearch", "Pretraživanje je prazno").not().isEmpty(),
];

module.exports.changeUserDataValidator = [
  check("changeUserData", "Input polje je prazno").not().isEmpty(),
];

module.exports.checkActualPasswordValidator = [
  check(
    "passwordToCheck",
    "Lozinka treba da ima minimum 6 i najviše 12 karaktera"
  ).isLength({ min: 6, max: 12 }),
];

module.exports.changeUserPasswordValidator = [
  check(
    "newPassword",
    "Lozinka treba da ima minimum 6 i najviše 12 karaktera"
  ).isLength({ min: 6, max: 12 }),
];

module.exports.createPostValidator = [
  check("textOfThePost", "Polje je neophodno popuniti").not().isEmpty(),
];

module.exports.searchForPostValidator = [
  check("searchInput", "Pretraživanje je prazan").not().isEmpty(),
];

module.exports.addCommentValidator = [
  check("textOfTheComment", "Polje je neophodno popuniti").not().isEmpty(),
];
