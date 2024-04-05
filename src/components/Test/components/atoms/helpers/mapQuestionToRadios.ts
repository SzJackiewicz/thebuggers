export const mapQuestionToRadios = (question) => {
  return question.question.value.document.children[0].children[0].value
    .split(':')[1]
    .split('\n')
    .filter(Boolean)
    .map((q) => ({
      id: q.split('.')[0],
      title: q.split('. ')[1],
      users: 'Odpowiedz: ' + q.split('.')[0],
      description: 'Zaznacz odpowiedz',
    }))
}
