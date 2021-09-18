const mongoose = require("mongoose");

const { Schema } = mongoose;

const treeniSchema = new Schema({
  name: String,
  kuvaus: {
    treeninkesto: String,
    kohderyhma: String,
    treenitext: String,
  },
  liikkeet: [
    {
      nimi: String,
      sarjat: String,
      videoId: String,
      ohjeet: String,
    },
  ],
});

const Treeni = mongoose.model("Treeni", treeniSchema);

module.exports = Treeni;
