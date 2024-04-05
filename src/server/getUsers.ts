'use server'

import { prisma } from '@/lib/db'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      include: {
        answers: true,
      },
    })
    return users
  } catch (error) {
    console.error(error)
  }
}
