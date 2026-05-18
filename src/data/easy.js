export const easyQuestions = [
  {
    id: 'e01',
    type: 'choice',
    prompt: 'Сколько карт открывается на флопе в Hold\'em?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation: 'На флопе открываются 3 общие карты. Тёрн и ривер — по одной.'
  },
  {
    id: 'e02',
    type: 'choice',
    prompt: 'Сколько карт всего лежит на борде после ривера?',
    options: ['3', '4', '5', '7'],
    correctIndex: 2,
    explanation: 'Флоп (3) + тёрн (1) + ривер (1) = 5 общих карт. Плюс 2 у каждого игрока.'
  },
  {
    id: 'e03',
    type: 'numeric',
    prompt: 'Сколько мастей в стандартной колоде?',
    correctValue: 4,
    tolerance: 0,
    step: 1,
    explanation: '♠ ♥ ♦ ♣ — четыре масти, по 13 карт в каждой = 52 карты.'
  },
  {
    id: 'e04',
    type: 'choice',
    prompt: 'Что сильнее — flush или full house?',
    options: ['Flush', 'Full house', 'Равны', 'Зависит от мастей'],
    correctIndex: 1,
    explanation: 'Full house (тройка + пара) бьёт flush. Иерархия: high card → pair → two pair → trips → straight → flush → full house → quads → straight flush → royal flush.'
  },
  {
    id: 'e05',
    type: 'choice',
    prompt: 'Что такое Royal Flush?',
    options: [
      'Любые 5 карт одной масти',
      'A-K-Q-J-T одной масти',
      'Стрит от туза',
      '4 карты одного достоинства + туз'
    ],
    correctIndex: 1,
    explanation: 'Royal Flush — A-K-Q-J-10 одной масти. Высший стрит-флэш, неуязвимая комбинация.'
  },
  {
    id: 'e06',
    type: 'choice',
    prompt: 'Что означает "all-in"?',
    options: [
      'Поставить ровно размер банка',
      'Поставить весь свой стек',
      'Сделать минимальный рейз',
      'Сбросить карты, не показывая'
    ],
    correctIndex: 1,
    explanation: 'All-in — постановка всех своих фишек. После all-in вы не делаете больше ставок в этой раздаче, но имеете право на пот пропорционально вложенному.'
  },
  {
    id: 'e07',
    type: 'choice',
    prompt: 'Кто действует первым на префлопе в 9-max NL Hold\'em?',
    table: { highlight: 'UTG', seats: 9 },
    options: ['Small Blind', 'Big Blind', 'UTG', 'Button'],
    correctIndex: 2,
    explanation: 'UTG ("под пушкой") — слева от BB, действует первым на префлопе. SB и BB уже поставили блайнды и говорят последними префлоп.'
  },
  {
    id: 'e08',
    type: 'choice',
    prompt: 'Кто действует последним постфлоп?',
    table: { highlight: 'BTN', seats: 9 },
    options: ['UTG', 'Big Blind', 'Button', 'Small Blind'],
    correctIndex: 2,
    explanation: 'Кнопка (BTN) — самая выгодная позиция: на флопе/тёрне/ривере говорит последним и видит действия всех остальных.'
  },
  {
    id: 'e09',
    type: 'choice',
    prompt: 'Как называется рука AK на сленге?',
    options: ['Pocket rockets', 'Big slick', 'Cowboys', 'Hooks'],
    correctIndex: 1,
    explanation: '"Big slick" — AK. Pocket rockets = AA, Cowboys = KK, Hooks = JJ.'
  },
  {
    id: 'e10',
    type: 'choice',
    prompt: 'Как называется рука AA на сленге?',
    options: ['Big slick', 'Pocket rockets', 'Bullets', 'Оба варианта B и C'],
    correctIndex: 3,
    explanation: 'AA называют "pocket rockets" или "bullets". Это самая сильная стартовая рука с ~85% equity против рандомной.'
  },
  {
    id: 'e11',
    type: 'choice',
    prompt: 'Что такое "muck"?',
    options: [
      'Показать карты на showdown',
      'Сбросить руку, не показывая карты',
      'Поднять ставку в два раза',
      'Принудительная ставка'
    ],
    correctIndex: 1,
    explanation: 'Muck — сбросить карты в общую стопку (не показывая). Также — стопка сброшенных карт. На showdown можно мукнуть, признав поражение без раскрытия.'
  },
  {
    id: 'e12',
    type: 'choice',
    prompt: 'Heads-up — это сколько игроков за столом?',
    options: ['1', '2', '3', '6'],
    correctIndex: 1,
    explanation: 'Heads-up = 1 на 1. Финальные раздачи турниров и SNG часто заканчиваются хедз-апом.'
  },
  {
    id: 'e13',
    type: 'choice',
    prompt: 'Сколько карманных карт получает игрок в Hold\'em?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'В Hold\'em — 2 карманные карты (hole cards). В Omaha — 4, в Stud — комбинация открытых/закрытых.'
  },
  {
    id: 'e14',
    type: 'dnd-sort',
    prompt: 'Расставь покерные комбинации от самой сильной к самой слабой',
    items: ['pair', 'three', 'flush', 'straight'],
    itemLabels: {
      pair: 'Pair (пара)',
      three: 'Three of a kind (тройка)',
      flush: 'Flush (флэш)',
      straight: 'Straight (стрит)'
    },
    correctOrder: ['flush', 'straight', 'three', 'pair'],
    dndHint: 'Сверху — самая сильная, снизу — самая слабая',
    explanation: 'Иерархия: Flush > Straight > Three of a kind > Pair. Полный порядок: High → Pair → Two pair → Trips → Straight → Flush → Full house → Quads → Straight flush → Royal flush.'
  },
  {
    id: 'e15',
    type: 'choice',
    prompt: 'Open-ended straight draw (OESD) даёт сколько аутов?',
    options: ['4 аута', '6 аутов', '8 аутов', '12 аутов'],
    correctIndex: 2,
    explanation: 'OESD — двусторонний стрит-дро: можно усилиться картой с двух концов. 4 карты с одной стороны + 4 с другой = 8 аутов. По правилу 2/4: ~32% до ривера.'
  },
  {
    id: 'e16',
    type: 'choice',
    prompt: 'Flush draw — сколько аутов до флэша?',
    hand: { hero: ['Ah', 'Kh'], board: ['7h', '2h', 'Tc'], position: 'BTN' },
    options: ['7', '9', '11', '13'],
    correctIndex: 1,
    explanation: 'В колоде 13 карт каждой масти. У вас 4 червы (2 в руке + 2 на борде) → 9 чёрных аутов до флэша. По правилу 4: ~36% от флопа до ривера.'
  },
  {
    id: 'e17',
    type: 'choice',
    prompt: 'Что такое kicker?',
    options: [
      'Принудительная ставка',
      'Стиль игры с частыми рейзами',
      'Карта в руке, не входящая в основную комбинацию, но определяющая силу при равных',
      'Стартовая рука AK'
    ],
    correctIndex: 2,
    explanation: 'Kicker — побочная карта. Если у обоих пара K, kicker определит победителя: KQ бьёт KJ. У одинаковых пар двух старших одинаковых карт — split pot.'
  },
  {
    id: 'e18',
    type: 'choice',
    prompt: 'Что такое showdown?',
    options: [
      'Третья улица торгов',
      'Этап вскрытия карт после торгов на ривере',
      'Сброс карт без вскрытия',
      'Первая ставка в раунде'
    ],
    correctIndex: 1,
    explanation: 'Showdown — вскрытие карт. Происходит после ривера, если осталось двое и более игроков. Лучшая 5-карточная комбинация забирает банк.'
  },
  {
    id: 'e19',
    type: 'choice',
    prompt: 'Что такое limp префлоп?',
    options: [
      'Рейз на размер 3 bb',
      'Колл больших блайндов без рейза',
      'Фолд из ранней позиции',
      'Чек на префлопе'
    ],
    correctIndex: 1,
    explanation: 'Limp — войти в раздачу коллом BB без поднятия. В современной стратегии считается слабым ходом из всех позиций кроме SB; вместо лимпа обычно либо open-raise, либо fold.'
  },
  {
    id: 'e20',
    type: 'choice',
    prompt: 'Cut-off (CO) — это какая позиция за столом?',
    table: { highlight: 'CO', seats: 9 },
    options: [
      'Справа от Button',
      'Слева от Big Blind',
      'Между блайндами',
      'Под пушкой (UTG)'
    ],
    correctIndex: 0,
    explanation: 'CO — позиция справа от BTN, вторая по силе после кнопки. Хорошее место для стилов и широких открытий.'
  }
]
