const mongoose = require('mongoose')

const EventLinkSchema = new mongoose.Schema({
    postLink : String,
    link : String,
    eventId : String
})
mongoose.model("eventLink",EventLinkSchema)
