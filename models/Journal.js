const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    picture: String,
    date: String,
    diary: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Journal', JournalSchema)