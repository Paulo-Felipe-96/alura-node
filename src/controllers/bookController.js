import books from "../models/Book.js";

class BookController {
  static bookNotFound = (res) => {
    res.status(404).json({
      message: "Registro não encontrado",
    });
  };

  static listAllBooks = (req, res) => {
    books
      .find()
      .populate(["autor", "editora"])
      .exec((error, books) => {
        !error
          ? res.status(200).json(books)
          : res.status(500).json({ message: error.message });
      });
  };

  static findBookById = (req, res) => {
    books
      .findById(req.params._id)
      .populate(["autor", "editora"])
      .exec((error, book) => {
        if (!error && book) {
          res.status(200).json(book);
        } else {
          this.bookNotFound(res);
        }
      });
  };

  static findBookByPublisherId = (req, res) => {
    books
      .find({ editora: req.params.editora })
      .populate(["autor", "editora"])
      .exec((error, books) => {
        res.status(200).json(books);
      });
  };

  static findBookByAuthorId = (req, res) => {
    books
      .find({ autor: req.params.autor })
      .populate(["autor", "editora"])
      .exec((error, books) => {
        res.status(200).json(books);
      });
  };

  static postBook = (req, res) => {
    const book = new books(req.body);
    book.save((error) => {
      !error
        ? res.status(201).send(book)
        : res.status(500).send({ message: `${error.message}` });
    });
  };

  static updateBookById = (req, res) => {
    const bookId = req.params._id;

    books.updateOne(
      { _id: bookId },
      {
        $set: req.body,
      },
      (error, book) => {
        const modifiedCount = book.modifiedCount
          ? "Registro atualizado"
          : "Nenhum registro atualizado";

        !error
          ? res.status(200).json({
              message: modifiedCount,
            })
          : res.status(500).json({ message: error });
      }
    );
  };

  static deleteBookById = (req, res) => {
    books.deleteOne({ _id: req.params._id }, (error, book) => {
      book.deletedCount === 0
        ? this.bookNotFound(res)
        : res.status(200).json({ message: "Registro deletado" });

      if (error) {
        res.status(500).json({ message: error.message });
      }
    });
  };

  static deleteBooks = (req, res) => {
    const booksToDelete = req.body["livros"];
    const isData = Array.isArray(booksToDelete);

    try {
      isData
        ? {
            exec: booksToDelete.forEach((book) => {
              books.deleteOne({ _id: `${book}` }, (book) => undefined);
            }),
            result: res.status(200).send("Processamento concluido"),
          }
        : res
            .status(400)
            .send(
              `Dados incorretos, por favor envie no corpo da requisição: "livros":"[livros_id]"`
            );
    } catch (error) {
      res.status(500).send(`Falha no processamento + ${error}`);
    }
  };
}

export default BookController;
