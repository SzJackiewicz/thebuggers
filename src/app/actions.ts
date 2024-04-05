import { redirect } from 'next/navigation'

export default async function navigate(url: string) {
  try {
    await redirect(url)
  } catch (err) {
    console.error(err)
  }
}
