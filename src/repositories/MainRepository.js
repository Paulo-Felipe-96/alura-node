const throwError = require("../helpers/throwError");
const model = require("../models");

module.exports = class MainRepository {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAll(where = {}) {
    try {
      return await model[this.modelName].find({ ...where });
    } catch (error) {
      throwError(error);
    }
  }

  async getById(_id) {
    try {
      return await model[this.modelName].findById({ _id });
    } catch (error) {
      throwError(error);
    }
  }

  async set(data) {
    try {
      return await new model[this.modelName](data).save();
    } catch (error) {
      throwError(error);
    }
  }

  async updateById(_id, data) {
    try {
      return await model[this.modelName].updateOne({ _id }, { $set: data });
    } catch (error) {
      throwError(error);
    }
  }

  async deleteById(_id) {
    try {
      return await model[this.modelName].remove({ _id });
    } catch (error) {
      throwError(error);
    }
  }
};
