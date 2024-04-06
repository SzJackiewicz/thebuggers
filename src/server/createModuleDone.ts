'use server'
import { prisma } from '@/lib/db'


export async function createModuleDone(moduleId: string, userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId: userId
      }
    });

    if (!user) {
      console.error('Użytkownik o podanym userId nie został znaleziony.');
      return;
    }

    await prisma.moduleDone.create({
      data: {
        userId: user.id,
        moduleId: moduleId,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
