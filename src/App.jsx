import { useState } from 'react'
import {
  SECTIONS,
  QUESTIONS_PER_SECTION,
  MAX_SCORE,
  SKILL_CATEGORIES,
  pickN,
  inferTags,
  getMultiplier,
  getSpeedBonus,
  getRank
} from './data'
import QuestionView from './components/QuestionView'
import Progress from './components/Progress'
import './App.css'

export default function App() {
  const [stage, setStage] = useState('welcome')
  const [sectionIdx, setSectionIdx] = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [batches, setBatches] = useState(null)
  const [score, setScore] = useState(0)
  const [baseScore, setBaseScore] = useState(0)
  const [sectionScores, setSectionScores] = useState({ easy: 0, medium: 0, hard: 0 })
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [tagPoints, setTagPoints] = useState({})
  const [tagMaxPoints, setTagMaxPoints] = useState({})

  const start = () => {
    const newBatches = Object.fromEntries(
      SECTIONS.map(s => [s.id, pickN(s.pool, QUESTIONS_PER_SECTION)])
    )
    setBatches(newBatches)
    setSectionIdx(0)
    setQuestionIdx(0)
    setScore(0)
    setBaseScore(0)
    setSectionScores({ easy: 0, medium: 0, hard: 0 })
    setStreak(0)
    setMaxStreak(0)
    setTagPoints({})
    setTagMaxPoints({})
    setStage('section-intro')
  }

  const beginSection = () => setStage('question')

  const handleAnswer = ({ isCorrect, elapsedMs }) => {
    const section = SECTIONS[sectionIdx]
    const basePoints = section.points
    const q = batches[section.id][questionIdx]
    const tags = inferTags(q)

    setTagMaxPoints(prev => {
      const next = { ...prev }
      for (const t of tags) next[t] = (next[t] || 0) + basePoints
      return next
    })

    if (isCorrect) {
      const newStreak = streak + 1
      setStreak(newStreak)
      if (newStreak > maxStreak) setMaxStreak(newStreak)

      const mult = getMultiplier(newStreak)
      const speedBonus = getSpeedBonus(elapsedMs ?? Infinity, section.timeLimit)
      const earned = Math.round(basePoints * mult * (1 + speedBonus))

      setScore(s => s + earned)
      setBaseScore(b => b + basePoints)
      setSectionScores(prev => ({ ...prev, [section.id]: prev[section.id] + basePoints }))
      setTagPoints(prev => {
        const next = { ...prev }
        for (const t of tags) next[t] = (next[t] || 0) + basePoints
        return next
      })
    } else {
      setStreak(0)
    }

    if (questionIdx + 1 < QUESTIONS_PER_SECTION) {
      setQuestionIdx(questionIdx + 1)
    } else if (sectionIdx + 1 < SECTIONS.length) {
      setSectionIdx(sectionIdx + 1)
      setQuestionIdx(0)
      setStage('section-intro')
    } else {
      setStage('final-results')
    }
  }

  const restart = () => setStage('welcome')

  if (stage === 'welcome') {
    return <Welcome onStart={start} />
  }

  const section = SECTIONS[sectionIdx]
  const batch = batches?.[section.id] ?? []
  const question = batch[questionIdx]
  const multiplier = getMultiplier(streak)

  if (stage === 'section-intro') {
    return (
      <>
        <SectionIntro section={section} onBegin={beginSection} />
        <Progress
          score={score}
          streak={streak}
          multiplier={multiplier}
          sectionIndex={sectionIdx}
          sectionTotal={SECTIONS.length}
        />
      </>
    )
  }

  if (stage === 'question' && question) {
    const isLast = sectionIdx === SECTIONS.length - 1 && questionIdx === QUESTIONS_PER_SECTION - 1
    return (
      <>
        <QuestionView
          key={`${section.id}-${questionIdx}-${question.id}`}
          q={question}
          difficulty={section.id}
          timeLimit={section.timeLimit}
          basePoints={section.points}
          currentStreak={streak}
          isLast={isLast}
          onAnswer={handleAnswer}
        />
        <Progress
          score={score}
          streak={streak}
          multiplier={multiplier}
          sectionIndex={sectionIdx}
          sectionTotal={SECTIONS.length}
          questionIndex={questionIdx}
          questionTotal={QUESTIONS_PER_SECTION}
        />
      </>
    )
  }

  if (stage === 'final-results') {
    return (
      <Results
        score={score}
        baseScore={baseScore}
        sectionScores={sectionScores}
        maxStreak={maxStreak}
        tagPoints={tagPoints}
        tagMaxPoints={tagMaxPoints}
        onRestart={restart}
      />
    )
  }

  return null
}

function pointWord(n) {
  if (n === 1) return 'очко'
  if (n >= 2 && n <= 4) return 'очка'
  return 'очков'
}

