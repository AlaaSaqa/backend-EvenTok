const mongoose = require('mongoose')

const Rhalls = new mongoose.Schema({
    collage:{
        type:String,
        required:true
    },
    hall:{
       type:String,
       required:true 
    },
    startDate:{
       type:String,
       required:true 
    },
    startTime:{
       type:String,
       required:true 
    },
    endDate:{
       type:String,
       required:true
    },
     endTime:{
       type:String,
       required:true
    },
    commId:{
       type:String,
       required:true
    },
    eventId:{
       type:String,
       required:true
    }
})
module.exports = mongoose.model('Rhalls',Rhalls)