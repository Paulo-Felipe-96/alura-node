import mongoose from "mongoose";

const { Schema, model } = mongoose;

const bookSchema = new Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number },
});

const books = model("livros", bookSchema);

export default books;
