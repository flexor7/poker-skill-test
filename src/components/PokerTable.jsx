const POSITIONS_9MAX = ['BTN', 'SB', 'BB', 'UTG', 'UTG+1', 'MP', 'LJ', 'HJ', 'CO']
const POSITIONS_6MAX = ['BTN', 'SB', 'BB', 'UTG', 'MP', 'CO']

export default function PokerTable({
  highlight,
  seats = 9,
  clickable = false,
  selectedPosition = null,
  correctPosition = null,
  onSeatClick
}) {
  const order = seats === 6 ? POSITIONS_6MAX : POSITIONS_9MAX
  const W = 420
  const H = 240
  const cx = W / 2
  const cy = H / 2
  const rx = 170
  const ry = 90
  const n = order.length
  const revealed = correctPosition != null

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} className={`table-svg ${clickable && !revealed ? 'clickable' : ''}`}>
      <ellipse cx={cx} cy={cy} rx={rx + 18} ry={ry + 18} fill="#3d2817" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#0f6b3e" stroke="#0a4f2c" strokeWidth="2" />
      {order.map((pos, i) => {
        const angle = ((i / n) * 2 * Math.PI) + Math.PI / 2
        const x = cx + rx * Math.cos(angle)
        const y = cy + ry * Math.sin(angle)

        const isHighlight = pos === highlight
        const isSelected = pos === selectedPosition
        const isCorrect = revealed && pos === correctPosition
        const isWrong = revealed && pos === selectedPosition && selectedPosition !== correctPosition

        let fill = '#21262d'
        let stroke = '#484f58'
        let strokeWidth = 1
        let r = 18

        if (isCorrect) {
          fill = '#2ea043'
          stroke = '#3fb950'
          strokeWidth = 2
          r = 24
        } else if (isWrong) {
          fill = '#f85149'
          stroke = '#ff7a73'
          strokeWidth = 2
          r = 24
        } else if (isSelected) {
          fill = '#1f6feb'
          stroke = '#58a6ff'
          strokeWidth = 2
          r = 22
        } else if (isHighlight) {
          fill = '#2ea043'
          stroke = '#3fb950'
          strokeWidth = 2
          r = 22
        }

        return (
          <g
            key={pos}
            className={clickable && !revealed ? 'seat-clickable' : 'seat'}
            onClick={clickable && !revealed && onSeatClick ? () => onSeatClick(pos) : undefined}
            style={clickable && !revealed ? { cursor: 'pointer' } : undefined}
          >
            <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
            <text x={x} y={y + 4} fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle" pointerEvents="none">{pos}</text>
          </g>
        )
      })}
    </svg>
  )
}
