const model = require("../models");
const throwError = require("../helpers/throwError");

module.exports = class AuthorizationRepository {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getToken(authToken) {
    try {
      return !!(await model[this.modelName].findOne({ authToken }));
    } catch (error) {
      throwError(error);
    }
  }
};
