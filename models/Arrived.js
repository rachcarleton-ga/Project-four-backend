const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArrivedSchema = new Schema({
    location: String,
    date: String,
    picture: String,
}, { timestamps: true })

module.exports = mongoose.model('Arrived', ArrivedSchema)