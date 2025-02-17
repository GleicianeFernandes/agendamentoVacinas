import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import cors from 'cors-ts'

import router from "./routes/route"
import conn from './db/conn'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin:"*"}))

app.use("/", router)

conn()
mongoose.connection.once("open", ()=>{
    console.log("Db connection succeed")

    const PORT = process.env.PORT || 3000

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
