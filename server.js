const express = require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./route/routes')
const cors = require('cors')
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,
()=>console.log("data base connect"))


app.use(express.json())
app.use(cors())
app.use('',routeUrls)
app.listen (4000,()=>{
    console.log("server is up and running");
})