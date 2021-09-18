const mongoose = require("mongoose");

const { Schema } = mongoose;

const cardSchema = new Schema({
  nimi: String,
  treeninkesto: String,
  image: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
