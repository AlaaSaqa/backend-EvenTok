const mongoose = require('mongoose')

const eventPeopleSchema = new mongoose.Schema({
    event : String,
    students : String
})
mongoose.model("eventPeople",eventPeopleSchema)