function Welcome({ onStart }) {
  return (
    <div className="screen welcome">
      <h1>Poker Skill Test</h1>
      <p className="subtitle">3 уровня · база {MAX_SCORE} очков · бонусы за streak и скорость</p>

      <div className="sections-preview">
        {SECTIONS.map(s => (
          <div key={s.id} className={`section-card section-${s.id}`}>
            <div className="section-title">{s.title}</div>
            <div className="section-points">{s.points} {pointWord(s.points)} × 10</div>
            <div className="section-time">⏱ {s.timeLimit}с на ответ</div>
            <div className="section-subtitle">{s.subtitle}</div>
          </div>
        ))}
      </div>

      <ul className="info">
        <li>В каждом разделе — 10 случайных вопросов из пула в 100</li>
        <li>Streak правильных ответов даёт <strong>x2 / x3 / x5</strong> множитель к очкам</li>
        <li>Ответ за половину времени — <strong>+50%</strong>, за треть — <strong>+100%</strong></li>
        <li>В итогах — разбивка по 9 категориям навыков и финальный ранг</li>
      </ul>

      <button className="primary big" onClick={onStart}>Начать тест</button>
    </div>
  )
}

function SectionIntro({ section, onBegin }) {
  return (
    <div className="screen section-intro">
      <div className="big-difficulty" data-level={section.id}>{section.title}</div>
      <div className="section-detail">{section.subtitle}</div>
      <ul className="info">
        <li>10 случайных вопросов из пула в {section.pool.length}</li>
        <li><strong>{section.points} {pointWord(section.points)}</strong> за правильный ответ</li>
        <li>⏱ <strong>{section.timeLimit} секунд</strong> на ответ</li>
        <li>Максимум за раздел: <strong>{section.points * 10} очков</strong> (плюс бонусы)</li>
      </ul>
      <button className="primary big" onClick={onBegin}>Поехали →</button>
    </div>
  )
}

function Results({ score, baseScore, sectionScores, maxStreak, tagPoints, tagMaxPoints, onRestart }) {
  const basePct = Math.round((baseScore / MAX_SCORE) * 100)
  const bonus = score - baseScore
  const rank = getRank(basePct)

  let comment
  if (basePct >= 90) comment = 'Глубокое владение турнирной теорией. Дальше — solver, эксплойты, hand reading на heads-up.'
  else if (basePct >= 75) comment = 'Сильное понимание игры. База и среднеуровневые концепции в кармане, GTO частично закрыто.'
  else if (basePct >= 55) comment = 'Базовая теория есть, но в сложных спотах решения интуитивные. Зона роста — ICM, ranges, MDF.'
  else if (basePct >= 35) comment = 'Правила знакомы, математика и продвинутая стратегия — следующая ступень.'
  else comment = 'Стоит начать с фундаментальных книг и базовых видеокурсов по NL Hold\'em.'

  const skillRows = SKILL_CATEGORIES
    .map(cat => {
      const earned = tagPoints[cat.id] || 0
      const max = tagMaxPoints[cat.id] || 0
      if (max === 0) return null
      const pct = Math.round((earned / max) * 100)
      return { ...cat, earned, max, pct }
    })
    .filter(Boolean)

  return (
    <div className="screen results">
      <div className="rank-badge" data-rank={rank.id}>{rank.label}</div>

      <div className="big-score">
        <span className="score-num">{score}</span>
        <span className="score-of">очков</span>
      </div>
      <div className="big-pct">
        База: {baseScore}/{MAX_SCORE} ({basePct}%) · Бонусы: <span className="bonus-num">+{bonus}</span>
      </div>

      <p className="comment">{comment}</p>

      <div className="stats-row">
        <div className="stat-chip">
          <div className="stat-num">{maxStreak}</div>
          <div className="stat-label">макс. streak</div>
        </div>
        <div className="stat-chip">
          <div className="stat-num">{bonus}</div>
          <div className="stat-label">бонусы</div>
        </div>
        <div className="stat-chip">
          <div className="stat-num">{baseScore}/30</div>
          <div className="stat-label">правильных</div>
        </div>
      </div>

      <div className="skill-breakdown">
        <h3 className="breakdown-title">Навыки</h3>
        {skillRows.map(s => (
          <div key={s.id} className="skill-row">
            <span className="skill-label" style={{ color: s.color }}>{s.label}</span>
            <span className="skill-score">{s.earned}/{s.max}</span>
            <span className="skill-bar">
              <span className="skill-fill" style={{ width: `${s.pct}%`, background: s.color }} />
            </span>
            <span className="skill-pct">{s.pct}%</span>
          </div>
        ))}
      </div>

      <div className="section-breakdown">
        <h3 className="breakdown-title">По разделам</h3>
        {SECTIONS.map(s => {
          const max = s.points * 10
          const got = sectionScores[s.id] ?? 0
          const sp = max === 0 ? 0 : Math.round((got / max) * 100)
          return (
            <div key={s.id} className="breakdown-row">
              <span className="bd-label">{s.title}</span>
              <span className="bd-score">{got}/{max}</span>
              <span className="bd-bar">
                <span className={`bd-fill section-${s.id}`} style={{ width: `${sp}%` }} />
              </span>
              <span className="bd-pct">{sp}%</span>
            </div>
          )
        })}
      </div>

      <button className="primary big" onClick={onRestart}>Пройти заново</button>
    </div>
  )
}
