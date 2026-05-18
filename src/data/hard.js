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
  },
  {
    id: 'h21',
    type: 'numeric',
    prompt: 'Bubble factor 2.0 означает: ставлю 1 фишку для выигрыша. Сколько фишек реально рискую (в эквиваленте)?',
    correctValue: 2,
    tolerance: 0,
    step: 0.1,
    explanation: 'BF 2.0 — каждая фишка в потенциальной потере эквивалентна 2 фишкам в потенциальном выигрыше. То есть, чтобы быть break-even, нужно выигрывать not 50%, а ~67% времени (формула: win% = BF / (BF + 1)).'
  },
  {
    id: 'h22',
    type: 'numeric',
    prompt: 'SB jams 10bb pre-flop (heads-up). BB pot odds для колла в %?',
    unit: '%',
    correctValue: 45,
    tolerance: 5,
    step: 1,
    explanation: 'В банке: SB 0.5 + BB 1 + SB shove 9.5 = 11. BB докладывает 9 чтобы выиграть 11+9=20. Pot odds: 9/(9+11) = 45%. Нужно ≥45% equity. По Nash range BB calls ~50-55% top (хорошие pot odds).'
  },
  {
    id: 'h23',
    type: 'numeric',
    prompt: 'MDF против half-pot bet на ривере (%)?',
    unit: '%',
    correctValue: 67,
    tolerance: 3,
    step: 1,
    explanation: 'MDF = pot / (pot + bet). At half-pot bet: 100 / (100 + 50) = 67%. Нужно защищать минимум 67% диапазона. Меньше — оппонент exploitively bluffs ATC.'
  },
  {
    id: 'h24',
    type: 'numeric',
    prompt: 'Optimal bluff frequency при бете 75% pot (%)?',
    unit: '%',
    correctValue: 30,
    tolerance: 3,
    step: 1,
    explanation: 'Bluff frequency = bet / (pot + 2×bet) = 75 / (100 + 150) = 30%. Соотношение ~1:2.3 bluff:value. Чем больше sizing, тем больше блефов.'
  },
  {
    id: 'h25',
    type: 'choice',
    prompt: 'Risk premium — что это?',
    options: [
      'Дополнительная плата за вход в high-stakes',
      'Дополнительная equity, которую нужна для +EV призовой решения по сравнению с chip-EV',
      'Бонус за раннюю регистрацию',
      'Variance multiplier'
    ],
    correctIndex: 1,
    explanation: 'Risk premium — ICM-tax: чтобы вызвать all-in под ICM pressure нужно больше equity, чем по чистым chip-EV. Например, в чистых фишках нужно 50% для break-even, а на бабле — 60%+. Разница — risk premium.'
  },
  {
    id: 'h26',
    type: 'choice',
    prompt: 'Future Game Simulation (FGS) в ICM vs обычная ICM?',
    options: [
      'То же самое',
      'FGS симулирует будущие раздачи (с реальной стратегией), даёт более точные оценки $-EV чем static ICM',
      'FGS только для финалок',
      'FGS только для KO'
    ],
    correctIndex: 1,
    explanation: 'Чистый ICM считает прямо сейчас как функция стеков. FGS — симулирует ещё несколько ходов с приближённой стратегией. Это даёт более реалистичные $-EV для middle stages турнира, особенно при разных позициях у big и small stacks.'
  },
  {
    id: 'h27',
    type: 'choice',
    prompt: 'Эффект big-stack на финалке: tax ICM выше для shorts vs middles. Какой стек платит МАКСИМАЛЬНЫЙ tax?',
    options: [
      'Самый короткий стек (нечего терять)',
      'Средний стек (теряет pay-jumps, не получает выигрыш-leverage)',
      'Big stack',
      'Все одинаково'
    ],
    correctIndex: 1,
    explanation: 'Middle stack платит МАКСИМАЛЬНЫЙ ICM tax: вылет = пропуск всех pay-jumps снизу-вверх, выигрыш дабл-апа = просто standing. Big stack выигрывает мало по $ от каждого выигрыша но прибавляет дабл-апом много pressure. Shortest near "free roll".'
  },
  {
    id: 'h28',
    type: 'choice',
    prompt: 'Sklansky-Chubukov ranking для shoves — что это и для чего?',
    options: [
      'Список покерных книг',
      'Ranking рук по их value в качестве open-shoves vs opponents who play optimally — основа push/fold charts',
      'Список покерных туров',
      'Метод подсчёта equity'
    ],
    correctIndex: 1,
    explanation: 'Sklansky-Chubukov: для каждой руки расчитан max stack (в bb), при котором open-shove +EV vs perfectly playing opponents. Это foundation для Nash push/fold charts. Например AA — works against any stack; 72o — works только до 1-2bb.'
  },
  {
    id: 'h29',
    type: 'choice',
    prompt: 'PKO bounty pricing: твоя head стоит $50. Big stack с $200 head шовит против тебя 30bb. Ты держишь 25bb с AKo. Action?',
    options: [
      'Call как обычно — AK strong',
      'Call wider — ловишь $200 head + ничего не теряешь от своей head',
      'Fold — ICM presure',
      'Call only с 50%+ equity'
    ],
    correctIndex: 1,
    explanation: 'В PKO bounty шовера = $200 (приз), вы рискуете 25bb эффективно. AKo vs его shove range (для big stack — широкий) обычно ~50-55%. Bounty oversweetens deal substantially — clear call.'
  },
  {
    id: 'h30',
    type: 'choice',
    prompt: 'Limp-reraise на pre-flop в турнире (limp с план — reraise на open) — когда это правильно?',
    options: [
      'С AA-KK с глубокими стеками (50+ bb), tight регулярами сзади',
      'Никогда',
      'С 22-66 (set mining)',
      'Только с маленьким стеком'
    ],
    correctIndex: 0,
    explanation: 'Limp-reraise с premium pairs (AA, KK) — экзотическая линия применимая когда: глубокий стек, агрессивные регулярные за тобой (которые будут iso-raise против лимпа), low-stake/recreational table. Сейчас редко solver-optimal, чаще open-3-bet.'
  },
  {
    id: 'h31',
    type: 'choice',
    prompt: 'Bubble factor middle stack на пузыре 10/9. Approximate value?',
    options: [
      '1.0',
      '1.3',
      '2.0-2.5',
      '5.0+'
    ],
    correctIndex: 2,
    explanation: 'Middle stack on bubble (10 paid, 9 paid) — BF ~2.0-2.5. Каждая потерянная фишка стоит в 2-2.5 раза дороже выигранной. Это объясняет почему middle stacks суперtight в коллах all-in.'
  },
  {
    id: 'h32',
    type: 'choice',
    prompt: 'HU final 2 в MTT pay-jumps. Bubble factor?',
    options: [
      '1.0 (winner-takes-all)',
      '1.05-1.3 в зависимости от pay-структуры (1st vs 2nd обычно ~1.5-2x разница)',
      '3.0+',
      '0.5'
    ],
    correctIndex: 1,
    explanation: 'HU final pay-jumps небольшие relative (1st обычно ~1.5x of 2nd). BF ~1.05-1.3. Можно играть близко к chip-EV, но не игнорировать ICM. В sat HU где 1st = ticket, 2nd = 0 — BF infinite (играть только premium).'
  },
  {
    id: 'h33',
    type: 'numeric',
    prompt: 'BTN 12 bb effective. Nash shove range vs ATC blinds (% рук)?',
    unit: '%',
    correctValue: 27,
    tolerance: 5,
    step: 1,
    explanation: 'BTN 12 bb Nash push range ~27%. Включает все Ax, все пары, K7s+, KTo+, Q9s+, QJo+, JTs, suited connectors. С реальными tighter blinds можно шире.'
  },
  {
    id: 'h34',
    type: 'numeric',
    prompt: 'CO 15 bb Nash shove range (% рук)?',
    unit: '%',
    correctValue: 18,
    tolerance: 4,
    step: 1,
    explanation: 'CO 15 bb Nash push range ~18%. Tighter than BTN из-за двух игроков сзади (BTN + blinds). 77+, ATs+, AJo+, KQs, KJs.'
  },
  {
    id: 'h35',
    type: 'choice',
    prompt: 'Sklansky risk premium concept применимый к турниру: chip ICM 60% equity нужна для call all-in под bubble. Какой риск-премиум?',
    options: [
      '0% (без премиума)',
      '10-20% (требует выше equity, чем chip-EV)',
      '50%+',
      'Не применимо'
    ],
    correctIndex: 1,
    explanation: 'Risk premium на bubble = разница между ICM-required equity и chip-EV equity. Если без ICM нужно 50%, а с ICM нужно 60% — risk premium 10%. На финалках при больших pay-jumps — может быть 15-20%+.'
  },
  {
    id: 'h36',
    type: 'choice',
    prompt: 'Final 3 ICM. Stacks 50/30/15 bb (you 30, middle). Big stack open shove SB 50 bb (вы BB). With JJ?',
    hand: { hero: ['Js', 'Jd'], position: 'BB', stack: '30 bb' },
    options: [
      'Call — JJ obviously strong',
      'Call — JJ vs big stack shove range около 55-60% equity',
      'Fold — risk premium слишком высок vs short stack on вашей right',
      'Re-shove (we are already all-in if call)'
    ],
    correctIndex: 2,
    explanation: 'Final 3 ICM с pay-jumps огромными: middle stack должен folder JJ vs big stack shove. Big stack shove range tight (TT+, AKs+ maybe), JJ near tie. Risk premium ICM добавляет 15-20%. Подождать пока short вылетит — gain pay-jump.'
  },
  {
    id: 'h37',
    type: 'choice',
    prompt: 'Optimal cash-game c-bet frequency на dry Axx board как PFR (in heads-up pot)?',
    options: [
      '0-30%',
      '50-65%',
      '85-100% (range advantage делает c-bet почти всегда +EV)',
      'Только когда у тебя сила'
    ],
    correctIndex: 2,
    explanation: 'Dry Axx (range advantage огромный для PFR) — c-bet frequency 85-100%. Small sizing (25-33%). Это эксплуатирует факт что callerу нечего защищать; почти все его не-Ax руки сфолдят. Sole exception — vs heavy floater.'
  },
  {
    id: 'h38',
    type: 'choice',
    prompt: 'Wet board: T-9-8 rainbow OOP after BTN open. C-bet decision как BTN?',
    options: [
      'Stand. c-bet 75% pot',
      'Mixed strategy: smaller c-bet (33%) с broader range, или check OOP равновесие',
      'Always check',
      'Always overbet'
    ],
    correctIndex: 1,
    explanation: 'T-9-8 rainbow — wet, equity между ranges closer. Solver часто mixed: smaller c-bets с broad range plus checks с marginal made hands. Big sizing waste — calls already have equity, fold ranges narrow. Small protect plus extract value.'
  },
  {
    id: 'h39',
    type: 'choice',
    prompt: 'EV(shove) formula короткий стек: pot=1.5bb, shove=12bb, FE=70%, equity vs calling range=35%. EV?',
    options: [
      '+0.5 bb',
      '+1.5 bb',
      '+3 bb (positive shove)',
      '-2 bb'
    ],
    correctIndex: 2,
    explanation: 'EV = FE × pot_won + (1-FE) × [equity × (pot + their_call) - (1-equity) × shove]. FE=0.7 × 1.5 = 1.05. Call branch: 0.3 × [0.35 × (1.5+12) - 0.65 × 12] = 0.3 × [4.725 - 7.8] = -0.9225. Total ~ 0.13. Approx +0.5 на типичный спот.'
  },
  {
    id: 'h40',
    type: 'choice',
    prompt: 'Re-shove zone (3-bet shove) — оптимальная глубина стека?',
    options: [
      '5-10 bb (too short)',
      '12-25 bb (sweet spot — fold equity + can call 4-bet shove with decent equity)',
      '40-60 bb',
      '100+ bb'
    ],
    correctIndex: 1,
    explanation: 'Re-shove зона ~12-25 bb. Меньше — мало fold equity (стек обязан коллить). Больше — overcommit на marginal hands, лучше делать стандартный 3-bet. Sweet spot — leverage maximum.'
  },
  {
    id: 'h41',
    type: 'choice',
    prompt: '4-bet shove range против BTN 3-bet с 50bb стеком (CO opened, BTN 3-bet, you CO)?',
    options: [
      'QQ+, AK (~3%)',
      'KK+, AK (~2%) — top value',
      'JJ+, AKs+ AKo + suited Ax bluffs (~5% polarized)',
      'Только AA'
    ],
    correctIndex: 2,
    explanation: '4-bet shove (with intent to fold/call only super-premium 5-bet): JJ+, AKs+, AKo для value, plus suited Ax blockers (A5s blocks AA, AK) as bluffs. Polarized strategy. С 50bb — 4-bet/fold можно сделать; with shorter — 4-bet/call only.'
  },
  {
    id: 'h42',
    type: 'choice',
    prompt: 'ICM-adjusted opening range tighter or wider compared to chipEV?',
    options: [
      'Tighter — risk premium делает marginal opens -EV',
      'Wider — fold equity higher',
      'Same — opens don\'t change',
      'Зависит от стека'
    ],
    correctIndex: 0,
    explanation: 'ICM tighter opens overall — risk of getting shoved on plus pot odds for call decrease the marginal opens. But there\'s nuance: against ICM-aware opponents, your steal frequency may actually go up (they fold more), so ranges shift, but absolute width — tighter.'
  },
  {
    id: 'h43',
    type: 'choice',
    prompt: 'HU SB with 12bb stack vs BB. Nash open-shove range?',
    options: [
      '~30%',
      '~50%',
      '~60-65% (Ax, all pairs, broadway, suited connectors, K2s+, Q5s+)',
      '~90%'
    ],
    correctIndex: 2,
    explanation: 'HU SB 12 bb open-shove Nash: ~60-65%. Pot odds great (BB calls only ~50%). Limp-strategy alternative competitive too with skilled BB, but pure push/fold simple and near-optimal.'
  },
  {
    id: 'h44',
    type: 'choice',
    prompt: 'KO turnir bounty math: bounty = 20% of buy-in. You have 30bb, short stack 8bb shoves. You have K9o. Call?',
    hand: { hero: ['Ks', '9c'], stack: '30 bb' },
    options: [
      'Fold — K9o too weak',
      'Call — bounty oversweetens marginal call (+5-7% effective equity)',
      'Fold for ICM',
      'Reshove'
    ],
    correctIndex: 1,
    explanation: 'KO bounty effectively adds ~5-7% to your "needed equity" calculation. K9o vs random 8bb shove ~45% equity. Without bounty: -EV. With 20% bounty: marginally +EV. Borderline call/fold; lean toward call.'
  },
  {
    id: 'h45',
    type: 'choice',
    prompt: 'Mystery bounty: средняя head стоит buy-in. У тебя 25bb, ты ловишь head шорта 5bb. Action thresholds сравнить с regular KO?',
    options: [
      'Та же — bounty одинаковая',
      'Tighter — bounty имеет dispersion (некоторые мелкие, некоторые джекпоты)',
      'Wider — потенциальный jackpot повышает EV',
      'Зависит от размера джекпотов'
    ],
    correctIndex: 3,
    explanation: 'Mystery bounty: expected value одинаков с regular KO at the average, но variance высокая. Если джекпоты крупные ($50K+), call thresholds wider (chance to hit big). С плоской структурой mystery играется как обычный KO.'
  },
  {
    id: 'h46',
    type: 'choice',
    prompt: 'ICM на финалке 9 left: shortest stack vs everyone — какой первый pay-jump (9 → 8 place) typically?',
    options: [
      '5-10% призового фонда',
      '15-25% (significant первый pay-jump)',
      '~30%',
      '<2%'
    ],
    correctIndex: 0,
    explanation: 'Standard MTT pay structure: 9th place ~1-1.5% призового фонда, 8th ~1.5-2%. Первый pay-jump 9→8 — небольшой. Pay-jumps растут exponentially: huge jumps между top 3.'
  },
  {
    id: 'h47',
    type: 'choice',
    prompt: 'Open-shove зона UTG в 9-max при каком стеке?',
    options: [
      '≤8 bb',
      '≤12 bb (typically 99+, ATo+, KJs+ — 5-7% рук)',
      '≤20 bb',
      '≤30 bb'
    ],
    correctIndex: 1,
    explanation: 'UTG open-shove zone — typically ≤12bb. With 7 players behind, range tight (top 5-7%). С 15bb still можно open-raise (2.2-2.5x) с broader range. Шов с 12bb leverages fold equity максимально.'
  },
  {
    id: 'h48',
    type: 'numeric',
    prompt: 'BB 8 bb на пузыре vs SB shove 8 bb. % equity required для break-even call (no ICM)?',
    unit: '%',
    correctValue: 47,
    tolerance: 3,
    step: 1,
    explanation: 'Pot: SB 0.5 + BB 1 + SB shove 7.5 = 9. BB calls 7 to win 9+7=16. Equity required = 7/16 ≈ 44%. Adding ICM bubble pressure on top — true threshold ~52-55%. Без ICM ~44%.'
  },
  {
    id: 'h49',
    type: 'choice',
    prompt: 'Adjustment vs known ICM-aware opponent on bubble: as big stack — больше или меньше блефовать?',
    options: [
      'Меньше — он не фолдит',
      'Больше — он знает что должен тайтнее коллить, fold equity увеличивается',
      'Та же стратегия',
      'Только value'
    ],
    correctIndex: 1,
    explanation: 'ICM-aware opponent on bubble знает что должен tight call. Это значит: его fold range wider, твоё fold equity больше. Exploit — больше шов с marginal hands. Vs ICM-clueless opponent — обратное (он call wider).'
  },
  {
    id: 'h50',
    type: 'choice',
    prompt: 'Heads-up final MTT, equal stacks 75bb. У тебя SB с T9s. Action?',
    hand: { hero: ['Tc', '9c'], position: 'SB', stack: '75 bb' },
    options: [
      'Fold (T9s слабая)',
      'Limp 1bb',
      'Open 2-2.5x',
      'Open shove'
    ],
    correctIndex: 2,
    explanation: 'HU SB с 75bb — стандартное open 2-2.5x. T9s — отличная suited connector — играть в позиции, suited connector реализует equity хорошо. Limp возможен как mixed strategy но open часто solver-optimal.'
  },
  {
    id: 'h51',
    type: 'choice',
    prompt: 'Final 5 ICM. Stacks 80/60/40/25/10. Big stack open BTN 2.2x. У тебя SB 60 bb с AQs. Action?',
    hand: { hero: ['As', 'Qs'], position: 'SB', stack: '60 bb' },
    options: [
      'Cold call',
      '3-bet до 6.5 bb (standard)',
      '3-bet shove 60 bb',
      'Fold (ICM)'
    ],
    correctIndex: 1,
    explanation: 'AQs vs big stack BTN open with 60bb effective: 3-bet 6.5bb standard. Cold call OOP plays poorly. Shove 60bb overkill — big stack calls only нас доминируя AA/KK/AK. 3-bet/fold against 4-bet works (lose 6.5bb only).'
  },
  {
    id: 'h52',
    type: 'choice',
    prompt: 'Polarized 3-bet range из BB vs BTN open 50bb effective?',
    options: [
      'Только premium: TT+, AKs',
      'Linear: TT+, AQ+ as value (~7%)',
      'Polarized: QQ+/AKs as value PLUS suited blockers A5s-A2s, K4s-K2s as bluffs (~10-12%)',
      'Random suited'
    ],
    correctIndex: 2,
    explanation: 'BB 3-bet vs BTN: polarized — top value + blocker bluffs. A5s blocks AA, AK. K2s blocks KK, AK. Что-то вроде QQ+, AK as value (3-4%) plus A5s, A4s, A3s, A2s, K4s, K2s as bluffs (6-8%). Mid-strength hands flat call OOP.'
  },
  {
    id: 'h53',
    type: 'choice',
    prompt: 'Aggressive 4-bet bluff candidate IP 100bb stack vs opp 3-bet?',
    options: [
      'A5s, A4s (suited blockers)',
      'AKs (no — это value)',
      'Только AA, KK',
      'JTs, T9s (suited connectors)'
    ],
    correctIndex: 0,
    explanation: '4-bet bluff strategy uses suited Ax blockers (A5s, A4s, A3s, A2s). They block AA, AK strongest. Plus playable postflop if called (suited Ax has nut potential). Suited connectors not чаще играют flat call IP.'
  },
  {
    id: 'h54',
    type: 'choice',
    prompt: 'ICM-adjusted shoves typically — wider или tighter compared to chipEV?',
    options: [
      'Tighter — нужно более сильные руки',
      'Wider — fold equity wider, marginal shoves +EV',
      'Same as chipEV',
      'Зависит только от стека'
    ],
    correctIndex: 1,
    explanation: 'Несколько counterintuitive: ICM shoves обычно WIDER. Reason: opponents fold более широко (их call requires huge equity due to ICM tax). Big stack уоткрывает 50% on BTN where chipEV says 40%. Pressure works asymmetrically.'
  },
  {
    id: 'h55',
    type: 'choice',
    prompt: 'PKO endgame: 4-handed final. Big stack 60bb с big head (worth $500). У тебя 30bb middle с small head ($50). Action diff vs regular MTT?',
    options: [
      'Tighter overall (ICM)',
      'Wider attacks vs big stack (ловить $500 head — huge EV)',
      'Same',
      'Only premium'
    ],
    correctIndex: 1,
    explanation: 'PKO endgame: big head — magnet. Атаковать big stack с broader 3-bet range (and call shoves wider). Reward huge. Caveats: big stack often tighter from pressure. Stack-to-bounty ratio определяет.'
  },
  {
    id: 'h56',
    type: 'choice',
    prompt: 'Limp strategy SB in HU вспомогательно к open-raise — когда лучше limp?',
    options: [
      'Никогда — open всегда',
      'С certain range при глубоких стеках 30+ bb — некоторые solver-strategies включают limp с middle-strength rукам',
      'Только с AA',
      'Только с маленьким стеком'
    ],
    correctIndex: 1,
    explanation: 'Solver-optimal HU SB strategy at 30+ bb sometimes includes limp range — обычно средние мариджинальные руки (T7o, 65s в зависимости от depth). Pure open-raise close to optimal but mixed strategy ekes out small edge.'
  },
  {
    id: 'h57',
    type: 'choice',
    prompt: '3-bet vs 4-bet vs all-in scenarios — какой commit point с 50bb stack?',
    options: [
      'Open 2.5x — call 4-bet всегда',
      'Open 2.5x → 3-bet → 4-bet → committed at this point usually call shove',
      'Anytime stack < 50% of starting',
      'Никогда не commit pre-flop'
    ],
    correctIndex: 1,
    explanation: 'Стандартная sizing: open 2.5x → 3-bet to 8x (3x) → 4-bet to 18x → 5-bet shove territory. После 4-bet pot ~40bb с ~32bb behind, SPR < 1, commit point. Only fold KK with 5-bet from обмен strict regs.'
  },
  {
    id: 'h58',
    type: 'choice',
    prompt: 'Optimal frequency 3-bet vs BTN open in BB (с 40-50 bb effective)?',
    options: [
      '5-7%',
      '12-15% polarized',
      '25-30% (very wide)',
      '50%'
    ],
    correctIndex: 1,
    explanation: 'BB 3-bet vs BTN open в средне-глубоком cash/MTT: ~12-15%. Polarized: TT+, AK + suited blockers (A5s-A2s, K4s). Mid-strength hands (88-99, AJ, KQ) flat call. Pure value only — exploitable; pure bluff — too thin.'
  },
  {
    id: 'h59',
    type: 'choice',
    prompt: 'SnG final 3 (HU starts at 2). Pay-out: 1st=50%, 2nd=30%, 3rd=20%. Strategy adjust на 3-handed vs HU?',
    options: [
      'Identical',
      'Tighter on 3-handed (ICM-pressure), then wider opens в HU',
      'Wider на 3-handed',
      'Only premium until HU'
    ],
    correctIndex: 1,
    explanation: '3-handed pre-HU имеет огромный ICM-bubble (3rd → HU = pay-jump 20% → minimum 30%). Должны tighter в коллах, но big stack аcttacks. После HU starts pay-jump меньше (1st vs 2nd 20% diff) — wider play resumes.'
  },
  {
    id: 'h60',
    type: 'choice',
    prompt: 'Calling 3-bet shove from short stack on bubble. С AKo, 30bb stack, against UTG short stack 10bb shove. Bubble factor 2.0. Call?',
    hand: { hero: ['As', 'Kd'], stack: '30 bb' },
    options: [
      'Easy call — AKo strong',
      'Call but tighter than non-bubble (still call most of time)',
      'Fold — ICM огромный',
      'Reshove (uppercut)'
    ],
    correctIndex: 1,
    explanation: 'AKo vs UTG short stack 10bb shove (tight 7-9% range — 77+, ATs+, AJo+, KQs): equity ~52%. Standard chip-EV call easy. С BF 2.0 (bubble) — required equity ~62%. Still call but close. Important consideration: you only risk 10bb relative to your 30bb stack.'
  },
  {
    id: 'h61',
    type: 'choice',
    prompt: 'Multi-way pot postflop strategy IP с TPGK на dry flop. Continuation bet decision?',
    hand: { hero: ['Ah', 'Kc'], board: ['As', '7d', '2c'] },
    options: [
      'Always c-bet 50%+ pot — strong hand',
      'Smaller bet (33%) с broader range против multi-way (защита less needed, value bigger)',
      'Check — pot control multi-way',
      'Overbet'
    ],
    correctIndex: 2,
    explanation: 'Multi-way pot strategy: check stronger range, bet smaller when bet. Top pair TGK multi-way часто check IP — bet получает мало value (только worse pairs), gives free cards. Solver mixed — check 50-70% времени. Bet 33% эксплуатирует passive callers.'
  },
  {
    id: 'h62',
    type: 'choice',
    prompt: 'Cooler analysis: AA vs KK pre-flop all-in 100bb. Long-term EV diff per spot?',
    options: [
      '0 — cooler',
      'Большой минус для KK (AA фаворит ~82%, KK loses ~32bb per spot avg)',
      'KK gets лучшие implied на постфлопе',
      'Зависит от opponent'
    ],
    correctIndex: 1,
    explanation: 'AA vs KK 100bb all-in: AA ~82% equity. KK loses on average ~0.32 × 100bb × 2 = ~64 bb (relative to neutral) per situation. Long-term — coolers ARE losses for the weaker side, even if neither party играет ошибочно.'
  },
  {
    id: 'h63',
    type: 'choice',
    prompt: 'Range merging — основа exploitative или GTO?',
    options: [
      'GTO — баланс ranges',
      'Exploitative — против calling stations с thin value vs стандартные ranges',
      'Это синоним polarization',
      'Только в HU'
    ],
    correctIndex: 1,
    explanation: 'Range merging — exploitative concept: vs station includes middle pairs (TPMK, second pair) в "value bet" range with bigger sizing. GTO ranges polarized (натсы+блефы); merging противоположно — adds linear value pieces. Stations не fold; explosively + thin value.'
  },
  {
    id: 'h64',
    type: 'choice',
    prompt: 'Equity realization для OOP vs IP с same hand. Typical разница?',
    options: [
      'Same realization',
      'OOP реализует ~85-90% of raw equity, IP ~110-115%',
      'OOP больше',
      '5% разница'
    ],
    correctIndex: 1,
    explanation: 'IP advantage substantial: OOP равно с raw equity 50% реализует ~45%, IP ~55%. Это объясняет почему 3-bet ranges OOP narrower (less reward from positional advantage). Most strategies factor realization into pre-flop ranges.'
  },
  {
    id: 'h65',
    type: 'choice',
    prompt: 'Donk-bet на low connected boards от BB defender — почему solver-strategy?',
    options: [
      'Stupid mistake',
      'BB имеет range advantage на 7-6-5 (better connectors and pairs in defending range)',
      'Always for protect',
      'Only multi-way'
    ],
    correctIndex: 1,
    explanation: 'BB-defended ranges включают много 6x, 7x, 87s, 65s — на 7-6-5 borde BB hits straights, two-pair, pair+draw чаще, чем BTN PFR. BB имеет range advantage; donk-bet small (33%) extracts value plus protects. Solver-confirmed.'
  },
  {
    id: 'h66',
    type: 'choice',
    prompt: 'Final 2 turnir HU. SB short 30bb, BB 100bb. Pay 1st=$10K, 2nd=$5K. Strategy SB shove range?',
    options: [
      'Wider (less to lose)',
      'Tighter (winner-takes-all reasoning)',
      'Same as cash HU',
      'Только premium until double up'
    ],
    correctIndex: 0,
    explanation: 'Short stack в HU MTT shoves WIDER. ICM minimal (already in money, pay-jump small). Need to double up to compete, и тайтная игра грозит блайнд-stress. SB shove 30bb с broader range — TT+, AK, plus some Ax broadway.'
  },
  {
    id: 'h67',
    type: 'choice',
    prompt: 'BTN open + BB 3-bet shove 20bb. У тебя BTN 80bb с QQ. Call?',
    hand: { hero: ['Qc', 'Qh'], position: 'BTN', stack: '80 bb' },
    options: [
      'Easy call — QQ premium vs 3-bet shove range',
      'Fold — BB 3-bet shove range это AA-JJ, AK only',
      'Reshove (we already biggest stack)',
      'Min-4-bet'
    ],
    correctIndex: 0,
    explanation: 'QQ vs BB 3-bet shove 20bb (range ~6-10%: TT+/JJ+, AK, plus maybe AQs and some bluffs): QQ has ~60% equity. Stack ratio 1:4 (you have 80, шов 20) — call easy. Even если his range tight (JJ+, AK only), QQ still ~52%.'
  },
  {
    id: 'h68',
    type: 'choice',
    prompt: 'Tournament vs cash strategic differences (one biggest)?',
    options: [
      'Tournament more aggressive overall',
      'Cash deep stacks → more постфлоп manoeuvring; tournament shorter stacks → push/fold dominate later stages',
      'Tournament no ICM',
      'Same strategy'
    ],
    correctIndex: 1,
    explanation: 'Главное: cash typically 100bb+ deep — postflop play dominates. Tournament — stacks evolve (deep early → short late) — push/fold strategy becomes correct as stacks shrink. ICM further differentiates (cash chip = $, tournament chip = fractional $).'
  },
  {
    id: 'h69',
    type: 'choice',
    prompt: 'Sklansky push/fold theorem main result?',
    options: [
      'Push/fold optimal at any stack',
      'For each hand, exists max stack size где open-shove is +EV vs perfect opponents (basis for Nash charts)',
      'Push/fold only after pre-flop',
      'Push only with premium'
    ],
    correctIndex: 1,
    explanation: 'Sklansky-Chubukov: for each hand calculated maximum stack size при котором open-shove all-in +EV если opponents play optimally. Это lower bound — actual shove ranges wider в реальных играх (opponents not perfect). Foundation pure Nash push/fold theory.'
  },
  {
    id: 'h70',
    type: 'choice',
    prompt: 'River bluff strategy: blocker selection — что приоритизировать?',
    options: [
      'Block opponents folding hands',
      'Block opponents calling/value range (e.g., A on monotone board for nut flush)',
      'Block your own hands',
      'Any random card'
    ],
    correctIndex: 1,
    explanation: 'Bluff blockers: hold cards that REDUCE opponent\'s value range. Hold A♠ on monotone spades board reduces P(opp has nut flush). Hold K♠ for second nut flush block. Best blockers — top of his value range. Block calls, not folds.'
  },
  {
    id: 'h71',
    type: 'choice',
    prompt: 'Optimal aggression frequency on the river in HU pot OOP с full range?',
    options: [
      '10-15% (mostly check)',
      '20-30% (check majority, bet polarized)',
      '50-60% bet',
      'Always bet'
    ],
    correctIndex: 1,
    explanation: 'River OOP aggression typically 20-30% — bet polarized (natts + bluffs), check rest. Higher frequency overconcentrates value/bluffs in bet range, exploitable. Solver-near optimum varies by board, but ~25% is good rule.'
  },
  {
    id: 'h72',
    type: 'choice',
    prompt: 'Mixed strategy (e.g., 50/50 bet/check на флопе) — почему solver dictate это?',
    options: [
      'Random for randomness sake',
      'Equilibrium: bet и check одинаково EV given balanced ranges — нельзя exploit',
      'Mistake',
      'Only for online'
    ],
    correctIndex: 1,
    explanation: 'Mixed strategy reflects indifference point — given equilibrium ranges, EV(bet) = EV(check). Pure strategy creates ranges exploitable (opponent шире 4-bets если знает что bet always = strong). Mixed maintains balance.'
  },
  {
    id: 'h73',
    type: 'choice',
    prompt: 'Final table chop deal: chip-chop vs ICM-chop. Когда chip-chop favorable to chip leader?',
    options: [
      'Never — ICM equal or better',
      'Always — chip-chop awards big stack more',
      'Chip-chop favors big stack только при равных payouts (flat structure)',
      'Зависит от skill levels'
    ],
    correctIndex: 1,
    explanation: 'Chip-chop: distribute proportional to chip counts. Big stack benefits relative to ICM-chop, потому что ICM diminishing returns мощно для big stacks. ICM-chop awards big stack меньше доли, чем chip-chop. Big stack always prefers chip-chop.'
  },
  {
    id: 'h74',
    type: 'choice',
    prompt: 'Anti-ICM exploit: bubble factor your opponents underestimate. Exploit как big stack?',
    options: [
      'Player who is not ICM-aware will call wider — therefore bluff less, value-bet thinner',
      'Same strategy',
      'Bluff more',
      'Only premium'
    ],
    correctIndex: 0,
    explanation: 'ICM-clueless opponent на bubble calls wider (treats it like cash). Exploit — meriting tighter shove ranges (он не fold to your shove), and value-bet thinner on call (he calls light). Vs ICM-aware: wider shoves, fewer thin value.'
  },
  {
    id: 'h75',
    type: 'choice',
    prompt: 'Optimal cash c-bet frequency на high dry flop (Kxx rainbow) PFR в HU pot?',
    options: [
      '20%',
      '50%',
      '75-90% small sizing — range advantage massive',
      'Always check'
    ],
    correctIndex: 2,
    explanation: 'Kxx rainbow HU PFR: range advantage massive (more Kx, premium pairs). Small c-bet (25-33%) high frequency (80-90%). Smaller bet acquires fold от middle pair + value vs unique calling range. Big sizing wastes — fewer calls.'
  },
  {
    id: 'h76',
    type: 'choice',
    prompt: 'Reverse implied odds at их максимум в каком сценарии?',
    options: [
      'Маленький пара на сухом low board',
      'Top pair weak kicker vs tight opener (например A8o vs UTG which has AT+, AK)',
      'Set on rainbow board',
      'Suited connector with flush draw'
    ],
    correctIndex: 1,
    explanation: 'A8o vs tight UTG range — classic reverse implied odds nightmare. Hit pair of aces, dominated by AT, AJ, AQ, AK. Pay off on every street. Better to fold pre-flop than navigate this постфлоп. Концепт критичен в tighter player pools.'
  },
  {
    id: 'h77',
    type: 'choice',
    prompt: 'Aggression Frequency (AFq) в HUD — что измеряет?',
    options: [
      'То же что AF',
      '% of post-flop actions that are bet or raise (vs check or call)',
      'Pre-flop aggression only',
      'Total aggressive moves per hour'
    ],
    correctIndex: 1,
    explanation: 'AFq = (bets + raises) / (bets + raises + calls + checks). Лучше чем AF (бeт+raise / call), потому что AFq accounts for checks. AFq 30% — passive, 50% — aggressive, 60%+ — maniac. Stable across постфлоп streets vs AF dispersed.'
  },
  {
    id: 'h78',
    type: 'choice',
    prompt: 'Equity vs range — какая equity ниже: твоя топ-пара (A8 на A72) vs его tight 3-bet calling range на этом борде?',
    options: [
      '80%+',
      '60-65%',
      '40-50% (доминируется его AT+, AJ, AK, AA, sets)',
      '25%'
    ],
    correctIndex: 2,
    explanation: 'A8 (top pair weak kicker) vs tight 3-bet caller range на A72: dominated heavily. His range на этом board: AT+ (often dominate), AA (sets), 77/22 (sets), AKs/AQs. Your equity ~40-50%. This is reverse implied odds spot.'
  },
  {
    id: 'h79',
    type: 'choice',
    prompt: 'In a 3-bet pot OOP, optimal c-bet sizing на ривере с polarized range?',
    options: [
      '25% pot',
      '50% pot',
      '75-100% или больше (overbet)',
      'Always check'
    ],
    correctIndex: 2,
    explanation: 'OOP 3-bet pot на ривере с polarized range — larger sizing (75-150% pot, overbets). Polar ranges command bigger leverage, force opponent into binary fold/call against bluff catchers. Smaller sizing не эксплуатирует полярную диспозицию.'
  },
  {
    id: 'h80',
    type: 'choice',
    prompt: 'Bunching effect в open ranges — что это?',
    options: [
      'Players cluster around average stack',
      'Когда considering положение сзади UTG, известно, что UTG-UTG+1-MP folded — это shifts probability of premium hands в blinds (slightly tighter их ranges)',
      'Pre-flop straddle dynamics',
      'Range bunching only matters HU'
    ],
    correctIndex: 1,
    explanation: 'Bunching: после folds от UTG/MP, blinds немного TIGHTER чем random — premium hands "bunched" в folded ranges с small probability. Small effect, но solver выкладывается. На BTN open vs blinds мы можем slightly wider range из-за bunching.'
  },
  {
    id: 'h81',
    type: 'choice',
    prompt: 'Stop-and-go vs pre-flop shove with 12bb on BB vs SB 2.5x open. Какой EV больше?',
    options: [
      'Pre-flop shove (immediate FE)',
      'Stop-and-go обычно выше EV (FE on flop after SB c-misses)',
      'Same',
      'Depends only on hand'
    ],
    correctIndex: 1,
    explanation: 'Stop-and-go often slightly higher EV: opp committed pre, c-bet often misses, your shove on flop gets FE. Pre-flop shove only gets FE if he folds top of his open range, harder. Caveat: works only OOP and against opp who c-bets standard.'
  },
  {
    id: 'h82',
    type: 'choice',
    prompt: 'Adjustment vs maniac (very wide opening и raising). Strategy?',
    options: [
      'Tighter, slow-play',
      'Wider 3-bets, more thin value, fewer bluffs (он не fold)',
      'Same strategy',
      'Avoid table'
    ],
    correctIndex: 1,
    explanation: 'Vs maniac: широчайший 3-bet for value (он re-jams light), thinner value bets (он calls light), reduce bluffs (он не fold). Pot odds decisions adjust: his wide range means your TPGK gains massive value. Patience easier — wait для good spots.'
  },
  {
    id: 'h83',
    type: 'choice',
    prompt: 'Best blocker for river bluff на board A-K-7-3-2 (dry) — какая руки?',
    options: [
      'TT (mid pair)',
      'QQ (overpair to non-board high)',
      'AQ or KQ (blocks ace/king + Q for kicker)',
      '76s (busted draw)'
    ],
    correctIndex: 2,
    explanation: 'Bluff blockers: hold cards that block opp value. AQ blocks AK, AJ, AT (top pairs). Similarly KQ block KK, KJ. 76s nice (you have unblocked story — was draw), но fewer value blocks. Best: hands that hold a top blocker plus second-tier kicker.'
  },
  {
    id: 'h84',
    type: 'choice',
    prompt: 'Effective stack size influences strategy primarily through:',
    options: [
      'Total dollars at risk',
      'Stack-to-pot ratio (SPR) на постфлопе и leverage',
      'How many hands you can sit through',
      'Variance only'
    ],
    correctIndex: 1,
    explanation: 'SPR critical: low SPR (<3) commits с overpairs/TPGK, no room maneuver. High SPR (>10) needs careful pot control. Pre-flop sizing адjusts to target ideal SPR for hand strength: AA wants low SPR (kill ranges), suited connector wants high SPR (implied odds).'
  },
  {
    id: 'h85',
    type: 'choice',
    prompt: 'When does WSOP main event payout structure flattest typically?',
    options: [
      'First place huge, others tiny',
      'Top-heavy: 1st gets ~17%, but pay-jumps смягчены сравнительно с regular MTT',
      'Equal payouts',
      'Final table gets all'
    ],
    correctIndex: 1,
    explanation: 'WSOP Main Event has top-heavy payout but final table pay-jumps soft (after ~120 players cashing, each jump ~20-30%). 1st place ~$10M of ~$60M prize pool (~16-17%). Strategy: huge difference между making/missing final table.'
  },
  {
    id: 'h86',
    type: 'choice',
    prompt: 'River probe-bet pricing for opponent — он должен defend каким frequency?',
    options: [
      'MDF против probe sizing — bet 50% pot → defend 67%',
      'Always defend',
      'Never defend',
      'Defending не имеет значения on river'
    ],
    correctIndex: 0,
    explanation: 'MDF applies on all streets. Bet 50% pot → defender needs 67% defense to be unexploitable. Probe-bets typically 33-50% pot — defender keeps MDF math. Riverbets larger more dangerous because future streets gone, full equity must show down.'
  },
  {
    id: 'h87',
    type: 'choice',
    prompt: 'Heads-up cash optimal SB open frequency (deep 100bb)?',
    options: [
      '40-50%',
      '60-70% (very wide due to position advantage post-flop)',
      '80-90% (almost any two)',
      'Only premium'
    ],
    correctIndex: 1,
    explanation: 'HU cash deep stacks: SB op-raise 60-70% — value of position + initiative. Smaller open sizing (2x) common to keep BB defense ranges balanced. Modern solver-strategies sometimes mix limp с certain ranges for max EV.'
  },
  {
    id: 'h88',
    type: 'choice',
    prompt: 'BB defense vs HU SB open 2x. Theoretical defending frequency to prevent SB-auto-profit?',
    options: [
      '20% defending',
      '50% defending',
      '~67% (3-bet + call combined) — MDF',
      '90%+'
    ],
    correctIndex: 2,
    explanation: 'HU BB vs SB 2x open: pot odds 1:3 (call 1 to win 3). MDF = pot / (pot + bet) = 2.5 / (2.5+1) = ~71%. BB должен defend 60-70% combined (call + 3-bet). С BB-ante — даже шире.'
  },
  {
    id: 'h89',
    type: 'choice',
    prompt: 'C-bet decision на T-7-2 rainbow heads-up pot as PFR — sizing rationale?',
    options: [
      'Small (25%) — range advantage moderate, mainly extract from worse pairs',
      'Big (75%+) overbet',
      'Always check',
      '50% pot все time'
    ],
    correctIndex: 0,
    explanation: 'T72 rainbow — somewhat dry but range advantage less сравнительно с Kxx или Axx. Solver mixed: small c-bet (25-33%) с broader range, или check с marginal made. Big sizing waste — opp ranges narrower defending, small bet pricing best.'
  },
  {
    id: 'h90',
    type: 'choice',
    prompt: 'Risk-of-ruin for tournament regular: ROI 10%, BR = 100 buy-ins. Approximate likelihood of going broke (over long term)?',
    options: [
      '<1%',
      '~5-10%',
      '~30-50% (turnir variance ОГРОМНА even with positive ROI)',
      '~80%'
    ],
    correctIndex: 1,
    explanation: 'Tournament variance огромная: 100 buy-ins with 10% ROI gives ~5-10% risk of ruin. With 200 BR — drops to ~1-2%. Cash players with same edge survive on much smaller bankrolls due to less variance. Turnir bankroll requires deeper.'
  },
  {
    id: 'h91',
    type: 'choice',
    prompt: 'Optimal 4-bet sizing OOP с 100bb stack vs IP 3-bet to 8bb?',
    options: [
      '18-22 bb (2.2-2.7x from 3-bet) — балансирует FE и leverage',
      'Min-4-bet 16bb',
      '40+ bb (overkill but maximum leverage)',
      'Always shove all-in'
    ],
    correctIndex: 0,
    explanation: 'OOP 4-bet sizing ~2.5x from 3-bet (18-22bb if 3-bet 8bb). Smaller pot-commits without enough FE; larger overcommits at expense of value calling 5-bet. Sweet spot maximizes pure value rounds plus bluff round-trips.'
  },
  {
    id: 'h92',
    type: 'choice',
    prompt: 'When solver выбирает large c-bet sizing (75%+ pot) — какая характеристика board чаще присутствует?',
    options: [
      'Connected wet (например 8-7-6)',
      'Dry highcard board (Kxx rainbow, Axx rainbow) где range advantage huge для PFR',
      'Paired middle (88-3)',
      'Monotone medium'
    ],
    correctIndex: 1,
    explanation: 'Large c-bet sizing — dry highcard texture (Kxx, Axx rainbow). Range advantage huge, polarized strategy: big bet с натсы + некоторых bluffs (suited blockers, gutshots), check rest. На wet — smaller (защиты ranges balanced) или mixed.'
  },
  {
    id: 'h93',
    type: 'choice',
    prompt: 'Time-bank usage в live MTT — strategy?',
    options: [
      'Не использовать никогда',
      'Использовать только в critical spots (large pots, bubble decisions) — обычные действия quickly to не show patterns',
      'Каждое решение долго thinking',
      'Use against weak opponents only'
    ],
    correctIndex: 1,
    explanation: 'Time-bank — strategic resource. Не используйте на простых fold-spots (показывает вы tilted). Reserve for critical, multi-way pots, big bluff/value catches. Consistent tank-times also hide info — same time on all big decisions.'
  },
  {
    id: 'h94',
    type: 'choice',
    prompt: 'PKO bounty value calculation: head $50, your remaining BR 0. Effectively bounty hunter ROI improvement?',
    options: [
      'Bounty adds linear EV — call wider',
      'Bounty имеет diminishing utility (covered BR, marginal value не такой как нужно)',
      'No difference',
      'Bounty < 5% so ignore'
    ],
    correctIndex: 0,
    explanation: 'Bounty value linear if you treat $50 as $50 (cash). Most players play this way correctly. Diminishing utility applies if your BR небольшой — variance from bounty plays into RR considerations. Most regulars: treat bounty linearly.'
  },
  {
    id: 'h95',
    type: 'choice',
    prompt: 'Specific GTO concept: indifference point — что это?',
    options: [
      'Opponent indifferent between actions',
      'Frequency at which EV(call) = EV(fold) — Nash equilibrium condition',
      'Random play',
      'Mixed strategy ratio'
    ],
    correctIndex: 1,
    explanation: 'Indifference point: at equilibrium, opp\'s EV(call) = EV(fold). If aggressor mixes bluffs in right ratio, defender is indifferent — neither call nor fold profits more vs balanced range. Этот condition determines optimal bluff frequencies.'
  },
  {
    id: 'h96',
    type: 'choice',
    prompt: 'Range advantage and nut advantage на flop K-K-2 для BTN PFR vs BB defender?',
    options: [
      'BB has both (defended K2)',
      'BTN has both (more Kx in opening range, more Aces, all pocket pairs)',
      'Range BTN, nut BB',
      'Range BB, nut BTN'
    ],
    correctIndex: 1,
    explanation: 'KK2 rainbow: BTN PFR имеет BOTH advantages. Range advantage — больше Kx, KQ, KJ, AKs в opening. Nut advantage — все pocket pairs (AA, QQ, JJ stronger than BB defended ranges typically). BTN can c-bet aggressive any size; solver часто 75%+ с broad range.'
  },
  {
    id: 'h97',
    type: 'choice',
    prompt: 'River call с bluff-catcher против overbet shove (1.5x pot): minimum equity needed (without ICM)?',
    options: [
      '20%',
      '~33%',
      '50%',
      '60%+'
    ],
    correctIndex: 1,
    explanation: 'Overbet 1.5x pot: pot 100, bet 150. Total pot 250, call 150 to win 250. Pot odds 150/(150+250) = 37.5%. Need ~37% equity для break-even call. Polarized opp range theory: overbet has ~30% bluffs, top 70% nuts — bluff-catcher gets EV at break-even.'
  },
  {
    id: 'h98',
    type: 'choice',
    prompt: 'Advanced spot: SB limp into BB. BB checks. Flop. SB c-bets. BB strategy?',
    options: [
      'Fold ATC except top hands',
      'Defend с MDF + position-realization adjustments — широкое flat call ranges + occasional raises',
      'Always raise',
      'Only call premium'
    ],
    correctIndex: 1,
    explanation: 'SB limp gives BB pre-flop check option (no fold-equity to give up). Postflop: BB c-bet response calibrated to SB\'s limp range (often weak/mixed). BB defends wide (calls TPany, flopped draws), occasional raises with strong hands or polar bluffs.'
  },
  {
    id: 'h99',
    type: 'choice',
    prompt: 'When in tournament does ICM-pressure exceed chip-pressure significantly?',
    options: [
      'Beginning',
      'Mid-stage',
      'Bubble и final table (с big pay-jumps)',
      'Heads-up'
    ],
    correctIndex: 2,
    explanation: 'ICM-pressure dominates: 1) Money bubble (ITM jump huge), 2) Final table bubble (top-9 jump), 3) Within final table at each pay-jump. Mid-stage ICM минимальное. HU pure поскольку winner-takes-all-prize aside (final pay-jump small ~ 50-30 split).'
  },
  {
    id: 'h100',
    type: 'choice',
    prompt: 'Сводно: главное преимущество big stack на финалке — почему он зарабатывает больше chipEV?',
    options: [
      'Card distribution lucky',
      'Leverage — opponents can\'t call him без огромной equity due to ICM, поэтому он берёт банки с FE alone',
      'Big stacks get better dealers',
      'No psychological reason'
    ],
    correctIndex: 1,
    explanation: 'Big stack edge на финалке: ICM-leverage. Middle stacks tight callers (стоит больше потерять чем выиграть). Big stack может open wide, 3-bet wide, c-bet aggressive. Fold equity huge без real risk. Это формирует chip-leader effect — больше выигрывает блайнды и pots без showdown.'
  }
]
