const mongoose = require('mongoose')

const starEventsSchema = new mongoose.Schema({
    student : String,
    events : String
})
module.exports =mongoose.model("starEvents",starEventsSchema)