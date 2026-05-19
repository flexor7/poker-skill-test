import { useState, useRef } from 'react'
import { DndContext, closestCenter, PointerSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Hand from './Hand'
import PokerTable from './PokerTable'
import Timer from './Timer'
import { getMultiplier, getSpeedBonus } from '../data'

function checkAnswer(q, answer) {
  if (answer == null) return false
  if (q.type === 'choice') return answer === q.correctIndex
  if (q.type === 'numeric') {
    const tol = q.tolerance ?? 0
    return Math.abs(answer - q.correctValue) <= tol
  }
  if (q.type === 'slider') {
    const [min, max] = q.correctRange
    return answer >= min && answer <= max
  }
  if (q.type === 'dnd-sort') {
    if (!Array.isArray(answer) || answer.length !== q.correctOrder.length) return false
    return answer.every((v, i) => v === q.correctOrder[i])
  }
  return false
}

export default function QuestionView({ q, onAnswer, isLast, difficulty, timeLimit, basePoints, currentStreak }) {
  const [revealed, setRevealed] = useState(false)
  const [userAnswer, setUserAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const [earnedThisQ, setEarnedThisQ] = useState(0)
  const [speedTier, setSpeedTier] = useState(0)
  const startTimeRef = useRef(Date.now())
  const elapsedMsRef = useRef(null)

  const submit = (answer) => {
    if (revealed) return
    const elapsed = Date.now() - startTimeRef.current
    elapsedMsRef.current = elapsed
    const correct = checkAnswer(q, answer)

    let earned = 0
    let bonusTier = 0
    if (correct) {
      const newStreak = (currentStreak ?? 0) + 1
      const mult = getMultiplier(newStreak)
      const speedBonus = getSpeedBonus(elapsed, timeLimit)
      bonusTier = speedBonus === 1 ? 2 : speedBonus === 0.5 ? 1 : 0
      earned = Math.round((basePoints ?? 1) * mult * (1 + speedBonus))
    }

    setUserAnswer(answer)
    setIsCorrect(correct)
    setEarnedThisQ(earned)
    setSpeedTier(bonusTier)
    setRevealed(true)
  }

  const handleExpire = () => {
    if (revealed) return
    elapsedMsRef.current = (timeLimit || 0) * 1000
    setTimedOut(true)
    setUserAnswer(null)
    setIsCorrect(false)
    setEarnedThisQ(0)
    setRevealed(true)
  }

  const next = () => onAnswer({ isCorrect, userAnswer, timedOut, elapsedMs: elapsedMsRef.current })

  const newStreak = isCorrect ? (currentStreak ?? 0) + 1 : 0
  const activeMult = getMultiplier(newStreak)

  return (
    <div className="screen question-screen">
      <div className="question-header">
        <div className="difficulty-tag" data-level={difficulty}>{difficultyLabel(difficulty)}</div>
        {timeLimit && <Timer seconds={timeLimit} paused={revealed} onExpire={handleExpire} />}
      </div>

      {q.table && <PokerTable highlight={q.table.highlight} seats={q.table.seats || 9} />}
      {q.hand && <Hand {...q.hand} />}

      <h2 className="question">{q.prompt}</h2>
      {q.description && <p className="description">{q.description}</p>}

      {q.type === 'choice' && (
        <ChoiceInput q={q} revealed={revealed} userIndex={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'numeric' && (
        <NumericInput q={q} revealed={revealed} userValue={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'slider' && (
        <SliderInput q={q} revealed={revealed} userValue={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'dnd-sort' && (
        <DnDSortInput q={q} revealed={revealed} userOrder={userAnswer} isCorrect={isCorrect} onSubmit={submit} />
      )}

      {revealed && earnedThisQ > 0 && (
        <div className="points-flash" key={earnedThisQ}>
          +{earnedThisQ}
          {activeMult > 1 && <span className="mult-tag">×{activeMult}</span>}
          {speedTier === 1 && <span className="speed-tag">FAST</span>}
          {speedTier === 2 && <span className="speed-tag double">BLAZING</span>}
        </div>
      )}

      {revealed && (
        <>
          <div className={`explanation ${isCorrect ? 'good' : timedOut ? 'timeout' : 'bad'}`}>
            <strong>
              {isCorrect ? '✓ Верно.' : timedOut ? '⏱ Время вышло.' : '✗ Неверно.'}
            </strong> {q.explanation}
          </div>
          <button className="primary" onClick={next}>
            {isLast ? 'Итоги →' : 'Дальше →'}
          </button>
        </>
      )}
    </div>
  )
}

function difficultyLabel(d) {
  if (d === 'easy') return 'Лёгкий · 1 очко'
  if (d === 'medium') return 'Средний · 2 очка'
  if (d === 'hard') return 'Сложный · 3 очка'
  return ''
}

function ChoiceInput({ q, revealed, userIndex, onSubmit }) {
  return (
    <div className="options">
      {q.options.map((opt, i) => {
        let cls = 'option'
        if (revealed) {
          if (i === q.correctIndex) cls += ' correct'
          else if (i === userIndex) cls += ' wrong'
        }
        return (
          <button key={i} className={cls} disabled={revealed} onClick={() => onSubmit(i)}>
            {opt}
          </button>
        )
      })}
    </div>
  )
}

function NumericInput({ q, revealed, userValue, onSubmit }) {
  const [val, setVal] = useState('')
  return (
    <div className="numeric-input">
      <div className="input-row">
        <input
          type="number"
          step={q.step ?? 'any'}
          value={revealed ? (userValue ?? '') : val}
          disabled={revealed}
          onChange={(e) => setVal(e.target.value)}
          placeholder={q.placeholder ?? 'Введите число'}
        />
        {q.unit && <span className="unit">{q.unit}</span>}
        {!revealed && (
          <button
            className="primary"
            disabled={val === '' || isNaN(parseFloat(val))}
            onClick={() => onSubmit(parseFloat(val))}
          >
            Ответить
          </button>
        )}
      </div>
      {revealed && (
        <div className="numeric-correct">
          Правильный ответ: <strong>{q.correctValue}{q.unit ?? ''}</strong>
          {q.tolerance ? ` (±${q.tolerance}${q.unit ?? ''})` : ''}
        </div>
      )}
    </div>
  )
}

function SliderInput({ q, revealed, userValue, onSubmit }) {
  const initial = (q.sliderMin ?? 0) + Math.round(((q.sliderMax ?? 100) - (q.sliderMin ?? 0)) / 2)
  const [val, setVal] = useState(initial)
  const display = revealed ? (userValue ?? q.sliderMin ?? 0) : val
  const [min, max] = q.correctRange
  return (
    <div className="slider-input">
      <div className="slider-display">
        <span className="slider-value">{revealed && userValue == null ? '—' : `${display}${q.unit ?? ''}`}</span>
      </div>
      <input
        type="range"
        min={q.sliderMin ?? 0}
        max={q.sliderMax ?? 200}
        step={q.sliderStep ?? 5}
        value={revealed ? (userValue ?? q.sliderMin ?? 0) : val}
        disabled={revealed}
        onChange={(e) => setVal(parseFloat(e.target.value))}
      />
      <div className="slider-range">
        <span>{q.sliderMin ?? 0}{q.unit ?? ''}</span>
        <span>{q.sliderMax ?? 200}{q.unit ?? ''}</span>
      </div>
      {!revealed && (
        <button className="primary" onClick={() => onSubmit(val)}>Ответить</button>
      )}
      {revealed && (
        <div className="slider-correct">
          Оптимальный диапазон: <strong>{min}-{max}{q.unit ?? ''}</strong>
        </div>
      )}
    </div>
  )
}

function DnDSortInput({ q, revealed, userOrder, isCorrect, onSubmit }) {
  const [items, setItems] = useState(() => [...q.items])
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setItems((prev) => {
      const oldIdx = prev.indexOf(active.id)
      const newIdx = prev.indexOf(over.id)
      return arrayMove(prev, oldIdx, newIdx)
    })
  }

  const displayItems = revealed ? (userOrder ?? items) : items

  return (
    <div className="dnd-sort">
      <div className="dnd-hint">{q.dndHint ?? 'Перетащите элементы — сверху самое подходящее'}</div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={displayItems} strategy={verticalListSortingStrategy}>
          {displayItems.map((item, i) => (
            <SortableItem
              key={item}
              id={item}
              label={q.itemLabels?.[item] ?? item}
              disabled={revealed}
              correctIdx={revealed ? q.correctOrder.indexOf(item) : null}
              currentIdx={i}
            />
          ))}
        </SortableContext>
      </DndContext>
      {!revealed && (
        <button className="primary" onClick={() => onSubmit(items)}>Ответить</button>
      )}
      {revealed && !isCorrect && (
        <div className="dnd-correct">
          <div className="dnd-correct-label">Правильный порядок:</div>
          <ol>
            {q.correctOrder.map((it) => <li key={it}>{q.itemLabels?.[it] ?? it}</li>)}
          </ol>
        </div>
      )}
    </div>
  )
}

function SortableItem({ id, label, disabled, correctIdx, currentIdx }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1
  }
  let cls = 'dnd-item'
  if (disabled && correctIdx != null) {
    cls += correctIdx === currentIdx ? ' correct' : ' wrong'
  }
  return (
    <div ref={setNodeRef} style={style} className={cls} {...attributes} {...listeners}>
      <span className="dnd-index">{currentIdx + 1}</span>
      <span className="dnd-label">{label}</span>
      {disabled && correctIdx != null && correctIdx !== currentIdx && (
        <span className="dnd-should-be">→ #{correctIdx + 1}</span>
      )}
    </div>
  )
}
