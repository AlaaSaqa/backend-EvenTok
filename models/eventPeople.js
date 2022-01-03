const mongoose = require('mongoose')

const eventPeopleSchema = new mongoose.Schema({
    event : String,
    students : String
})
module.exports =mongoose.model("eventPeople",eventPeopleSchema)
