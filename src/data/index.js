import { easyQuestions } from './easy'
import { mediumQuestions } from './medium'
import { hardQuestions } from './hard'

export { easyQuestions, mediumQuestions, hardQuestions }

export const DIFFICULTY_POINTS = { easy: 1, medium: 2, hard: 3 }
export const QUESTIONS_PER_SECTION = 10
export const MAX_SCORE = 10 * 1 + 10 * 2 + 10 * 3

export const SECTIONS = [
  { id: 'easy', title: 'Лёгкий', subtitle: 'Правила, термины, базовая теория', points: 1, pool: easyQuestions },
  { id: 'medium', title: 'Средний', subtitle: 'Pot odds, equity, диапазоны', points: 2, pool: mediumQuestions },
  { id: 'hard', title: 'Сложный', subtitle: 'GTO-концепции, ICM, продвинутый постфлоп', points: 3, pool: hardQuestions }
]

export function pickN(arr, n) {
  if (arr.length <= n) return [...arr]
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}
