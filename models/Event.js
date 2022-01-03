const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    imag : String,
    name : String,
    startDate : String,
    endDate : String,
    startDateTime : String,
    endDateTime : String,
    pay : String,
    selVal : String,
    place : String,
    des : String,
    numS : String,
    speaker1 : String,
    info1 : String,
    speaker2 : String,
    info2 : String,
    speaker3 : String,
    info3 : String,
    speaker4 : String,
    info4 : String,
    people:String,
    comm:String,
    stars:String,
    commName:String,
    accept:String
})
module.exports =mongoose.model("Event",EventSchema)
