import { easyQuestions } from './easy'
import { mediumQuestions } from './medium'
import { hardQuestions } from './hard'

export { easyQuestions, mediumQuestions, hardQuestions }

export const DIFFICULTY_POINTS = { easy: 1, medium: 2, hard: 3 }
export const QUESTIONS_PER_SECTION = 10
export const MAX_SCORE = 10 * 1 + 10 * 2 + 10 * 3

export const SECTIONS = [
  { id: 'easy', title: 'Лёгкий', subtitle: 'Правила, термины, базовая теория', points: 1, timeLimit: 15, pool: easyQuestions },
  { id: 'medium', title: 'Средний', subtitle: 'Pot odds, equity, диапазоны', points: 2, timeLimit: 30, pool: mediumQuestions },
  { id: 'hard', title: 'Сложный', subtitle: 'GTO-концепции, ICM, продвинутый постфлоп', points: 3, timeLimit: 45, pool: hardQuestions }
]

export const SKILL_CATEGORIES = [
  { id: 'rules', label: 'Правила и термины', color: '#4493f8' },
  { id: 'math', label: 'Математика', color: '#d29922' },
  { id: 'position', label: 'Позиции и стилы', color: '#3fb950' },
  { id: 'ranges', label: 'Диапазоны', color: '#a371f7' },
  { id: 'pushfold', label: 'Push/Fold', color: '#f78166' },
  { id: 'icm', label: 'ICM и бабл', color: '#db61a2' },
  { id: 'bounty', label: 'KO / PKO', color: '#bc8cff' },
  { id: 'gto', label: 'GTO / Solver', color: '#5ed3f3' },
  { id: 'meta', label: 'Структура / банкролл', color: '#8b949e' }
]

const TAG_RULES = [
  { tag: 'icm', re: /\bicm\b|bubble|пузыр|risk premium|pay.?jump|bubble factor|\bfgs\b|финал.?тейбл|final table|финалк/ },
  { tag: 'bounty', re: /\bko\b|bount|knockout|нокаут|\bpko\b|mystery bounty/ },
  { tag: 'gto', re: /\bgto\b|\bmdf\b|solver|nash|polariz|поляризован|equilibrium|optimal frequency|bluff freq|blocker|range advantage|nut advantage|merging|sklansky|indifferen/ },
  { tag: 'pushfold', re: /push.?fold|шов|\bjam\b|all.?in|all in|open.?shove|re.?shove|stop.?and.?go|шов.?дальше|шовить/ },
  { tag: 'math', re: /equity|pot odds|расч[её]т|формул|probabili|вероятност|outs|аутов|equity vs|expected value|ev formula/ },
  { tag: 'ranges', re: /range|диапазон|3.?bet|4.?bet|squeeze|defending|opening range|calling range/ },
  { tag: 'position', re: /\bbtn\b|\butg\b|\bsb\b|\bbb\b|\bco\b|\bmp\b|cut.?off|hijack|lojack|button|позици/ },
  { tag: 'meta', re: /bankroll|stak|back|\broi\b|этик|etiquette|slow.?roll|string bet|verbal|muck|перерыв|late reg|colour up|color up|структур|\bsng\b|\bmtt\b|satellite|\bgtd\b|rebuy|re.?entry|add.?on|antэ|анте|antes/ },
  { tag: 'rules', re: /правил|термин|шоудаун|showdown|kicker|hand ranking|карт |колод|flush|straight|пара|стрит|флэш|каре/ }
]

export function inferTags(question) {
  const text = ((question.prompt || '') + ' ' + (question.explanation || '')).toLowerCase()
  const found = []
  for (const { tag, re } of TAG_RULES) {
    if (re.test(text)) found.push(tag)
    if (found.length >= 2) break
  }
  if (found.length === 0) found.push('rules')
  return found
}

export function getMultiplier(streak) {
  if (streak >= 10) return 5
  if (streak >= 6) return 3
  if (streak >= 3) return 2
  return 1
}

export function getSpeedBonus(elapsedMs, timeLimitSec) {
  if (!timeLimitSec) return 0
  const ratio = elapsedMs / 1000 / timeLimitSec
  if (ratio < 0.3) return 1.0
  if (ratio < 0.5) return 0.5
  return 0
}

export function getRank(pct) {
  if (pct >= 90) return { id: 'crusher', label: 'Crusher' }
  if (pct >= 75) return { id: 'reg', label: 'Reg' }
  if (pct >= 55) return { id: 'rec', label: 'Recreational' }
  if (pct >= 35) return { id: 'casual', label: 'Любитель' }
  return { id: 'newb', label: 'Newbie' }
}

export function pickN(arr, n) {
  if (arr.length <= n) return [...arr]
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}
