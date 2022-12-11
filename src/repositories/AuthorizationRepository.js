const auth = require("../models/Authorization");
const throwError = require("../helpers/throwError");

module.exports = class AuthorizationRepository {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getToken(authToken) {
    try {
      return await auth.findOne({ authToken });
    } catch (error) {
      throwError(error);
    }
  }
};
