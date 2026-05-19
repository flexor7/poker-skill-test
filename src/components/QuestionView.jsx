import { useState, useRef } from 'react'
import { DndContext, closestCenter, PointerSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Hand from './Hand'
import PokerTable from './PokerTable'
import HandBattle from './HandBattle'
import Card from './Card'
import Timer from './Timer'
import { getMultiplier, getSpeedBonus } from '../data'

function checkAnswer(q, answer) {
  if (answer == null) return false
  if (q.type === 'choice') return answer === q.correctIndex
  if (q.type === 'action') return answer === q.correctId
  if (q.type === 'click-position') return answer === q.correctPosition
  if (q.type === 'hand-battle') return answer === q.correctId
  if (q.type === 'numeric' || q.type === 'equity-guess') {
    const tol = q.tolerance ?? 0
    return Math.abs(answer - q.correctValue) <= tol
  }
  if (q.type === 'slider' || q.type === 'stack-bet') {
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

  const showStandardHandBlock = q.hand && q.type !== 'hand-battle' && q.type !== 'equity-guess'
  const showStandardTableBlock = q.table && q.type !== 'click-position'

  return (
    <div className="screen question-screen">
      <div className="question-header">
        <div className="difficulty-tag" data-level={difficulty}>{difficultyLabel(difficulty)}</div>
        {timeLimit && <Timer seconds={timeLimit} paused={revealed} onExpire={handleExpire} />}
      </div>

      {showStandardTableBlock && <PokerTable highlight={q.table.highlight} seats={q.table.seats || 9} />}
      {showStandardHandBlock && <Hand {...q.hand} />}

      {q.prompt && <h2 className="question">{q.prompt}</h2>}
      {q.description && <p className="description">{q.description}</p>}

      {q.type === 'choice' && (
        <ChoiceInput q={q} revealed={revealed} userIndex={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'action' && (
        <ActionInput q={q} revealed={revealed} userId={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'click-position' && (
        <ClickPositionInput q={q} revealed={revealed} userPos={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'hand-battle' && (
        <HandBattleInput q={q} revealed={revealed} userId={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'equity-guess' && (
        <EquityGuessInput q={q} revealed={revealed} userValue={userAnswer} onSubmit={submit} />
      )}
      {q.type === 'stack-bet' && (
        <StackBetInput q={q} revealed={revealed} userValue={userAnswer} onSubmit={submit} />
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

const ACTION_STYLES = {
  fold: { label: 'FOLD', cls: 'fold' },
  call: { label: 'CALL', cls: 'call' },
  check: { label: 'CHECK', cls: 'call' },
  raise: { label: 'RAISE', cls: 'raise' },
  three_bet: { label: '3-BET', cls: 'raise' },
  shove: { label: 'ALL-IN', cls: 'shove' },
  jam: { label: 'ALL-IN', cls: 'shove' }
}

function ActionInput({ q, revealed, userId, onSubmit }) {
  return (
    <div className="action-grid">
      {q.options.map((opt) => {
        const style = ACTION_STYLES[opt.id] ?? { label: opt.label, cls: 'neutral' }
        let cls = `action-btn ${style.cls}`
        if (revealed) {
          if (opt.id === q.correctId) cls += ' correct'
          else if (opt.id === userId) cls += ' wrong'
          else cls += ' dim'
        }
        return (
          <button key={opt.id} type="button" className={cls} disabled={revealed} onClick={() => onSubmit(opt.id)}>
            <div className="action-label">{opt.label || style.label}</div>
            {opt.sublabel && <div className="action-sublabel">{opt.sublabel}</div>}
          </button>
        )
      })}
    </div>
  )
}

function ClickPositionInput({ q, revealed, userPos, onSubmit }) {
  return (
    <div className="click-position">
      <div className="cp-hint">Тыкни на правильное место за столом</div>
      <PokerTable
        seats={q.seats || 9}
        clickable={!revealed}
        selectedPosition={revealed ? userPos : null}
        correctPosition={revealed ? q.correctPosition : null}
        onSeatClick={(pos) => onSubmit(pos)}
      />
    </div>
  )
}

function HandBattleInput({ q, revealed, userId, onSubmit }) {
  return (
    <HandBattle
      hands={q.hands}
      board={q.board || []}
      selectedId={userId}
      correctId={revealed ? q.correctId : null}
      revealed={revealed}
      onSelect={(id) => onSubmit(id)}
    />
  )
}

function EquityGuessInput({ q, revealed, userValue, onSubmit }) {
  const [val, setVal] = useState(50)
  const display = revealed ? (userValue ?? 50) : val
  return (
    <div className="equity-guess">
      <div className="equity-hands">
        <div className="equity-side">
          <div className="equity-label">{q.leftLabel || 'Hand A'}</div>
          <div className="cards-row equity-cards">
            {q.leftHand.map((c, i) => <Card key={i} card={c} size="lg" />)}
          </div>
          <div className={`equity-pct ${revealed ? 'revealed' : ''}`}>{display}%</div>
        </div>
        <div className="equity-vs">VS</div>
        <div className="equity-side">
          <div className="equity-label">{q.rightLabel || 'Hand B'}</div>
          <div className="cards-row equity-cards">
            {q.rightHand.map((c, i) => <Card key={i} card={c} size="lg" />)}
          </div>
          <div className={`equity-pct ${revealed ? 'revealed right' : ''}`}>{100 - display}%</div>
        </div>
      </div>
      {q.board && q.board.length > 0 && (
        <div className="equity-board">
          <span className="cards-label">Board</span>
          <div className="cards-row">
            {q.board.map((c, i) => <Card key={i} card={c} size="md" />)}
          </div>
        </div>
      )}
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={revealed ? (userValue ?? 50) : val}
        disabled={revealed}
        onChange={(e) => setVal(parseFloat(e.target.value))}
        className="equity-slider"
      />
      {!revealed && (
        <button className="primary" onClick={() => onSubmit(val)}>Угадать</button>
      )}
      {revealed && (
        <div className="numeric-correct">
          Реальная equity {q.leftLabel || 'A'}: <strong>{q.correctValue}%</strong>
          {q.tolerance ? ` (±${q.tolerance}%)` : ''}
        </div>
      )}
    </div>
  )
}

function StackBetInput({ q, revealed, userValue, onSubmit }) {
  const initial = (q.sliderMin ?? 0) + Math.round(((q.sliderMax ?? 100) - (q.sliderMin ?? 0)) / 2)
  const [val, setVal] = useState(initial)
  const display = revealed ? (userValue ?? q.sliderMin ?? 0) : val
  const [min, max] = q.correctRange
  const max_slider = q.sliderMax ?? 200
  const fillPct = (display / max_slider) * 100

  return (
    <div className="stack-bet">
      <div className="stack-bet-pot">
        <div className="stack-pot-label">Pot: <strong>{q.pot ?? 100}</strong></div>
        {q.handHint && <div className="stack-hint">{q.handHint}</div>}
      </div>
      <div className="stack-meter">
        <div className="stack-meter-fill" style={{ width: `${Math.min(100, fillPct)}%` }} />
        {!revealed && (
          <>
            <div className="stack-meter-marker" style={{ left: `${(min / max_slider) * 100}%` }} />
            <div className="stack-meter-marker" style={{ left: `${(max / max_slider) * 100}%` }} />
          </>
        )}
        {revealed && (
          <div
            className="stack-meter-target"
            style={{
              left: `${(min / max_slider) * 100}%`,
              width: `${((max - min) / max_slider) * 100}%`
            }}
          />
        )}
      </div>
      <div className="stack-display">
        <span className="stack-value">{display}{q.unit ?? '%'}</span>
        {q.pot && <span className="stack-derived">≈ {Math.round(display * q.pot / 100)} chips</span>}
      </div>
      <input
        type="range"
        min={q.sliderMin ?? 0}
        max={q.sliderMax ?? 200}
        step={q.sliderStep ?? 5}
        value={revealed ? (userValue ?? q.sliderMin ?? 0) : val}
        disabled={revealed}
        onChange={(e) => setVal(parseFloat(e.target.value))}
        className="stack-slider"
      />
      <div className="slider-range">
        <span>{q.sliderMin ?? 0}{q.unit ?? '%'}</span>
        <span>{q.sliderMax ?? 200}{q.unit ?? '%'}</span>
      </div>
      {!revealed && (
        <button className="primary" onClick={() => onSubmit(val)}>Поставить</button>
      )}
      {revealed && (
        <div className="slider-correct">
          Оптимальный диапазон: <strong>{min}-{max}{q.unit ?? '%'}</strong>
        </div>
      )}
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
