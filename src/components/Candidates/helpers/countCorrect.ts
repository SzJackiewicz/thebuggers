export const countCorrect = (person, tests) => {
  let right = 0
  const test = tests.find(({ id }) => person.testId === id)
  test.questions.forEach((q) => {
    const answer = person.answers.find(({ key }) => key === q.id)
    if (answer?.value === q.answear) {
      right = +1
    }
  })

  return `${right} / ${test.questions.filter(({ answear }) => Boolean(answear)).length}`
}
