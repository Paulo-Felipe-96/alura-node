const MainRepository = require("./MainRepository");

module.exports = class PublisherRepository extends MainRepository {
  constructor() {
    super("publishers");
  }
};
