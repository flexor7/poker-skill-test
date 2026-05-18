const POSITIONS_9MAX = ['BTN', 'SB', 'BB', 'UTG', 'UTG+1', 'MP', 'LJ', 'HJ', 'CO']

export default function PokerTable({ highlight, seats = 9 }) {
  const order = seats === 9 ? POSITIONS_9MAX : ['BTN', 'SB', 'BB', 'UTG', 'MP', 'CO']
  const W = 420
  const H = 240
  const cx = W / 2
  const cy = H / 2
  const rx = 170
  const ry = 90
  const n = order.length

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} className="table-svg">
      <ellipse cx={cx} cy={cy} rx={rx + 18} ry={ry + 18} fill="#3d2817" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#0f6b3e" stroke="#0a4f2c" strokeWidth="2" />
      {order.map((pos, i) => {
        const angle = ((i / n) * 2 * Math.PI) + Math.PI / 2
        const x = cx + rx * Math.cos(angle)
        const y = cy + ry * Math.sin(angle)
        const isActive = pos === highlight
        return (
          <g key={pos}>
            <circle
              cx={x}
              cy={y}
              r={isActive ? 22 : 18}
              fill={isActive ? '#2ea043' : '#21262d'}
              stroke={isActive ? '#3fb950' : '#484f58'}
              strokeWidth={isActive ? 2 : 1}
            />
            <text x={x} y={y + 4} fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">{pos}</text>
          </g>
        )
      })}
    </svg>
  )
}
