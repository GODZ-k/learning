import express from 'express'
import "dotenv/config"
import { createTenantSchema } from './utils.js'
import getPrismaClient from './config.js'

const app = express()

app.use(express.json())


app.post('/', async (req, res) => {
    return res.send('Hello World!')
})

app.post('/create', async (req, res) => {
    const { tenant } = req.body
    await createTenantSchema(tenant)
    return res.json({
        msg: "success",
    })
})

app.use(async(req, res, next) => {
    const prisma = await getPrismaClient(req.body.tenant);
    await prisma.$connect().then(()=> console.log("connected"))
    req.prisma = prisma
    next();
})
app.post('/add', async (req, res) => {
    const prisma = req.prisma
    
    try {
        const data = await prisma.employee.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role
            }
        })

        return res.status(200).json({
            msg: "Created",
            data,
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
})

app.listen(3000, () => console.log('Server running on port 3000'))