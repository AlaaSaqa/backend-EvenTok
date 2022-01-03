const mongoose = require('mongoose')

const studentCommsSchema = new mongoose.Schema({
    studentId : String,
    commIds : String
})
mongoose.model("studentComms",studentCommsSchema)
