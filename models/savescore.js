const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SaveScoreSchema = new Schema({
    name: String,
    score: String
});

const SaveScore = mongoose.model('SaveScore', SaveScoreSchema);

module.exports = SaveScore;