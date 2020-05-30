const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SaveScoreSchema = new Schema({
    initals: String,
    score: Number
});

const SaveScore = mongoose.model('SaveScore', SaveScoreSchema);

module.exports = SaveScore;