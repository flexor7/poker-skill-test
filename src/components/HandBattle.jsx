import Card from './Card'

export default function HandBattle({ hands, board = [], selectedId, correctId, revealed, onSelect }) {
  return (
    <div className="hand-battle">
      {board.length > 0 && (
        <div className="battle-board">
          <span className="battle-board-label">Board</span>
          <div className="cards-row">
            {board.map((c, i) => <Card key={i} card={c} size="md" />)}
          </div>
        </div>
      )}
      <div className="battle-grid">
        {hands.map((h) => {
          let cls = 'hand-tile'
          if (revealed) {
            if (h.id === correctId) cls += ' correct'
            else if (h.id === selectedId) cls += ' wrong'
          } else if (h.id === selectedId) {
            cls += ' selected'
          }
          return (
            <button
              key={h.id}
              type="button"
              className={cls}
              disabled={revealed}
              onClick={() => onSelect?.(h.id)}
            >
              <div className="hand-tile-label">{h.label}</div>
              <div className="hand-tile-cards">
                {h.cards.map((c, i) => <Card key={i} card={c} size="md" />)}
              </div>
              {h.subLabel && <div className="hand-tile-sub">{h.subLabel}</div>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
