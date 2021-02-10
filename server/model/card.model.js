const mongoose = require("mongoose");

var cardSchema = mongoose.Schema({
    title: String,
    affiche: String,
    onAir: String,
    synopsis: Number,
    set: String,
    date: String
});


var Card = mongoose.model("Card", cardSchema);
module.exports = Card;