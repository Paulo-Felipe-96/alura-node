import mongoose from "mongoose";

const { Schema, model } = mongoose;

const publisherSchema = new Schema({
  id: { type: String },
  nome: { type: String, required: true },
});

const publishers = model("editoras", publisherSchema);

export default publishers;
