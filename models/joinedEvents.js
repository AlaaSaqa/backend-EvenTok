const mongoose = require('mongoose')

const joinedEventsSchema = new mongoose.Schema({
    student : String,
    events : String
})
module.exports =mongoose.model("joinedEvents",joinedEventsSchema)