import { useState } from 'react'
import { allQuestions } from './data/questions'
import './App.css'

function App() {
  const [stage, setStage] = useState('welcome')
  const [answers, setAnswers] = useState([])
  const [idx, setIdx] = useState(0)
  const [revealed, setRevealed] = useState(null)

  const total = allQuestions.length
  const current = allQuestions[idx]

  const start = () => {
    setStage('quiz')
    setIdx(0)
    setAnswers([])
    setRevealed(null)
  }

  const choose = (i) => {
    if (revealed !== null) return
    setRevealed(i)
  }

  const next = () => {
    const isCorrect = revealed === current.correctIndex
    const nextAnswers = [...answers, { id: current.id, chosen: revealed, isCorrect }]
    setAnswers(nextAnswers)
    setRevealed(null)
    if (idx + 1 >= total) {
      setStage('results')
    } else {
      setIdx(idx + 1)
    }
  }

  const restart = () => {
    setStage('welcome')
    setAnswers([])
    setIdx(0)
    setRevealed(null)
  }

  if (stage === 'welcome') return <Welcome onStart={start} total={total} />
  if (stage === 'results') return <Results answers={answers} onRestart={restart} />
  return (
    <QuestionView
      q={current}
      idx={idx}
      total={total}
      revealed={revealed}
      onChoose={choose}
      onNext={next}
    />
  )
}

function Welcome({ onStart, total }) {
  return (
    <div className="screen welcome">
      <h1>Poker Skill Test</h1>
      <p className="subtitle">Интерактивный тест на понимание уровня в No-Limit Hold'em</p>
      <ul className="info">
        <li>{total} вопросов: теория + разборы раздач</li>
        <li>После каждого ответа — пояснение</li>
        <li>В конце — оценка уровня</li>
      </ul>
      <button className="primary" onClick={onStart}>Начать тест</button>
    </div>
  )
}

function QuestionView({ q, idx, total, revealed, onChoose, onNext }) {
  const isCorrect = revealed !== null && revealed === q.correctIndex
  const last = idx + 1 >= total

  return (
    <div className="screen">
      <div className="progress">
        Вопрос {idx + 1} / {total} · {q.type === 'theory' ? 'Теория' : 'Раздача'}
      </div>

      {q.type === 'hand' && <HandView q={q} />}

      <h2 className="question">{q.type === 'theory' ? q.question : q.title}</h2>
      {q.type === 'hand' && <p className="description">{q.description}</p>}

      <div className="options">
        {q.options.map((opt, i) => {
          let cls = 'option'
          if (revealed !== null) {
            if (i === q.correctIndex) cls += ' correct'
            else if (i === revealed) cls += ' wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => onChoose(i)}
              disabled={revealed !== null}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {revealed !== null && (
        <div className={`explanation ${isCorrect ? 'good' : 'bad'}`}>
          <strong>{isCorrect ? '✓ Верно.' : '✗ Неверно.'}</strong> {q.explanation}
        </div>
      )}

      {revealed !== null && (
        <button className="primary" onClick={onNext}>
          {last ? 'Результаты →' : 'Дальше →'}
        </button>
      )}
    </div>
  )
}

function HandView({ q }) {
  return (
    <div className="hand">
      {q.position && <div className="position">Позиция: {q.position}</div>}
      <div className="cards-row">
        <div className="cards-label">Hero</div>
        <div className="cards">
          {q.hero.map((c, i) => <Card key={i} card={c} />)}
        </div>
      </div>
      {q.board.length > 0 && (
        <div className="cards-row">
          <div className="cards-label">Board</div>
          <div className="cards">
            {q.board.map((c, i) => <Card key={i} card={c} />)}
          </div>
        </div>
      )}
    </div>
  )
}

function Card({ card }) {
  const isRed = card.includes('♥') || card.includes('♦')
  return <span className={`card ${isRed ? 'red' : 'black'}`}>{card}</span>
}

function Results({ answers, onRestart }) {
  const correct = answers.filter(a => a.isCorrect).length
  const total = answers.length
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100)

  let level, comment
  if (pct >= 90) {
    level = 'Pro'
    comment = 'Уверенное владение теорией и принятием решений. Готовы к разбору сложных линий и работе с GTO-софтом.'
  } else if (pct >= 70) {
    level = 'Advanced'
    comment = 'Сильный игрок: понимает позиции, диапазоны, базовую математику. Стоит углубляться в эксплойт и пост-флоп.'
  } else if (pct >= 50) {
    level = 'Intermediate'
    comment = 'Средний уровень: базовые концепции на месте, но решения в нестандартных спотах требуют работы.'
  } else if (pct >= 30) {
    level = 'Beginner+'
    comment = 'Начальный уровень: правила понятны, но математика и стратегия диапазонов ещё формируются.'
  } else {
    level = 'Beginner'
    comment = 'Только знакомство с игрой. Стоит начать с базы: позиции, стартовые руки, pot odds.'
  }

  return (
    <div className="screen results">
      <h1>Результаты</h1>
      <div className="score">{correct} / {total}</div>
      <div className="pct">{pct}%</div>
      <div className="level">{level}</div>
      <p className="comment">{comment}</p>
      <button className="primary" onClick={onRestart}>Пройти заново</button>
    </div>
  )
}

export default App
