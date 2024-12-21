import { PrismaClient } from "@prisma/client";

export default async function getPrismaClient(tenantId) {
const prisma = new PrismaClient({
    datasources:{
        db:{
            url:`${process.env.DATABASE_URL}&schema=${tenantId}`
        }
    }
})
return prisma
}