const { Schema, model } = require("mongoose");

const authorizationSchema = new Schema({
  id: { type: String },
  authToken: { type: String, required: false },
});

const auth = model("authies", authorizationSchema);

module.exports = auth;
