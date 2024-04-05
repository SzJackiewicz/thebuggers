export const mapQuestionToTitle = (question, title: string) => {
  return question.question.value.document.children[0].children[0].value.split(':')[0]
}
