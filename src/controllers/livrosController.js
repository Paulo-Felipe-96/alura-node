import livros from "../models/Livro.js";

class LivroController {
  static bookNotFound = (res) => {
    res.status(404).json({
      status: 404,
      message: "Registro não encontrado",
    });
  };

  static listAllBooks = (req, res) => {
    livros.find((error, books) => {
      if (!error) {
        res.status(200).json(books);
      }
    });
  };

  static findBookById = (req, res) => {
    livros.findById(req.params._id, (error, book) => {
      if (!error && book) {
        res.status(200).json(book);
      }

      if (!book) {
        this.bookNotFound(res);
      }
    });
  };

  static postBook = (req, res) => {
    const { titulo, autor, editora, numeroPaginas } = req.body;

    livros.create(
      {
        titulo: titulo,
        autor: autor,
        editora: editora,
        numeroPaginas: numeroPaginas,
      },
      (error, book) => {
        if (!error) {
          res.status(201).json({
            status: 201,
            Object_created: book,
          });
        }
      }
    );
  };

  static updateBookById = (req, res) => {
    const { titulo, autor, editora, numeroPaginas } = req.body;
    const bookId = req.params._id;

    livros.updateOne(
      { _id: bookId },
      {
        $set: {
          titulo: titulo,
          autor: autor,
          editora: editora,
          numeroPaginas: numeroPaginas,
        },
      },
      (error, book) => {
        const isModified =
          book.modifiedCount > 0
            ? "Registro atualizado"
            : "Nenhum registro atualizado";

        if (!error && book) {
          res.status(201).json({
            status: 201,
            message: isModified,
          });
        }

        if (!book) {
          this.bookNotFound(res);
        }
      }
    );
  };

  static deleteBookById = (req, res) => {
    livros.deleteOne({ _id: req.params._id }, (error, book) => {
      const isDeleted =
        book.deletedCount > 0
          ? "Registro deletado"
          : "Nenhum registro deletado";

      if (!error) {
        res.status(200).json({
          status: 200,
          message: isDeleted,
        });
      }
    });
  };
}

export default LivroController;
