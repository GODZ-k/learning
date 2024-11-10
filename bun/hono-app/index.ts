import axios from 'axios'
import { Hono } from 'hono'

const app = new Hono()

app.get("/", async (c) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
    const data = response.data
    return c.json({
        msg:"hono with bun",
        data
    }, 200)
})


export default { 
    port: 3003, 
    fetch: app.fetch, 
  } 