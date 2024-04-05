'use server'
import { prisma } from '@/lib/db'

export async function createUser({ data }) {
  try {
    await prisma.user.create({
      data: {
        userId: data.userId,
        name: data.name,
        surname: data.surname,
        email: data.email,
        link: data.link,
        about: data.about,
        answers: {
          create: [
            {
              key: data.key,
              value: data.value,
            },
          ],
        },
      },
    })
  } catch (error) {
    console.error(error)
  }
}
