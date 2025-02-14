const express = require("express")
const mongoose = require('mongoose')

const app = express()
const port = 3000
mongoose.connect('mongodb+srv://anapaulam410costa2:D00b89Bb@cluster0.zaevm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const Vaccine = mongoose.model('Vaccine', {name: String});

app.get("", (req, res) =>{
    res.send("Hello World")
})



app.listen(port, () => {
    console.log('App running')
})