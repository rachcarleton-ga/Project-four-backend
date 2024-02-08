const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    picture: String,
    date: String,
    diary: String,
    goal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal",
    },
    arrived: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Arrived",
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Journal', JournalSchema)