require('../models/signInS')
require('../models/signInC')
require('../models/Event')
require('../models/halls')
require('../models/studentComms')
require('../models/ResHalls')
require('../models/admin')
require('../models/commPost')
require('../models/eventPost')
require('../models/eventLink')
require('../models/eventPeople')
require('../models/commPeople')
require('../models/commComms')
require('../models/joinedEvents')
require('../models/likedCommPosts')
require('../models/likedEventPost')
require('../models/starEvents')
require('../models/notification')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const not=mongoose.model("not")
const admin=mongoose.model("admin")
const Rhalls=mongoose.model("Rhalls")
const Event=mongoose.model("Event")
const eventPeople=mongoose.model("eventPeople")
const halls = mongoose.model("halls")
const joinedEvents = mongoose.model('joinedEvents')
const starEvents = mongoose.model('starEvents')
const likedComm = mongoose.model('likedComm')
const likedEvents = mongoose.model('likedEvents')
const commComms = mongoose.model('commComms')
const eventPost = mongoose.model('eventPost')
const eventLink = mongoose.model('eventLink')
const signInS=mongoose.model("Student")
const signInC=mongoose.model("Community")
const commPeople=mongoose.model("commPeople")
const studentComms=mongoose.model("studentComms")
const commPost = mongoose.model("commPost")


