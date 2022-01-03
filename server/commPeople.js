const mongoose = require('mongoose')

const commPeopleSchema = new mongoose.Schema({
    comm : String,
    students : String
})
mongoose.model("commPeople",commPeopleSchema)
