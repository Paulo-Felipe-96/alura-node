import authors from "../models/Author.js";

class AuthorControler {
  static authorNotFound = (res) => {
    res.status(404).json({
      message: "Registro não encontrado",
    });
  };

  static listAllAuthors = (req, res) => {
    authors.find((error, books) => {
      if (!error) {
        res.status(200).json(books);
      }
    });
  };

  static findAuthorById = (req, res) => {
    authors.findById(req.params._id, (error, author) => {
      if (!error && author) {
        res.status(200).json(author);
      } else {
        this.authorNotFound(res);
      }
    });
  };

  static postAuthor = (req, res) => {
    const author = new authors(req.body);
    author.save((error) => {
      !error
        ? res.status(201).send(author)
        : res.status(500).send({ message: `${error.message}` });
    });
  };

  static updateAuthorById = (req, res) => {
    const authorId = req.params._id;

    authors.updateOne(
      { _id: authorId },
      {
        $set: req.body,
      },
      (error, author) => {
        const notFound = this.authorNotFound(res);
        const success = res.status(200).json({
          message:
            author.modifiedCount > 0
              ? "Registro atualizado"
              : "Nenhum registro atualizado",
        });

        !error ? success : notFound;
      }
    );
  };

  static deleteAuthorById = (req, res) => {
    authors.deleteOne({ _id: req.params._id }, (error, author) => {
      author.deletedCount === 0
        ? this.authorNotFound(res)
        : res.status(200).json({ message: "Registro deletado" });

      if (error) {
        res.status(500).json({ message: error.message });
      }
    });
  };
}

export default AuthorControler;
