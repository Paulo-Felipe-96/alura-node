const authors = require("../models/Author");

class AuthorRepository {
  static async getAuthors() {
    try {
      return await authors.find({});
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAuthorById(_id) {
    try {
      return await authors.findById({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async setAuthor(data) {
    try {
      return await new authors(data).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateAuthorById(_id, data) {
    try {
      return await authors.updateOne({ _id }, { $set: data });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteAuthorById(_id) {
    try {
      return await authors.remove({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = AuthorRepository;
