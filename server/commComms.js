const mongoose = require('mongoose')

const commCommsSchema = new mongoose.Schema({
    comm : String,
    comms : String
})
mongoose.model("commComms",commCommsSchema)
