const mongoose = require('mongoose')

const EventLinkSchema = new mongoose.Schema({
    postLink : String,
    link : String,
    eventId : String
})
module.exports =mongoose.model("eventLink",EventLinkSchema)
