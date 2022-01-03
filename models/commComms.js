const mongoose = require('mongoose')

const commCommsSchema = new mongoose.Schema({
    comm : String,
    comms : String
})
module.exports = mongoose.model("commComms",commCommsSchema)
