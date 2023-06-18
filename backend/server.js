const express = require('express');
const app = new express()
const PORT = 5689
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jumanathasneem653:user1@cluster0.jjhm4pj.mongodb.net/')
.then(()=>{console.log("Mongo connected")})
.catch((err)=>{console.log(err)})

app.listen(PORT,()=>{
    console.log('listening on port '+ PORT)
})


app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/about',(req,res)=>{
    res.send('About')
})