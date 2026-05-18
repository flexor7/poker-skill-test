import { MAX_SCORE } from '../data'

export default function Progress({ score, sectionIndex, sectionTotal, questionIndex, questionTotal }) {
  const pct = MAX_SCORE === 0 ? 0 : Math.round((score / MAX_SCORE) * 100)
  return (
    <div className="progress-bar">
      <div className="progress-left">
        <div className="progress-score">
          <span className="progress-num">{score}</span>
          <span className="progress-sep">/</span>
          <span className="progress-max">{MAX_SCORE}</span>
        </div>
        <div className="progress-pct">{pct}%</div>
      </div>
      <div className="progress-right">
        {sectionIndex != null && (
          <div className="progress-section">Раздел {sectionIndex + 1}/{sectionTotal}</div>
        )}
        {questionIndex != null && (
          <div className="progress-question">Вопрос {questionIndex + 1}/{questionTotal}</div>
        )}
      </div>
    </div>
  )
}
