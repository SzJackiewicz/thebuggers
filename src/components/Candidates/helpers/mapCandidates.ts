import { link } from 'fs'

export const mapCandidates = (candidates) => {
  return candidates.map((el) => ({
    id: el.id,
    name: el.name + ' ' + el.surname,
    email: el.email,
    link: el.link,
    role: 'Kandydat',
    avatar: el.name[0].toUpperCase() + el.surname[0].toUpperCase(),
    lastSeen: null,
    testId: el.testId,
    answers: el.answers,
  }))
}
