const mongoose = require('mongoose')

const likedEventsSchema = new mongoose.Schema({
    student : String,
    posts : String
})
module.exports =mongoose.model("likedEvents",likedEventsSchema)