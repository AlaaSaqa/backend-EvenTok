const mongoose = require('mongoose')

const joinedEventsSchema = new mongoose.Schema({
    student : String,
    events : String
})
mongoose.model("joinedEvents",joinedEventsSchema)