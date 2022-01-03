const mongoose = require('mongoose')

const EventPostSchema = new mongoose.Schema({
    post : String,
    imag : String,
    eventId : String,
    likes : String
})
module.exports =mongoose.model("eventPost",EventPostSchema)
