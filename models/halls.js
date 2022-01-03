const mongoose = require('mongoose')

const halls = new mongoose.Schema({
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
    }

})
module.exports = mongoose.model('halls',halls)