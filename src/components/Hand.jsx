import Card from './Card'

export default function Hand({ hero, board = [], position, pot, stack, action }) {
  return (
    <div className="hand-box">
      {(position || pot || stack) && (
        <div className="hand-meta">
          {position && <span className="meta-chip">Позиция: <strong>{position}</strong></span>}
          {pot != null && <span className="meta-chip">Pot: <strong>{pot}</strong></span>}
          {stack != null && <span className="meta-chip">Stack: <strong>{stack}</strong></span>}
        </div>
      )}

      {hero && hero.length > 0 && (
        <div className="cards-row-wrap">
          <span className="cards-label">Hero</span>
          <div className="cards-row">
            {hero.map((c, i) => <Card key={i} card={c} size="md" />)}
          </div>
        </div>
      )}

      {board && board.length > 0 && (
        <div className="cards-row-wrap">
          <span className="cards-label">Board</span>
          <div className="cards-row">
            {board.map((c, i) => <Card key={i} card={c} size="md" />)}
          </div>
        </div>
      )}

      {action && <div className="action-note">{action}</div>}
    </div>
  )
}
