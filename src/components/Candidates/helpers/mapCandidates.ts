export const mapCandidates = (candidates) => {
  return candidates.map((el) => ({
    id: el.id,
    name: el.name + ' ' + el.surname,
    email: el.email,
    role: 'Kandydat',
    avatar: el.name[0].toUpperCase() + el.surname[0].toUpperCase(),
    lastSeen: null,
  }))
}
