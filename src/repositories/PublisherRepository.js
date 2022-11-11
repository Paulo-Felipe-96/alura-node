const MainRepository = require("./MainRepository");

class PublisherRepository extends MainRepository {
  constructor() {
    super("publishers");
  }
}

module.exports = PublisherRepository;
