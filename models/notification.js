const mongoose = require('mongoose')

const not = new mongoose.Schema({
    eventId:{
        type:String,
        required:true
    },
    startDate:{
       type:String,
       required:true 
    },
    commName:{
       type:String,
       required:true 
    },
    eventName:{
       type:String,
       required:true
    },
     date:{
       type: Date,
       default:Date.now
    }

})
module.exports = mongoose.model('not',not)