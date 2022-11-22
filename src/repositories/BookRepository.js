const MainRepository = require("./MainRepository");
const model = require("../models");
const throwError = require("../helpers/throwError");

module.exports = class BookRepository extends MainRepository {
  constructor() {
    super("books");
  }

  async getBooks(where = {}) {
    try {
      return await model[this.modelName]
        .find({ ...where })
        .populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBookById(_id) {
    try {
      return await model[this.modelName]
        .findById({ _id })
        .populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBooksByAuthorId(autor) {
    try {
      return await model[this.modelName]
        .find({ autor })
        .populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBooksByPublisherId(editora) {
    try {
      return await model[this.modelName]
        .find({ editora })
        .populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async deleteManyBooksById(booksCollection) {
    try {
      return await model[this.modelName].deleteMany({ _id: booksCollection });
    } catch (error) {
      throwError(error);
    }
  }
};
