const books = require("../models/Book");

class BookRepository {
  static async getBooks() {
    try {
      return await books.find({}).populate(["autor", "editora"]);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getBookById(_id) {
    try {
      return await books.findById({ _id }).populate(["autor", "editora"]);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getBooksByAuthorId(author) {
    try {
      return await books.find({ autor: author }).populate(["autor", "editora"]);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getBooksByPublisherId(publisher) {
    try {
      return await books
        .find({ editora: publisher })
        .populate(["autor", "editora"]);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async setBook(data) {
    try {
      return await new books(data).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateBookById(_id, data) {
    try {
      return await books.updateOne({ _id }, { $set: data });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteBookById(_id) {
    try {
      return await books.remove({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteManyBooksById(booksCollection) {
    try {
      return await books.deleteMany({ _id: booksCollection });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BookRepository;
