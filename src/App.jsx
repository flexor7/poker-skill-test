import { useState } from 'react'
import { SECTIONS, QUESTIONS_PER_SECTION, MAX_SCORE, pickN } from './data'
import QuestionView from './components/QuestionView'
import Progress from './components/Progress'
import './App.css'

export default function App() {
  const [stage, setStage] = useState('welcome')
  const [sectionIdx, setSectionIdx] = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [batches, setBatches] = useState(null)
  const [score, setScore] = useState(0)
  const [sectionScores, setSectionScores] = useState({ easy: 0, medium: 0, hard: 0 })

  const start = () => {
    const newBatches = Object.fromEntries(
      SECTIONS.map(s => [s.id, pickN(s.pool, QUESTIONS_PER_SECTION)])
    )
    setBatches(newBatches)
    setSectionIdx(0)
    setQuestionIdx(0)
    setScore(0)
    setSectionScores({ easy: 0, medium: 0, hard: 0 })
    setStage('section-intro')
  }

  const beginSection = () => setStage('question')

  const handleAnswer = ({ isCorrect }) => {
    const section = SECTIONS[sectionIdx]
    const points = isCorrect ? section.points : 0
    setScore(s => s + points)
    setSectionScores(prev => ({ ...prev, [section.id]: prev[section.id] + points }))

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

  if (stage === 'section-intro') {
    return (
      <>
        <SectionIntro section={section} onBegin={beginSection} />
        <Progress score={score} sectionIndex={sectionIdx} sectionTotal={SECTIONS.length} />
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
          isLast={isLast}
          onAnswer={handleAnswer}
        />
        <Progress
          score={score}
          sectionIndex={sectionIdx}
          sectionTotal={SECTIONS.length}
          questionIndex={questionIdx}
          questionTotal={QUESTIONS_PER_SECTION}
        />
      </>
    )
  }

  if (stage === 'final-results') {
    return <Results score={score} sectionScores={sectionScores} onRestart={restart} />
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
      <p className="subtitle">3 уровня по 10 вопросов · максимум {MAX_SCORE} очков</p>

      <div className="sections-preview">
        {SECTIONS.map(s => (
          <div key={s.id} className={`section-card section-${s.id}`}>
            <div className="section-title">{s.title}</div>
            <div className="section-points">{s.points} {pointWord(s.points)} × 10</div>
            <div className="section-subtitle">{s.subtitle}</div>
          </div>
        ))}
      </div>

      <ul className="info">
        <li>Вопросы выбираются случайно из пула — каждое прохождение разное</li>
        <li>4 типа: выбор варианта · ввод числа · слайдер · drag&drop сортировка</li>
        <li>После каждого ответа — пояснение</li>
        <li>В конце — детальная разбивка по разделам</li>
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
        <li><strong>{section.points} {pointWord(section.points)}</strong> за каждый правильный ответ</li>
        <li>Максимум за раздел: <strong>{section.points * 10} очков</strong></li>
      </ul>
      <button className="primary big" onClick={onBegin}>Поехали →</button>
    </div>
  )
}

function Results({ score, sectionScores, onRestart }) {
  const pct = Math.round((score / MAX_SCORE) * 100)
  let level, comment
  if (pct >= 90) {
    level = 'Эксперт'
    comment = 'Глубокое владение теорией покера — от базы до GTO-концепций. Дальше — практика, solver, и работа над эксплойтами.'
  } else if (pct >= 75) {
    level = 'Уверенный игрок'
    comment = 'Сильное понимание игры. Базы освоены, продвинутая теория частично закрыта. Зона роста — GTO-инструменты и hand reading.'
  } else if (pct >= 55) {
    level = 'Средний уровень'
    comment = 'Базовая теория знакома, но в сложных спотах решения интуитивные. Стоит углубиться в ranges, MDF, equity realization.'
  } else if (pct >= 35) {
    level = 'Начальный уровень'
    comment = 'Правила и базовые концепции на месте, но математика (pot odds, equity) и продвинутая стратегия требуют работы.'
  } else {
    level = 'Только начало'
    comment = 'Имеет смысл начать с фундаментальных книг (Sklansky, Harrington) и базовых видеокурсов по NL Hold\'em.'
  }
  return (
    <div className="screen results">
      <h1>Итоги</h1>
      <div className="big-score">
        <span className="score-num">{score}</span>
        <span className="score-of">/ {MAX_SCORE}</span>
      </div>
      <div className="big-pct">{pct}%</div>
      <div className="level">{level}</div>
      <p className="comment">{comment}</p>

      <div className="section-breakdown">
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
