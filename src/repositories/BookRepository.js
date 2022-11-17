const MainRepository = require("./MainRepository");
const model = require("../models");
const throwError = require("../helpers/throwError");

module.exports = class BookRepository extends MainRepository {
  constructor() {
    super("books");
  }

  async getBooks(where = {}) {
    try {
      return await model[this.modelName].find({ ...where }).populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBookById(_id) {
    try {
      return await model[this.modelName].findById({ _id }).populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBooksByAuthorId(author) {
    try {
      return await model[this.modelName].find({ autor: author }).populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBooksByPublisherId(publisher) {
    try {
      return await model[this.modelName]
        .find({ editora: publisher })
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
