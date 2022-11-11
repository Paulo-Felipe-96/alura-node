const MainRepository = require("./MainRepository");
const db = require("../models");
const throwError = require("../helpers/throwError");

module.exports = class BookRepository extends MainRepository {
  constructor() {
    super("books");
  }

  async getBooks() {
    try {
      return await db[this.modelName].find({}).populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBookById(_id) {
    try {
      return await db[this.modelName].findById({ _id }).populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBooksByAuthorId(author) {
    try {
      return await db[this.modelName].find({ autor: author }).populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async getBooksByPublisherId(publisher) {
    try {
      return await db[this.modelName]
        .find({ editora: publisher })
        .populate(["autor", "editora"]);
    } catch (error) {
      throwError(error);
    }
  }

  async deleteManyBooksById(booksCollection) {
    try {
      return await db[this.modelName].deleteMany({ _id: booksCollection });
    } catch (error) {
      throwError(error);
    }
  }
};
