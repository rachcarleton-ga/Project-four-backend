const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    location: String,
    date: String,
    picture: String,
}, { timestamps: true })

module.exports = mongoose.model('Goal', GoalSchema)
