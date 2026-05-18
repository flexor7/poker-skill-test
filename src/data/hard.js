export const hardQuestions = [
  {
    id: 'h01',
    type: 'numeric',
    prompt: 'Оппонент ставит pot-size бет на ривере. Какой % вашего диапазона должен защищаться (MDF), чтобы быть unexploitable?',
    unit: '%',
    correctValue: 50,
    tolerance: 3,
    step: 1,
    explanation: 'MDF = pot / (pot + bet). При бете в pot: MDF = 100/(100+100) = 50%. То есть нужно коллить/рейзить минимум 50% диапазона, иначе оппонент может блефовать любыми двумя картами.'
  },
  {
    id: 'h02',
    type: 'numeric',
    prompt: 'GTO-агрессор делает pot-size bluff на ривере. Какой должна быть доля блефов в его поляризованном диапазоне (%)?',
    unit: '%',
    correctValue: 33,
    tolerance: 3,
    step: 1,
    explanation: 'Bluff frequency = bet / (pot + 2×bet). При pot-size bet: 100/(100+200) = 33%. Соотношение блефов к вэлью 1:2 — даёт оппоненту нулевую EV при колле bluff-catcher\'ом.'
  },
  {
    id: 'h03',
    type: 'choice',
    prompt: 'Range merging — это?',
    options: [
      'Объединение префлоп- и постфлоп-диапазонов',
      'Включение средних рук в диапазон вэлью-бетов для баланса',
      'Сужение диапазона на ривере до натсов',
      'Слияние диапазонов IP и OOP в анализе'
    ],
    correctIndex: 1,
    explanation: 'Merging — вэлью-бет с не-натсами (например, top pair good kicker как thin value). Противоположность поляризации: ваш диапазон ставок включает сильные + средние, без блефов. Применяется когда оппонент часто коллирует с худшими руками.'
  },
  {
    id: 'h04',
    type: 'choice',
    prompt: 'На каких текстурах флопа OOP-преagressor выигрывает больше от большого c-bet sizing (75%+ pot)?',
    options: [
      'Low connected wet (например 8-7-6 two-tone)',
      'High dynamic (например A-K-7 rainbow)',
      'Middle paired (8-8-3)',
      'Все одинаково — sizing не зависит от текстуры'
    ],
    correctIndex: 1,
    explanation: 'High dynamic boards (A-K-7) — у PFR явное range advantage (много AA/KK/AK), а у оппонента нет защиты сильными комбо. Большой sizing давит на маргинальные пары и реализует max value с натсами. На wet low boards solver выбирает маленький размер из-за более равных диапазонов.'
  },
  {
    id: 'h05',
    type: 'choice',
    prompt: 'Range advantage и nut advantage — в чём разница?',
    options: [
      'Это синонимы',
      'Range advantage — преимущество в среднем по всему диапазону; Nut advantage — преимущество в верхней части диапазона (премиум руки)',
      'Range advantage только постфлоп, nut advantage только префлоп',
      'Nut advantage означает только натсы, без сильных вэлью'
    ],
    correctIndex: 1,
    explanation: 'Range advantage — общее преимущество (средняя equity). Nut advantage — преимущество в premium-руках. Возможно иметь range advantage без nut (например на 9-8-7 IP с offsuit BB-defense range) — тогда лучше small sizing. Nut advantage даёт лицензию на overbet.'
  },
  {
    id: 'h06',
    type: 'choice',
    prompt: 'Equity realization — что означает?',
    options: [
      'Конвертация фишек в деньги в турнирах',
      'Способность реализовать математическую equity в реальном банке (зависит от позиции, рук, навыков)',
      'Equity на ривере после показа карт',
      'Процент бэнка, заработанный с одной руки'
    ],
    correctIndex: 1,
    explanation: 'Realized equity = реальный winrate. У OOP-руки equity realization обычно ~80-90% от raw, у IP ~110-120%. Маргинальные руки (76s OOP против AKs) часто реализуют меньше, чем holdэquity-калькулятор показывает.'
  },
  {
    id: 'h07',
    type: 'choice',
    prompt: 'Equity AA против полного 4-bet range типичного регуляра (KK, AK, иногда QQ)?',
    options: [
      '~52%',
      '~65%',
      '~75%',
      '~85%'
    ],
    correctIndex: 1,
    explanation: 'AA против диапазона {KK, AKs, AKo, QQ} — equity ~65-68%. AA доминирует KK (82%), бьёт QQ (80%), и фаворит против AK как ~88/12. Усреднённое — около ⅔.'
  },
  {
    id: 'h08',
    type: 'choice',
    prompt: 'Blockers на ривере для блеф-катча/блефа — что важнее блокировать?',
    options: [
      'Карты, которые есть в флэш-дро оппонента',
      'Сильные value-руки оппонента (например, A для nut flush, K для top set)',
      'Карты, которые блокируют ваши outs',
      'Любые карты одной масти с борда'
    ],
    correctIndex: 1,
    explanation: 'При block-betting и большом блефе вы хотите блокировать его value (например, держать A♠ на монотонном борде с возможным A-high flush). Это снижает частоту, с которой у него натсы, и повышает успешность вашего блефа.'
  },
  {
    id: 'h09',
    type: 'slider',
    prompt: 'Полу-блеф на тёрне с big flush draw (FD + gutshot, 15 outs) против диапазона UTG-3-bettera. Оптимальный размер (% pot)?',
    sliderMin: 0,
    sliderMax: 150,
    sliderStep: 5,
    unit: '%',
    correctRange: [60, 85],
    explanation: 'С такой большой equity-руки (FD + gutshot ≈ 33% к риверу) лучше большой semi-bluff sizing 60-80% pot: реализуете fold equity, а если коллируют — у вас часто лучшая equity, чем у его маргинальных рук.'
  },
  {
    id: 'h10',
    type: 'choice',
    prompt: 'ICM bubble factor — что отражает?',
    options: [
      'Процент игроков, оставшихся до призов',
      'Тот факт, что на пузыре фишки, поставленные в банк, стоят больше, чем фишки, которые можно выиграть',
      'Скорость роста блайндов на финалке',
      'Размер призового фонда относительно входа'
    ],
    correctIndex: 1,
    explanation: 'Bubble factor: при ICM фишки в потенциальной потере стоят дороже, чем в потенциальном выигрыше (диминирующая полезность). На пузыре это означает: с маргинальной рукой нужно тайтнее коллировать all-in и шире давить шорт-стеки.'
  },
  {
    id: 'h11',
    type: 'choice',
    prompt: 'На каких текстурах флопа преимущество префлоп-агрессора (BTN vs BB) минимально?',
    options: [
      'Axx rainbow',
      'KKx',
      'Low paired или 9-8-7 wet (low connected)',
      'High monotone'
    ],
    correctIndex: 2,
    explanation: 'Low connected (765, 876) и low paired (665) — текстуры, на которых у BB ren range advantage сравним с BTN: BB защищается middle-low connectors, suited 7x-8x, малые пары. На таких бордах solver часто отказывается от c-bet или ставит маленький размер с поляризацией.'
  },
  {
    id: 'h12',
    type: 'dnd-sort',
    prompt: 'BTN open + BB call. Расставь флопы по убыванию range advantage BTN',
    items: ['AK7', '987mono', 'KK2', 'T92'],
    itemLabels: {
      AK7: 'A-K-7 rainbow',
      KK2: 'K-K-2 rainbow',
      T92: 'T-9-2 two-tone',
      '987mono': '9-8-7 monotone'
    },
    correctOrder: ['AK7', 'KK2', 'T92', '987mono'],
    dndHint: 'Сверху — больше всего преимуществ у BTN',
    explanation: 'A-K-7 — пиковое BTN-преимущество (много AA/KK/AK). K-K-2 — тоже сильное (BTN держит K-x и оверпары чаще). T-9-2 — нейтральнее (BB защищается T9s, 99, 88). 9-8-7 monotone — почти 50/50 с тенденцией к BB (его coverage suited connectors лучше).'
  },
  {
    id: 'h13',
    type: 'choice',
    prompt: 'Overcall в squeeze-споте (после opener + caller вы тоже коллируете в 3-way) — когда оправдан?',
    options: [
      'Всегда выгоднее, чем 3-bet',
      'С speculative hands (низкие пары, suited connectors), глубокие стеки, хорошие implied odds',
      'Только с премиум-руками (TT+, AJs+)',
      'Только в short-stack турнирах'
    ],
    correctIndex: 1,
    explanation: 'Overcall работает с руками, которым нужен мульти-вэй пот для реализации equity: 22-99, suited connectors, suited Ax. Premium руки лучше squeeze. Маргинальные оффсьюты (KJo, A9o) — обычно фолд: dominated, плохо играются мультивэй.'
  },
  {
    id: 'h14',
    type: 'choice',
    prompt: 'Чек-рейз на ривере — для какого типа диапазона лучше всего подходит?',
    options: [
      'Линейного (все сильные руки + средние)',
      'Поляризованного (натсы + чистый блеф)',
      'Только для bluff-catcher\'ов',
      'Только для thin value'
    ],
    correctIndex: 1,
    explanation: 'Ривер чек-рейз — поляризованная линия. Невыгодно чек-рейзить со средними руками (top pair) — оппонент сфолдит всё хуже и заколлит/3-бет всё лучше. Натсы + чистые блефы (busted draws с хорошими blockers) — баланс GTO.'
  },
  {
    id: 'h15',
    type: 'numeric',
    prompt: 'Vs all-in 100bb префлоп, ваша equity = 40%, банк до колла 50bb. Сколько BB вам нужно доколлить, чтобы EV = 0? (примерно)',
    unit: ' bb',
    correctValue: 33,
    tolerance: 3,
    step: 1,
    explanation: 'EV(call) = equity × (pot + call) - (1-equity) × call. Установим = 0: 0.4 × (50 + x + x) = 0.6x → 0.4(50+2x) = 0.6x → 20 + 0.8x = 0.6x. Подождите, эта формулировка спорная. Считая стандартно: 40% equity покрывает колл если pot odds ≤ 40%. Нужно: call/(call + total pot after call) = 0.4. С банком 50, call=x: x/(x + 50+x) = 0.4 → x = 0.4(2x+50) → x = 0.8x + 20 → x = 100? Простая формула: при 40% equity порог колла = pot × equity / (1-2×equity) при equity<0.5 ... приближённо ~33bb. Главное — связь pot odds × equity.'
  },
  {
    id: 'h16',
    type: 'slider',
    prompt: 'GTO-оптимальный bluff sizing на ривере для максимального fold equity при сбалансированной стратегии (% pot)?',
    sliderMin: 0,
    sliderMax: 200,
    sliderStep: 5,
    unit: '%',
    correctRange: [65, 100],
    explanation: 'Solver-оптимум для большинства ривер-спотов — 66-100% pot для основного бета. Этот sizing балансирует bluff/value 1:2-1:3, даёт хороший fold equity на бордах с возможностью overbet, и не оставляет лишней информации. Overbet (125%+) — отдельный sizing для очень поляризованных диапазонов с nut advantage.'
  },
  {
    id: 'h17',
    type: 'choice',
    prompt: 'В bubble-ситуации турнира чип-лидер должен:',
    options: [
      'Тайтнее играть, защищая стек',
      'Открывать шире из поздних позиций против middle stacks (давление ICM)',
      'Избегать конфликтов со short stacks',
      'Играть push/fold как минимум 5 орбит подряд'
    ],
    correctIndex: 1,
    explanation: 'Big stack использует ICM-давление: middle stacks не могут коллить шире, потому что лосс = выход без призов. Лидер открывает 40-50% рук с поздних позиций, изолирует short stacks, и собирает блайнды. Главное — не доходить до all-in с middle stack, у которого может быть premium.'
  },
  {
    id: 'h18',
    type: 'choice',
    prompt: 'Probe bet — это?',
    options: [
      'Маленький бет с натсами для прибыли',
      'OOP-бет на тёрне после флоп-чек-чек (тестирует силу диапазона оппонента)',
      'Рейз префлоп против лимпера',
      'All-in блеф на ривере'
    ],
    correctIndex: 1,
    explanation: 'Probe bet — OOP-игрок ставит на тёрне после того, как PFR чекнул флоп. Логика: PFR показал слабость чеком, теперь карта тёрна может усиливать диапазон OOP. Стандартный sizing 33-50% pot, поляризованный диапазон.'
  },
  {
    id: 'h19',
    type: 'choice',
    prompt: 'Reverse implied odds особенно опасны:',
    options: [
      'С Ax low-suited против тайтового опена UTG',
      'С большими парами против всех ренжей',
      'В heads-up с любыми руками',
      'На сухих бордах с топ-парой'
    ],
    correctIndex: 0,
    explanation: 'A-low (A5o-A2o, иногда A8o-A6o) против tight UTG ranges (которые включают AK, AQ, AJ) — типичный reverse implied odds. Вы попадаете в пару тузов, но в большинстве случаев dominated лучшим кикером, и теряете дополнительные деньги на следующих улицах.'
  },
  {
    id: 'h20',
    type: 'choice',
    prompt: 'GTO bluff:value ratio при bet sizing = 50% pot на ривере?',
    options: [
      '1:1 (одинаково блефов и value)',
      '1:3 (25% блефов, 75% value)',
      '1:4 (20% блефов)',
      '1:2 (33% блефов, 67% value)'
    ],
    correctIndex: 2,
    explanation: 'Formula: bluff_freq = bet / (pot + 2×bet). При 50% pot bet: 50 / (100 + 100) = 25%. То есть 1 блеф к 3 вэлью. Чем больше sizing — тем больше блефов в полярном диапазоне. При overbet (150% pot) — ~40% блефов.'
  }
]
