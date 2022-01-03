const mongoose = require('mongoose')

const likedEventsSchema = new mongoose.Schema({
    student : String,
    posts : String
})
mongoose.model("likedEvents",likedEventsSchema)