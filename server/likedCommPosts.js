const mongoose = require('mongoose')

const likedCommSchema = new mongoose.Schema({
    student : String,
    posts : String
})
mongoose.model("likedComm",likedCommSchema)