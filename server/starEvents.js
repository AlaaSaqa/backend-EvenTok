const mongoose = require('mongoose')

const starEventsSchema = new mongoose.Schema({
    student : String,
    events : String
})
mongoose.model("starEvents",starEventsSchema)