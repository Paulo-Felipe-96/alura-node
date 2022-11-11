const throwError = require("../helpers/throwError");
const db = require("../models");

module.exports = class MainRepository {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAll() {
    try {
      return await db[this.modelName].find({});
    } catch (error) {
      throwError(error);
    }
  }

  async getById(_id) {
    try {
      return await db[this.modelName].findById({ _id });
    } catch (error) {
      throwError(error);
    }
  }

  async set(data) {
    try {
      return await new db[this.modelName](data).save();
    } catch (error) {
      throwError(error);
    }
  }

  async updateById(_id, data) {
    try {
      return await db[this.modelName].updateOne({ _id }, { $set: data });
    } catch (error) {
      throwError(error);
    }
  }

  async deleteById(_id) {
    try {
      return await db[this.modelName].remove({ _id });
    } catch (error) {
      throwError(error);
    }
  }
};
