'use server'
import { prisma } from '@/lib/db'


export async function getModuleDone(moduleId: string, userId: string) {
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

    const module = await prisma.moduleDone.findFirst({
      where: {
        moduleId: moduleId,
        userId: user.id
      }
    });

    if (!user) {
      console.error('Użytkownik o podanym userId nie został znaleziony.');
      return;
    }


    return module
  } catch (error) {
    console.error(error)
  }
}
