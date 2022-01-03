const mongoose = require('mongoose')

const EventPostSchema = new mongoose.Schema({
    post : String,
    imag : String,
    eventId : String,
    likes : String
})
mongoose.model("eventPost",EventPostSchema)
