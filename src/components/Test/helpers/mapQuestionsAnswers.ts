export const mapQuestions = (q) => {
  const result = {}
  q.forEach((el: any) => {
    result[el.id] = ''
  })

  return result
}
