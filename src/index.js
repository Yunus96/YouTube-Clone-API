//require('dotenv').config({path: '/.env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
    {path: './.env'}
)

connectDB();





// Below is 1 aproach to connect db
/* 
import express from "express";
const app = express()

;(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("errr :", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App listening on port ${process.env.PORT}`)
        })
    } catch (error){
        console.error("error :", error)
        throw err
    }
})()
*/