import mongoose from "mongoose";

const { Schema, model } = mongoose;

const authorSchema = new Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nascionalidade: { type: String },
  },
  { versionKey: false }
);

const authors = model("autores", authorSchema);

export default authors;
