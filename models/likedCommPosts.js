const mongoose = require('mongoose')

const likedCommSchema = new mongoose.Schema({
    student : String,
    posts : String
})
module.exports =mongoose.model("likedComm",likedCommSchema)