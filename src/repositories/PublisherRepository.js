const Publisher = require("../models/Publisher");

class PublisherRepository {
  static async getPublishers() {
    try {
      return await Publisher.find({});
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getPublisherById(_id) {
    try {
      return await Publisher.findById({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async setPublisher(data) {
    try {
      return await new Publisher(data).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updatePublisherById(_id, data) {
    try {
      return await Publisher.updateOne({ _id }, { $set: data });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deletePublisherById(_id) {
    try {
      return await Publisher.deleteOne({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PublisherRepository;
