'use server'
import { prisma } from '@/lib/db'

const mapObjectToArray = (object) => {
  const result = []
  Object.keys(object).forEach((el) => {
    result.push({ key: el, value: object[el] })
  })

  return result
}

export async function createUser(data) {
  try {
    const answers = mapObjectToArray(data.answers)

    await prisma.user.create({
      data: {
        userId: data.email,
        name: data.name,
        surname: data.surname,
        email: data.email,
        link: data.link,
        about: data.about,
        answers: {
          create: answers,
        },
      },
    })
  } catch (error) {
    console.error(error)
  }
}
