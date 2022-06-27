import authors from "../models/Author.js";

class AuthorControler {
  static listAllAuthors = (req, res) => {
    authors.find((error, authors) => {
      !error
        ? res.status(200).json(authors)
        : res.status(500).json({ message: error.message });
    });
  };

  static findAuthorById = (req, res) => {
    authors.findById(req.params._id, (error, author) => {
      if (error) {
        res.status(500).json({ message: error });
      }

      !error && !author
        ? res.json({ mensagem: "Registro não encontrado" })
        : res.json(author);
    });
  };

  static postAuthor = (req, res) => {
    const author = new authors(req.body);
    author.save((error) => {
      !error
        ? res.status(201).send(author)
        : res.status(400).send({ message: `${error.message}` });
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
        !error
          ? res.status(200).json({
              message:
                author.modifiedCount > 0
                  ? "Registro atualizado"
                  : "Nenhum registro atualizado",
              id: authorId,
            })
          : res.status(500).json({ message: error.message });
      }
    );
  };

  static deleteAuthorById = (req, res) => {
    authors.deleteOne({ _id: req.params._id }, (error, author) => {
      if (error) {
        res.status(500).json({ message: error });
      }

      if (!error) {
        author.deletedCount
          ? res.status(200).json({ message: "Registro deletado" })
          : res.status(404).json({ message: "Registro não encontrado" });
      }
    });
  };
}

export default AuthorControler;
