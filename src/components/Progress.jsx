import { MAX_SCORE } from '../data'

export default function Progress({ score, streak, multiplier, sectionIndex, sectionTotal, questionIndex, questionTotal }) {
  const basePct = MAX_SCORE === 0 ? 0 : Math.round((score / MAX_SCORE) * 100)
  const showStreakBadge = streak >= 3 && multiplier > 1
  return (
    <div className="progress-bar">
      <div className="progress-left">
        <div className="progress-score">
          <span className="progress-num">{score}</span>
        </div>
        <div className="progress-pct">{basePct}% от базы</div>
      </div>

      {showStreakBadge && (
        <div className={`streak-badge tier-${multiplier}`} key={`${streak}-${multiplier}`}>
          <div className="streak-mult">×{multiplier}</div>
          <div className="streak-count">{streak} подряд</div>
        </div>
      )}

      <div className="progress-right">
        {sectionIndex != null && (
          <div className="progress-section">Раздел {sectionIndex + 1}/{sectionTotal}</div>
        )}
        {questionIndex != null && (
          <div className="progress-question">Q {questionIndex + 1}/{questionTotal}</div>
        )}
      </div>
    </div>
  )
}