const mongoUri ="mongodb+srv://AlaSaqa:ala@cluster0.8zpjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
router.post('/send-data-not',(req,res)=>
{
    const nott = new not({
      eventId : req.body.eventId,
      startDate : req.body.startDate,
      commName:req.body.commName,
      eventName:req.body.eventName
    })
    nott.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/not',(req,res)=>{
    not.find({})
    .then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/Rhalls',(req,res)=>{
    Rhalls.find({})
    .then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/signInS',(req,res)=>{
    signInS.find({})
    .then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-student',(req,res)=>{
    signInS.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/signInC',(req,res)=>{
    signInC.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-comm',(req,res)=>{
    signInC.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/eventPeople',(req,res)=>{
    eventPeople.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/Event',(req,res)=>{
    Event.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-event',(req,res)=>{
    Event.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/studentComms',(req,res)=>{
    studentComms.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
    //res.send("well come to node js")
})
router.get('/Gethall',(req,res)=>{
    halls.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/update-halls',(req,res)=>{
    halls.findByIdAndUpdate(req.body.id,{
        collage:req.body.collage,
        hall:req.body.hall,
        startDate:req.body.startDate,
        startTime:req.body.startTime,
        endDate:req.body.endDate,
        endTime:req.body.endTime,
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/add-hall',(req,res)=>{
    const hll = new halls({
        collage:req.body.collage,
        hall:req.body.hall,
        startDate:req.body.startDate,
        startTime:req.body.startTime,
        endDate:req.body.endDate,
        endTime:req.body.endTime,
    })
    hll.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.post('/add-rhall',(req,res)=>{
    const rh = new Rhalls({
        collage:req.body.collage,
        hall:req.body.hall,
        startDate:req.body.startDate,
        startTime:req.body.startTime,
        endDate:req.body.endDate,
        endTime:req.body.endTime,
        commId:req.body.commId,
        eventId:req.body.eventId
    })
    rh.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})
router.post('/delete-hall',(req,res)=>{
    halls.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/admin',(req,res)=>{
    const ad = new admin({
        admin : req.body.admin,
        password:req.body.password
    })
    ad.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})
router.get('/Getadmin',(req,res)=>{
    admin.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/signInS',(req,res)=>{
    signInS.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/commComms',(req,res)=>{
    commComms.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/starEvents',(req,res)=>{
    starEvents.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/commPost',(req,res)=>{
    commPost.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/eventPeople',(req,res)=>{
    eventPeople.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/commPeople',(req,res)=>{
    commPeople.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/signInC',(req,res)=>{
    signInC.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
    //res.send("well come to node js")
})
router.get('/studentComms',(req,res)=>{
    studentComms.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
    //res.send("well come to node js")
})
router.get('/Event',(req,res)=>{
    Event.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/likedComm',(req,res)=>{
    likedComm.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/EventPost',(req,res)=>{
    eventPost.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/likeevent',(req,res)=>{
    likedEvents.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/EventLink',(req,res)=>{
    eventLink.find({}).then(data=>{
        res.send(data.reverse())
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/send-data-event',(req,res)=>
{
    const ev = new Event({
        imag : req.body.imag,
        name : req.body.name,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        startDateTime : req.body.startDateTime,
        endDateTime : req.body.endDateTime,
        pay : req.body.pay,
        selVal : req.body.selVal,
        place : req.body.place,
        des : req.body.des,
        numS : req.body.numS,
        speaker1 : req.body.speaker1,
        info1 : req.body.info1,
        speaker2 : req.body.speaker2,
        info2 : req.body.info2,
        speaker3 : req.body.speaker3,
        info3 : req.body.info3,
        speaker4 : req.body.speaker4,
        info4 : req.body.info4,
        people:req.body.people,
        comm:req.body.comm,
        stars:req.body.stars,
        commName:req.body.commName,
        accept:req.body.accept

    })
    ev.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})


router.post('/send-data-student',(req,res)=>
{
    const student = new signInS({
      name : req.body.name,
      email : req.body.email,
      number : req.body.number,
      phone : req.body.phone,
      password : req.body.password,
      imag:req.body.imag,
      des:req.body.des
     
    })
    student.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-likedEventPosts',(req,res)=>
{
    const likedev = new likedEvents({
      student : req.body.student,
      posts : req.body.posts
    })
    likedev.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-joinedEvents',(req,res)=>
{
    const joinedEvent = new joinedEvents({
      student : req.body.student,
      events : req.body.events
    })
    joinedEvent.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-starEvents',(req,res)=>
{
    const star = new starEvents({
      student : req.body.student,
      events : req.body.events
    })
    star.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-likedCommPosts',(req,res)=>
{
    const likedCom = new likedComm({
      student : req.body.student,
      posts : req.body.posts
    })
    likedCom.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/send-data-eventPeople',(req,res)=>
{
    const eventPeo = new eventPeople({
      event : req.body.event,
      students : req.body.students
    })
    eventPeo.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-commComms',(req,res)=>
{
    const commComm = new commComms({
      comm : req.body.comm,
      comms : req.body.comms
    })
    commComm.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-commPeople',(req,res)=>
{
    const commPeo = new commPeople({
      comm : req.body.comm,
      students : req.body.students
    })
    commPeo.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-community',(req,res)=>
{
    const communtity = new signInC({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
      imag : req.body.imag,
      des: req.body.des
     
    })
    communtity.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/send-data-studentComms',(req,res)=>
{
    const stuComms = new studentComms({
        studentId : req.body.studentId,
        commIds : req.body.commIds
     
    })
    stuComms.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/send-data-post',(req,res)=>
{
    const compo = new commPost({
        post : req.body.post,
        imag : req.body.imag,
        commId : req.body.commId,
        likes : req.body.likes
    })
    compo.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/send-data-event-post',(req,res)=>
{
    const evpo = new eventPost({
        post : req.body.post,
        imag : req.body.imag,
        eventId : req.body.eventId,
        likes : req.body.likes
    })
    evpo.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/send-data-event-link',(req,res)=>
{
    const evli = new eventLink({
        postLink : req.body.postLink,
        link : req.body.link,
        eventId : req.body.eventId
    })
    evli.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/delete',(req,res)=>{
    signInS.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-event',(req,res)=>{
    Event.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-link',(req,res)=>{
    eventLink.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-post',(req,res)=>{
    eventPost.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/delete-post-comm',(req,res)=>{
    commPost.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-signInS',(req,res)=>{
    signInS.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        email : req.body.email,
        number : req.body.number,
        phone : req.body.phone,
        imag:req.body.imag,
        des : req.body.des,
        password : req.body.password
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-joinedEvents',(req,res)=>{
    joinedEvents.findByIdAndUpdate(req.body.id,{
        student : req.body.student,
        events : req.body.events
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-starEvents',(req,res)=>{
    starEvents.findByIdAndUpdate(req.body.id,{
        student : req.body.student,
        events : req.body.events
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-likedCommPosts',(req,res)=>{
    likedComm.findByIdAndUpdate(req.body.id,{
        student : req.body.student,
        posts : req.body.posts
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-likedEventPosts',(req,res)=>{
    likedEvents.findByIdAndUpdate(req.body.id,{
        student : req.body.student,
        posts : req.body.posts
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-eventPeople',(req,res)=>{
    eventPeople.findByIdAndUpdate(req.body.id,{
        event : req.body.event,
        students : req.body.students
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-signInC',(req,res)=>{
    signInC.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        imag : req.body.imag,
        des: req.body.des
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-commComms',(req,res)=>{
    commComms.findByIdAndUpdate(req.body.id,{
        comm : req.body.comm,
        comms : req.body.comms
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-studentComms',(req,res)=>{
    studentComms.findByIdAndUpdate(req.body.id,{
        studentId:req.body.studentId,
        commIds:req.body.commIds
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/update-event-post',(req,res)=>{
    eventPost.findByIdAndUpdate(req.body.id,{
        post : req.body.post,
        imag : req.body.imag,
        eventId : req.body.eventId,
        likes : req.body.likes
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/update-comm-post',(req,res)=>{
    commPost.findByIdAndUpdate(req.body.id,{
        post : req.body.post,
        imag : req.body.imag,
        commId : req.body.commId,
        likes : req.body.likes
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/update-event-link',(req,res)=>{
    eventLink.findByIdAndUpdate(req.body.id,{
        postLink : req.body.postLink,
        link:req.body.link,
        eventId : req.body.eventId
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/update-event',(req,res)=>
{
    Event.findByIdAndUpdate(req.body.id,{
        imag : req.body.imag,
        name : req.body.name,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        startDateTime : req.body.startDateTime,
        endDateTime : req.body.endDateTime,
        pay : req.body.pay,
        selVal : req.body.selVal,
        place : req.body.place,
        des : req.body.des,
        numS : req.body.numS,
        speaker1 : req.body.speaker1,
        info1 : req.body.info1,
        speaker2 : req.body.speaker2,
        info2 : req.body.info2,
        speaker3 : req.body.speaker3,
        info3 : req.body.info3,
        speaker4 : req.body.speaker4,
        info4 : req.body.info4,
        people:req.body.people,
        comm:req.body.comm,
        stars:req.body.stars,
        commName:req.body.commName,
        accept:req.body.accept
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
module.exports=router