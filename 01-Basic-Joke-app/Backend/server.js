const express = require('express')
const cros = require('cors')
const app = express() 

require('dotenv').config()

app.use(cros())

const Port = process.env.PORT || 4000


app.get("/api/joke",(req,res)=>{
    
    const joke = [
        {
            id:1,
            message:"joke no 1"
        },
        {
            id:2,
            message:"joke no 2"
        },
        {
            id:3,
            message:"joke no 3"
        },
        {
            id:4,
            message:"joke no 5"
        },
        {
            id:6,
            message:"joke no 6"
        }
    ]
    
    res.send(joke)
})

app.get('/',(req,res)=>{
    res.send("<h2>Hello jee</h2>")
})

app.listen(Port,(req,res)=>{
    console.log(`app is listen on port no ${Port}`)
})