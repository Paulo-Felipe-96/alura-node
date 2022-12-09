const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: {
    type: Schema.Types.ObjectId,
    ref: "autores",
    required: true,
  },
  editora: {
    type: Schema.Types.ObjectId,
    ref: "editoras",
    required: true,
  },
  linkCompra: { type: String, required: true },
  numeroPaginas: { type: Number },
});

const books = model("livros", bookSchema);

module.exports = books;
