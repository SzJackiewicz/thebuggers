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

    const user = await prisma.user.findUnique({
      where: {
        userId: data.email
      }
    });

    if (user) {
      console.error('Użytkownik o podanym userId został znaleziony.');
      return;
    }

    await prisma.user.create({
      data: {
        userId: data.email,
        name: data.name,
        surname: data.surname,
        email: data.email,
        link: data.link,
        about: data.about,
        testId: data.testId,
        answers: {
          create: answers,
        },
      },
    })
  } catch (error) {
    console.error(error)
  }
}
