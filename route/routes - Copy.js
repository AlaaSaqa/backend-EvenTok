require('../models/signInS')
require('../models/signInC')
require('../models/Event')
require('../models/eventPeople')
require('../models/halls')
require('../models/studentComms')
require('../models/ResHalls')
require('../models/admin')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const admin=mongoose.model("admin")
const Rhalls=mongoose.model("Rhalls")
const signInS=mongoose.model("Student")
const signInC=mongoose.model("Community")
const Event=mongoose.model("Event")
const eventPeople=mongoose.model("eventPeople")
const studentComms=mongoose.model("studentComms")
const halls = mongoose.model("halls")

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
module.exports=router