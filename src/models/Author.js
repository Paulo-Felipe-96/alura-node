const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nascionalidade: { type: String },
  },
  { versionKey: false },
);

const authors = model("autores", authorSchema);

module.exports = authors;
