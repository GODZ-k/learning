import express from "express";
// import { WebSocket } from "http";
import path from "path";
import { createServer } from "http";
import {Server} from 'socket.io'


const app = express()
const server = createServer(app)

app.use(express.static(path.resolve('./public')))
const io = new Server(server)

app.get('/',(req,res)=>{
    return res.sendFile(path.resolve('index.html'))
})


io.on('connection',(socket) =>{
    socket.on('message',(message)=>{
        console.log("A new user message is :", message)
        io.emit('message',message)
    })
console.log("a new user has connected successfully")
})

server.listen(3000,()=>{
    console.log("server is listning on port",3000)
})