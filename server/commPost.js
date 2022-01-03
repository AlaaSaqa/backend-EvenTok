const mongoose = require('mongoose')

const CommPostSchema = new mongoose.Schema({
    post : String,
    imag : String,
    commId : String,
    likes : String
})
mongoose.model("commPost",CommPostSchema)
