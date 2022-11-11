const MainRepository = require("./MainRepository");

module.exports = class AuthorRepository extends MainRepository {
  constructor() {
    super("authors");
  }
};
