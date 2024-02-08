const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArrivedSchema = new Schema ({
    location: String,
    date: String,
    picture: String,
    journal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Journal",
        required: true
    },
}, {timestamps: true})


module.exports = mongoose.model('Arrived', ArrivedSchema)