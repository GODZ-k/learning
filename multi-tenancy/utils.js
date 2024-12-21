import { PrismaClient } from "@prisma/client";
import { exec } from "child_process";
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";

async function createTenantSchema(tenantId) {
  console.log(tenantId);
  const prisma = new PrismaClient();
  try {
    // 1. Create the schema
    await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${tenantId}"`);

    // // // 2. Create tables inside the schema
    const queries = [
      `CREATE TABLE IF NOT EXISTS "${tenantId}".Employee (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        role VARCHAR(50),
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
      )`,
      
      `CREATE TABLE IF NOT EXISTS "${tenantId}".Leave (
        id SERIAL PRIMARY KEY,
        employee_id INT REFERENCES "${tenantId}".Employees(id),
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        status VARCHAR(50),
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
      )`,

      `CREATE TABLE IF NOT EXISTS "${tenantId}".Payroll (
        id SERIAL PRIMARY KEY,
        employee_id INT REFERENCES "${tenantId}".Employees(id),
        salary FLOAT NOT NULL,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
      )`,
    ];

    for (const query of queries) {
      await prisma.$executeRawUnsafe(query);
    }

    console.log(`Schema ${tenantId} created successfully`);
  } catch (error) {
    console.error('Error creating schema:', error);
  }
}

export { createTenantSchema  };

