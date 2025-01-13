
import express from 'express'
import axios from 'axios'

const app = express()


app.get("/", async (req,res)=>{

    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
    const data = await response.data
    return res.status(200).json({
        msg:"Express with node",
        data
    })
})

app.listen(3001,()=>{
    console.log("server is listing on port 3001")
})