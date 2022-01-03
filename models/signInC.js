const mongoose = require('mongoose')

const CommunitySchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    imag: String ,
    des :String
})
module.exports =mongoose.model("Community",CommunitySchema)
