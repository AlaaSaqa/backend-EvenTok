const mongoose = require('mongoose')

const admin = new mongoose.Schema({
    admin:{
        type:String,
        required:true
    },
    password:{
       type:String,
       required:true 
    },

})
module.exports = mongoose.model('admin',admin)