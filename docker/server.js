const express = require("express")
const dotenv = require("dotenv")
dotenv.config({})
const app = express()

const PORT = process.env.PORT || 8001

app.get("/",(req,res)=>{
    return res.status(200).json({
        msg:"Hello world"
    })
})

app.listen(PORT,()=>{
    console.log("server is listning on port",PORT)
})