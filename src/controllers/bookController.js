import books from "../models/Book.js";

class BookController {
  static bookNotFound = (res) => {
    res.status(404).json({
      message: "Registro não encontrado",
    });
  };

  static listAllBooks = (req, res) => {
    books.find((error, books) => {
      if (!error) {
        res.status(200).json(books);
      }
    });
  };

  static findBookById = (req, res) => {
    books.findById(req.params._id, (error, book) => {
      if (!error && book) {
        res.status(200).json(book);
      } else {
        this.bookNotFound(res);
      }
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
        const notFound = this.bookNotFound(res);
        const success = res.status(200).json({
          message:
            book.modifiedCount > 0
              ? "Registro atualizado"
              : "Nenhum registro atualizado",
        });

        !error ? success : notFound;
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
}

export default BookController;
