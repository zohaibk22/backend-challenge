const { TooManyRequests } = require("http-errors")
const mongoose = require("mongoose")

const PeopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true
    },
    monthlyIncome: {
        type: Number,
        required: true,
    },
    experienced: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Poeple", PeopleSchema )