const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name : String,
    email : String,
    number : String,
    phone : String,
    password : String,
    imag:String,
    des:String
})
module.exports =mongoose.model("Student",StudentSchema)
