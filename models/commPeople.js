const mongoose = require('mongoose')

const commPeopleSchema = new mongoose.Schema({
    comm : String,
    students : String
})
module.exports =mongoose.model("commPeople",commPeopleSchema)
