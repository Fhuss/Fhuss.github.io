export function normalizeAnswer(str) {
  return String(str ?? "").trim().toLowerCase()
}

export function isTextAnswerCorrect(input, correctAnswers) {
  const normalized = normalizeAnswer(input)
  const accepted = (Array.isArray(correctAnswers) ? correctAnswers : [correctAnswers]).map((a) =>
    normalizeAnswer(String(a))
  )
  return accepted.some((a) => a === normalized)
}
