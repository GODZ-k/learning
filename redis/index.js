import express, { json } from "express";
import axios from "axios";
import client from './client.js'

const app = express()



app.get("/",async(req,res)=>{
    const cacheValue = await client.get('photos')

    if(cacheValue){
        return res.status(200).json({
            cacheValue: JSON.parse(cacheValue),
            msg:"Cached value"
        })
    }

    const {data}  = await axios.get('https://jsonplaceholder.typicode.com/photos')
    await client.set('photos',JSON.stringify(data))
    await client.expire('photos',30)
    return res.status(200).json({
        data,
        msg:"Working ..."
    })
})
app.listen(3000 ,()=>{
    console.log('Server is listning on port 3000')
})