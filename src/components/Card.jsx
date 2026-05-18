const SUITS = {
  s: { symbol: '♠', color: '#111' },
  c: { symbol: '♣', color: '#111' },
  h: { symbol: '♥', color: '#d12121' },
  d: { symbol: '♦', color: '#d12121' }
}

const SIZE_MAP = {
  sm: { w: 38, h: 54, cornerFs: 11, centerFs: 22, pad: 4 },
  md: { w: 54, h: 76, cornerFs: 15, centerFs: 32, pad: 5 },
  lg: { w: 72, h: 102, cornerFs: 20, centerFs: 44, pad: 6 }
}

function parseCard(card) {
  if (!card || card.length < 2) return { rank: '?', suit: 's' }
  const last = card[card.length - 1]
  const sym = last.toLowerCase()
  if (SUITS[sym]) {
    return { rank: card.slice(0, -1), suit: sym }
  }
  const lookup = Object.keys(SUITS).find(k => SUITS[k].symbol === last)
  return { rank: card.slice(0, -1), suit: lookup || 's' }
}

export default function Card({ card, size = 'md', hidden = false }) {
  const dims = SIZE_MAP[size] ?? SIZE_MAP.md

  if (hidden) {
    return (
      <svg width={dims.w} height={dims.h} viewBox={`0 0 ${dims.w} ${dims.h}`} className="card-svg">
        <rect x="0.5" y="0.5" width={dims.w - 1} height={dims.h - 1} rx="6" fill="#1f3a8a" stroke="#0d1117" strokeWidth="1" />
        <rect x="4" y="4" width={dims.w - 8} height={dims.h - 8} rx="4" fill="none" stroke="#3b5fc4" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    )
  }

  const { rank, suit } = parseCard(card)
  const { symbol, color } = SUITS[suit] ?? SUITS.s
  const displayRank = rank === 'T' ? '10' : rank

  return (
    <svg width={dims.w} height={dims.h} viewBox={`0 0 ${dims.w} ${dims.h}`} className="card-svg">
      <rect x="0.5" y="0.5" width={dims.w - 1} height={dims.h - 1} rx="6" fill="#fafafa" stroke="#999" strokeWidth="1" />
      <text x={dims.pad} y={dims.pad + dims.cornerFs} fontSize={dims.cornerFs} fontWeight="700" fill={color} fontFamily="Georgia, serif">{displayRank}</text>
      <text x={dims.pad} y={dims.pad + dims.cornerFs * 2 + 1} fontSize={dims.cornerFs} fill={color}>{symbol}</text>
      <text x={dims.w / 2} y={dims.h / 2 + dims.centerFs / 3} fontSize={dims.centerFs} fill={color} textAnchor="middle">{symbol}</text>
    </svg>
  )
}
