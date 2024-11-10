import { Elysia } from 'elysia'
import axios from 'axios'


const app  = new Elysia()




app.get('/',async ()=>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    const data = await response.data
    return {
        status:200,
        body:{
            msg:"Elysia with bun",
            data
        }
    }
})


app.listen(3000,  ()=>{
    console.log('server is listnig on port 3000')
})