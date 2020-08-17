const mongoose = require("mongoose");

const valid = (field) => `${field} é obrigatório`;

const SerieSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, valid("O nome")],
  },
  status: {
    type: String,
    enumValues: ["to-watch", "watching", "watched"],
    required: [true, valid("O status")],
  },
  comments: [String],
});

const Serie = mongoose.model("Serie", SerieSchema);

module.exports = Serie;
