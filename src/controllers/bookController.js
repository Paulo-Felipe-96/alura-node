import books from "../models/Book.js";

class BookController {
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
        if (error) {
          res.status(500).json({ message: error });
        }

        !error && !book
          ? res.json({ mensagem: "Registro não encontrado" })
          : res.json(book);
      });
  };

  static findBookByPublisherId = (req, res) => {
    books
      .find({ editora: req.params.editora })
      .populate(["autor", "editora"])
      .exec((error, books) => {
        error
          ? res.status(500).json({ message: error })
          : res.status(200).json(books);
      });
  };

  static findBookByAuthorId = (req, res) => {
    books
      .find({ autor: req.params.autor })
      .populate(["autor", "editora"])
      .exec((error, books) => {
        error
          ? res.status(500).json({ message: error })
          : res.status(200).json(books);
      });
  };

  static postBook = (req, res) => {
    const book = new books(req.body);
    book.save((error) => {
      !error
        ? res.status(201).send(book)
        : res.status(400).json({ message: error.message });
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
        !error
          ? res.status(200).json({
              message:
                book.modifiedCount > 0
                  ? "Registro atualizado"
                  : "Nenhum registro atualizado",
              id: bookId,
            })
          : res.status(500).json({ message: error.message });
      }
    );
  };

  static deleteBookById = (req, res) => {
    books.deleteOne({ _id: req.params._id }, (error, book) => {
      if (error) {
        res.status(500).json({ message: error });
      }

      if (!error) {
        book.deletedCount
          ? res.status(200).json({ message: "Registro deletado" })
          : res.status(404).json({ message: "Registro não encontrado" });
      }
    });
  };

  static deleteBooks = (req, res) => {
    const booksToDelete = req.body["livros"];
    const isData = Array.isArray(booksToDelete);

    try {
      if (isData) {
        booksToDelete.forEach((book) => {
          books.deleteOne({ _id: `${book}` }, () => null);
        });

        res.status(200).send("Processamento concluido");
      } else {
        res.status(400).json({
          message: `Dados incorretos, por favor, verifique se o payload possui o formato indicado`,
          format: `"livros": [id]`,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}

export default BookController;
