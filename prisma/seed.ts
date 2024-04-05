import { PrismaClient } from '@prisma/client'
import { usersData } from './data'
const prisma = new PrismaClient()

async function seed() {
  for (const u of usersData) {
    await prisma.user.create({
      data: u,
    })
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
