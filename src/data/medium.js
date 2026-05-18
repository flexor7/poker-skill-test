export const mediumQuestions = [
  {
    id: 'm01',
    type: 'numeric',
    prompt: 'В банке $100. Оппонент ставит $50. Какой % equity нужен для безубыточного колла?',
    unit: '%',
    correctValue: 25,
    tolerance: 2,
    step: 1,
    explanation: 'Pot odds = call / (call + new pot) = 50 / (50 + 150) = 25%. То есть нужно выигрывать руку чаще 25%, чтобы колл был +EV.'
  },
  {
    id: 'm02',
    type: 'choice',
    prompt: 'Equity AKs против JJ на префлопе (heads-up, all-in)?',
    hand: { hero: ['As', 'Ks'] },
    options: [
      'AKs — ~57% (фаворит)',
      'Примерно 50/50',
      'JJ — ~57% (фаворит)',
      'JJ — ~70% (доминирует)'
    ],
    correctIndex: 2,
    explanation: 'Карманная пара JJ имеет ~57% против AKs. Это классический "flip-not-flip": пара обычно фаворит против двух недоминированных оверкарт.'
  },
  {
    id: 'm03',
    type: 'choice',
    prompt: 'Equity AA против KK на префлопе (heads-up, all-in)?',
    options: [
      '~65/35 в пользу AA',
      '~82/18 в пользу AA',
      '~92/8 в пользу AA',
      'Примерно 50/50'
    ],
    correctIndex: 1,
    explanation: 'AA имеет ~82% против KK. Доминирующая ситуация: KK выигрывает только при попадании в сет (~12%) или экзотической линии (стрит/флэш).'
  },
  {
    id: 'm04',
    type: 'choice',
    prompt: 'Equity AKs против пары 22 на префлопе?',
    hand: { hero: ['Ac', 'Kc'] },
    options: [
      'AKs ~70% (доминирует)',
      'AKs ~60% (фаворит)',
      '~50/50 ("flip")',
      '22 ~60% (фаворит)'
    ],
    correctIndex: 2,
    explanation: 'Знаменитый "flip" — равная равная игра ~50/50 (точнее 52/48 в пользу пары на доске без помощи AKs). Любая мелкая пара против двух оверкарт даёт примерно 50/50.'
  },
  {
    id: 'm05',
    type: 'choice',
    prompt: 'Что значит "pot-committed"?',
    options: [
      'Игрок зашёл all-in префлоп',
      'Оставшийся стек настолько мал относительно банка, что фолд почти всегда -EV',
      'Игрок выиграл банк ранее',
      'Минимальный размер ставки на этой улице'
    ],
    correctIndex: 1,
    explanation: 'Pot-committed: оставшийся стек слишком мал по сравнению с банком — даже с маргинальной рукой колл выгоднее, потому что цена ошибки меньше потенциального выигрыша.'
  },
  {
    id: 'm06',
    type: 'choice',
    prompt: 'Continuation bet (c-bet) — это?',
    options: [
      'Ставка на тёрне после флоп-чек-чек',
      'Ставка на флопе от префлоп-агрессора',
      'Принудительная ставка нового игрока',
      'Ставка на ривере после показа карт'
    ],
    correctIndex: 1,
    explanation: 'C-bet — продолжение агрессии: игрок, который рейзил префлоп, делает ставку на флопе независимо от того, попал ли он в борд. База постфлоп-стратегии.'
  },
  {
    id: 'm07',
    type: 'slider',
    prompt: 'Стандартный размер open-raise с BTN в NL кэше (в больших блайндах)?',
    sliderMin: 1,
    sliderMax: 5,
    sliderStep: 0.1,
    unit: ' bb',
    correctRange: [2.2, 2.7],
    explanation: 'Современный sizing с BTN — 2.2-2.5x bb. Из ранней позиции (UTG) часто чуть больше — 2.5-3 bb. Слишком большой open сужает диапазон, слишком маленький — плохие pot odds для рейза.'
  },
  {
    id: 'm08',
    type: 'choice',
    prompt: 'Что такое squeeze play?',
    options: [
      'Ставка-провокация на флопе',
      'Префлоп 3-bet против опена + одного и более колла',
      'Бет на ривере с топ-парой для thin value',
      'Чек-рейз с дро'
    ],
    correctIndex: 1,
    explanation: 'Squeeze — 3-bet, когда уже был опен и колл. Создаёт давление: коллер уже показал, что у него не топ-рука, а опенер должен думать о коллере. Размер ~3.5-4x опена + 1bb за коллера.'
  },
  {
    id: 'm09',
    type: 'numeric',
    prompt: 'У вас 9 аутов до флэша на тёрне. Приблизительная вероятность попасть к риверу (%)?',
    unit: '%',
    correctValue: 20,
    tolerance: 3,
    step: 1,
    explanation: 'Правило 2: outs × 2 ≈ % к следующей улице. 9 × 2 = 18%, точно ~19.6%. Если флэш-дро уже на флопе, до ривера ~36% (правило 4).'
  },
  {
    id: 'm10',
    type: 'choice',
    prompt: 'Что такое implied odds?',
    options: [
      'Pot odds, рассчитанные только из текущей ставки',
      'Учёт будущих выигрышей, если попадёте в дро',
      'Шанс блефа против пассивного оппонента',
      'Equity против диапазона оппонента'
    ],
    correctIndex: 1,
    explanation: 'Implied odds: если pot odds для колла недостаточны (например, 20% equity при нужных 25%), но при попадании в дро вы выиграете дополнительные деньги — этот будущий выигрыш делает колл выгодным.'
  },
  {
    id: 'm11',
    type: 'choice',
    prompt: 'Что такое set mining?',
    hand: { hero: ['7d', '7c'] },
    options: [
      'Блеф с малыми парами против слабого диапазона',
      'Колл префлоп с маленькой парой в надежде на сет на флопе',
      'Сет-вэлью на ривере',
      'Бет на флопе с three of a kind'
    ],
    correctIndex: 1,
    explanation: 'Set mining: колл с pocket pair (особенно 22-77) в надежде попасть в сет на флопе (~12%). Работает при хороших implied odds — глубокие стеки или предсказуемо платящие оппоненты.'
  },
  {
    id: 'm12',
    type: 'choice',
    prompt: 'Reverse implied odds — это?',
    options: [
      'Шанс выиграть банк блефом',
      'Риск потерять много фишек, когда вы попадёте, но оппонент попадёт сильнее',
      'Обратная сторона pot odds для оппонента',
      'Скорректированная equity с учётом fold equity'
    ],
    correctIndex: 1,
    explanation: 'Reverse implied odds: вы попадаете во вторую пару, но оппонент попадает в топ-пару или сет, и вы платите ему дополнительно на следующих улицах. Опасны для маргинальных рук типа A6 на доске с тузом.'
  },
  {
    id: 'm13',
    type: 'choice',
    prompt: 'Polarized range — это?',
    options: [
      'Только премиум-руки',
      'Очень сильные руки + блефы, без средних',
      'Только мариджинальные руки',
      'Диапазон, привязанный к позиции'
    ],
    correctIndex: 1,
    explanation: 'Поляризованный диапазон = "натсы или ничего". Применяется при крупных ставках/овербетах: либо вэлью с premium, либо блеф с воздухом. Средние руки в таких линиях редки.'
  },
  {
    id: 'm14',
    type: 'slider',
    prompt: 'Стандартный c-bet sizing на сухом флопе типа Axx rainbow (% от pot)',
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 5,
    unit: '%',
    correctRange: [25, 40],
    explanation: 'На сухих текстурах с явным range advantage (Axx rainbow для PFR) — маленький c-bet 25-33%. Это эксплуатирует тот факт, что у оппонента почти нет сильных рук, и можно дёшево забирать банки.'
  },
  {
    id: 'm15',
    type: 'choice',
    prompt: 'Где применяется ICM (Independent Chip Model)?',
    options: [
      'В кэш-играх для расчёта pot odds',
      'В турнирах для оценки реальной $-стоимости стека по призовой сетке',
      'В планировании буст-движений с big blind',
      'В hand reading против регуляров'
    ],
    correctIndex: 1,
    explanation: 'ICM — модель оценки фишек в турнирах в $-эквиваленте. Учитывает, что лишние фишки стоят меньше потерянных (диминирующая полезность). Критична на пузыре и финалке.'
  },
  {
    id: 'm16',
    type: 'choice',
    prompt: 'M-ratio в турнирном покере — что измеряет?',
    options: [
      'Соотношение M-стека к среднему стеку',
      'Стек / стоимость одной орбиты (SB + BB + антэ × игроков)',
      'Число большой блайндов в стеке',
      'Аггрессион игрока'
    ],
    correctIndex: 1,
    explanation: 'M-ratio = стек / (SB + BB + антэ × игроков за столом). Показывает, сколько орбит вы можете протянуть на фолдах. M<10 — зона push/fold, M>20 — комфортная зона.'
  },
  {
    id: 'm17',
    type: 'dnd-sort',
    prompt: 'Расставь руки по equity vs random hand (heads-up), от сильнейшей к слабейшей',
    items: ['AA', 'AKs', 'TT', 'AJo'],
    itemLabels: {
      AA: 'AA (~85%)',
      AKs: 'AKs (~67%)',
      TT: 'TT (~75%)',
      AJo: 'AJo (~64%)'
    },
    correctOrder: ['AA', 'TT', 'AKs', 'AJo'],
    dndHint: 'Сверху — самая сильная против рандомной руки',
    explanation: 'Equity vs random: AA ≈ 85%, TT ≈ 75%, AKs ≈ 67%, AJo ≈ 64%. Карманные пары часто сильнее, чем кажется — они уже сделанные руки. AKs > AJo потому что одномастность даёт +3% и блокеры лучше.'
  },
  {
    id: 'm18',
    type: 'choice',
    prompt: 'Donk bet — это?',
    options: [
      'Ставка на ривере с натсами',
      'Бет от не-агрессора префлопа против PFR на следующей улице (обычно флопе)',
      'Минимальный рейз против лимпа',
      'Bluff bet на пустой текстуре'
    ],
    correctIndex: 1,
    explanation: 'Donk bet — игрок, который коллировал префлоп, ставит первым на флопе, опережая c-bet от агрессора. Исторически считался признаком слабости, но современные solver-стратегии используют донк в специфичных спотах (например, низкие соединённые борды от BB).'
  },
  {
    id: 'm19',
    type: 'choice',
    prompt: 'Stack-to-pot ratio (SPR) на флопе — какое значение?',
    options: [
      'Высокий SPR (>10) → выгодно играть pot control с маргинальными руками',
      'Низкий SPR (<3) → обычно коммитмент с топ-парой и лучше',
      'SPR не влияет на стратегию постфлоп',
      'Оба варианта A и B верны'
    ],
    correctIndex: 3,
    explanation: 'SPR = эффективный стек / pot на флопе. Низкий SPR (1-3) — обычно играешь до конца с топ-парой / оверпарой. Высокий SPR (>10) — нужно быть аккуратнее, маргинальные руки уязвимы, маневрирование важнее.'
  },
  {
    id: 'm20',
    type: 'choice',
    prompt: 'Aggression factor (AF) — что это?',
    options: [
      'Процент рук, в которых игрок 3-bet',
      'Отношение (bet + raise) / call',
      'Среднее число фишек в банке к концу раздачи',
      'Процент стилов с BTN'
    ],
    correctIndex: 1,
    explanation: 'AF = (число бетов + рейзов) / число коллов. Показывает агрессивность постфлоп. AF=1 — пассивный, AF=3+ — агрессивный. Дополняется WTSD% и Aggression Frequency (AFq) для полной картины.'
  },
  {
    id: 'm21',
    type: 'choice',
    prompt: 'Стек 10 bb на BTN, фолды до тебя. Какая стратегия по Nash?',
    hand: { hero: ['Ah', '5d'], position: 'BTN', stack: '10 bb' },
    options: [
      'Стандартный open-raise 2bb',
      'Shove all-in (push/fold зона) — A5o попадает в шов',
      'Лимп 1bb',
      'Fold'
    ],
    correctIndex: 1,
    explanation: 'BTN с 10bb — push/fold зона. По Nash-чарту BTN-шов включает все Ax (включая A2-A5o), все пары, broadways и suited connectors. A5o — стандартный шов. Открытие на 2bb оставит SPR <1.5 на флопе — почти все равно коммитмент.'
  },
  {
    id: 'm22',
    type: 'choice',
    prompt: 'CO 12 bb, все фолды до тебя. Шов с QJo?',
    hand: { hero: ['Qs', 'Jh'], position: 'CO', stack: '12 bb' },
    options: [
      'Да, QJo попадает в Nash-range шова CO с 12 bb',
      'Нет, QJo слишком слабая для шова',
      'Только при тайтовых блайндах',
      'Зависит от ICM-situations'
    ],
    correctIndex: 0,
    explanation: 'CO с 12 bb по Nash: ~17-20% top рук, включающие QJo+, QTo+, K9o+, A2o+, все пары. QJo — стандартный шов. Без ICM-факторов — clear push.'
  },
  {
    id: 'm23',
    type: 'choice',
    prompt: 'UTG 15 bb, 9-handed. С чего шовить?',
    options: [
      'Очень широкий range — все Ax, любые броудвеи',
      'Tight: TT+, AQs+, AKo (примерно 4-5% рук)',
      'Только AA',
      'Любые pocket pairs'
    ],
    correctIndex: 1,
    explanation: 'UTG в 9-handed раннее место + 7 игроков за тобой → нужен сильный диапазон. По Nash: 99+ или TT+, AQs+, AKo. 4-5% рук. С 15 bb open-raise 2.2-2.5x ещё работает с premium-руками; с 12 bb уже шов/фолд.'
  },
  {
    id: 'm24',
    type: 'choice',
    prompt: 'BTN 8 bb, все фолд до тебя. Какие руки шовить?',
    hand: { position: 'BTN', stack: '8 bb' },
    options: [
      'Только premium TT+, AKs+',
      'Около 35-45% рук (любые Ax, любые пары, suited broadways, K7s+, Q8s+, almost any two)',
      'Только Ax и любые пары',
      'Open-raise 2bb, не шов'
    ],
    correctIndex: 1,
    explanation: 'BTN с 8 bb — экстра-широкий range. Pot odds для blinds выгодны (1.5 bb в банке, шовишь 8). Любая Ax, любая пара, любые suited broadways/connectors, многие offsuit broadways. Almost-any-two в правильных условиях.'
  },
  {
    id: 'm25',
    type: 'choice',
    prompt: '20 bb эффективный стек, CO открыл 2.2x, ты на BTN с AKo. Действие?',
    hand: { hero: ['Ac', 'Kh'], position: 'BTN', stack: '20 bb' },
    options: [
      'Колл',
      '3-bet shove (re-shove all-in)',
      'Мин-3-бет',
      'Фолд'
    ],
    correctIndex: 1,
    explanation: 'AKo с 20 bb против CO open — стандартный 3-bet shove. Колл усложняет постфлоп (нерешённая equity OOP), маленький 3-bet "non-committed" tot он отвернётся с худшими руками. Шов получает максимум fold equity + выгодный SPR при коллах.'
  },
  {
    id: 'm26',
    type: 'choice',
    prompt: 'BB с 25 bb, SB открыл 2.5x. У тебя 87s. Действие?',
    hand: { hero: ['8s', '7s'], position: 'BB', stack: '25 bb' },
    options: [
      'Фолд — слишком слабо',
      'Колл — есть позиция (но это BB, OOP) и реализация equity на постфлопе',
      '3-bet до 8bb для defenда',
      'All-in'
    ],
    correctIndex: 1,
    explanation: '87s vs SB open — хороший defending хэнд: реализует equity на postflop через flushes, straights, pairs. С 25 bb достаточно стека для манёвра. Шов — overkill, 3-bet поляризован (лучше для рук как A5s, K4s в качестве блефов).'
  },
  {
    id: 'm27',
    type: 'choice',
    prompt: 'Bubble. У тебя 30bb на BTN, big stack 60bb на BB. Все фолд. У тебя 78s. Действие?',
    hand: { hero: ['7s', '8s'], position: 'BTN', stack: '30 bb' },
    options: [
      'Open 2.5x — стандартный steal',
      'Fold — bubble pressure от big stack',
      'Limp 1bb',
      'Open и затем шов в любой 3-bet'
    ],
    correctIndex: 1,
    explanation: 'На бубне big stack из BB будет 3-bet\'ить шире (можно безболезненно атаковать твой стек). 78s — слабая для defenда против 3-bet шова. Базовая ICM-стратегия: тайтнее открываем против big stacks из BB.'
  },
  {
    id: 'm28',
    type: 'choice',
    prompt: 'ICM bubble (8 left, paid 7). У тебя 15 bb на CO, MP открыл 2.2x, ты с QQ. Стандартное действие?',
    hand: { hero: ['Qd', 'Qh'], position: 'CO', stack: '15 bb' },
    options: [
      'Колл, посмотрим флоп',
      '3-bet shove all-in',
      'Маленький 3-bet 5bb',
      'Fold (QQ слабая на бубне)'
    ],
    correctIndex: 1,
    explanation: 'QQ vs MP open — премиум-spot для 3-bet shove с 15 bb. Маленький 3-bet оставит SPR ~1, и ты pot-committed на любом флопе. Шов максимизирует fold equity + защиту против overcards.'
  },
  {
    id: 'm29',
    type: 'choice',
    prompt: 'Final table 6-max, 4 left. Эффективный стек 18 bb. CO open, ты на BTN с TT. Pay-jumps большие. Действие?',
    hand: { hero: ['Tc', 'Td'], position: 'BTN', stack: '18 bb' },
    options: [
      'Колл — TT не любит OOP на 3-bet',
      '3-bet shove',
      'Маленький 3-bet 4.5bb',
      'Fold'
    ],
    correctIndex: 1,
    explanation: 'TT в позиции против CO opener — стандартный 3-bet shove с 18 bb. ICM pressure: оппонент сложно колит без супер-премиума. Колл оставит OOP-чувствительные постфлоп решения; маленький 3-bet оставит pot-committed; шов = clean.'
  },
  {
    id: 'm30',
    type: 'choice',
    prompt: 'Squeeze opportunity: UTG open 2.2bb, MP call. У тебя BB с 28 bb и AJs. Действие?',
    hand: { hero: ['As', 'Js'], position: 'BB', stack: '28 bb' },
    options: [
      'Колл — позиция (но это BB) и потенциал',
      'Fold — две руки впереди',
      'Squeeze до 11-12 bb (3-bet против opener + caller)',
      'Shove all-in 28 bb'
    ],
    correctIndex: 2,
    explanation: 'AJs — хороший squeeze: блокирует AA, AK, AJ. UTG-opener плюс MP-caller обычно не имеют топ-диапазона (премиум 4-bet\'или бы), squeeze получает fold equity от обоих. Размер ~11-12bb. Шов слишком — лишает FE на премиум-фолды.'
  },
  {
    id: 'm31',
    type: 'choice',
    prompt: 'Антэ начались. Как это влияет на open ranges?',
    options: [
      'Раскрывают (расширяют) — больше денег в банке делает steals выгоднее',
      'Сужают — нужно больше equity чтобы инвестировать',
      'Не влияют',
      'Только на pre-flop'
    ],
    correctIndex: 0,
    explanation: 'Антэ добавляют 1-1.5 bb в банк до раздачи. Это увеличивает потенциальный выигрыш от successful steal (от ~1.5 bb до 2.5-3 bb) — стилы становятся выгоднее, ranges расширяются. Особенно много меняется с BB-ante.'
  },
  {
    id: 'm32',
    type: 'choice',
    prompt: 'Какая позиция в 9-max делает best steal-моветь блайнды (без антэ)?',
    table: { highlight: 'BTN', seats: 9 },
    options: ['UTG', 'MP', 'BTN', 'BB'],
    correctIndex: 2,
    explanation: 'BTN — лучшая позиция для steal: только SB и BB позади, обе будут OOP постфлоп. CO — второе место. С добавлением антэ диапазоны steal\'ов с BTN расширяются ещё больше (40-50% рук).'
  },
  {
    id: 'm33',
    type: 'choice',
    prompt: 'Stop-and-go практический пример: BB с 12 bb против SB open 2.5x. У тебя 88. Действие?',
    hand: { hero: ['8c', '8h'], position: 'BB', stack: '12 bb' },
    options: [
      'Pre-flop shove',
      'Pre-flop call, затем all-in на флопе вне очереди (stop-and-go)',
      'Fold',
      'Min-3-bet 5bb'
    ],
    correctIndex: 1,
    explanation: 'Stop-and-go с 88 на 12 bb vs SB open: pre-flop колл, на флопе шов независимо от карты. Это даёт fold equity на флопе (которой нет у pre-flop shove — SB уже инвестировал и обязан колить). Особенно эффективно когда BB OOP.'
  },
  {
    id: 'm34',
    type: 'choice',
    prompt: 'Big stack на пузыре MTT — как должен играть?',
    options: [
      'Тайтнее, защищая лидерство',
      'Атаковать middle stacks с широких диапазонов (они не могут колить из-за ICM)',
      'Только шовить premium',
      'Игнорировать пузырь, играть как обычно'
    ],
    correctIndex: 1,
    explanation: 'Big stack — главный бенефициар ICM-pressure. Middle stacks особенно уязвимы: для них вылет = $0, для big stack = просто меньший стек. Лидер открывает 50%+ рук с поздних позиций, изолирует short, давит средних.'
  },
  {
    id: 'm35',
    type: 'choice',
    prompt: 'Pay-jump differential на бубне (с 18 до 17 — последний без денег vs первый в деньгах). Что это значит для решений?',
    options: [
      'Должно стимулировать риски',
      'Большой pay-jump усиливает ICM-pressure — тайтнее коллы all-in, но активнее шовы',
      'Не имеет значения',
      'Только лидер может это эксплуатировать'
    ],
    correctIndex: 1,
    explanation: 'Большой первый pay-jump (вылет = $0, ITM = X$) = огромный ICM-bubble factor. Marginal callers тайтнее (стоит вдвойне!), но открытие/шов короткого/среднего стека выгоднее (FE-увеличивается). Это создаёт асимметрию.'
  },
  {
    id: 'm36',
    type: 'choice',
    prompt: 'У тебя 8 bb, на бубне. Open-shoves vs SB ATC. У тебя BTN с K9o. Действие?',
    hand: { hero: ['Ks', '9d'], position: 'BTN', stack: '8 bb' },
    options: [
      'Шов — K9o попадает в push range',
      'Фолд — bubble pressure',
      'Min-raise',
      'Лимп'
    ],
    correctIndex: 0,
    explanation: 'BTN 8 bb на бубне vs SB+BB которые тайтно колят — K9o стандартный шов. Pot odds для steal 1.5 bb на 8 = 18% breakeven FE. SB и BB вместе фолдят 80%+ (на пузыре), и даже при call у K9o есть equity.'
  },
  {
    id: 'm37',
    type: 'choice',
    prompt: 'Mid-stage MTT (с антэ), 25 bb на CO, все фолды. У тебя 65s. Действие?',
    hand: { hero: ['6h', '5h'], position: 'CO', stack: '25 bb' },
    options: [
      'Fold',
      'Open 2.2-2.5x — суиeд connector хорошо стилит и имеет постфлоп-потенциал',
      'Шов 25 bb',
      'Лимп'
    ],
    correctIndex: 1,
    explanation: '65s — отличная steal-рука с 25 bb на CO с антэ. Большой банк в банке (антэ + блайнды), часто фолдят сразу. Если call — есть implied odds через straights и flushes. Шов overkill, лимп пассивен.'
  },
  {
    id: 'm38',
    type: 'choice',
    prompt: '4-handed final, big stack 50bb, short 8bb, 2 middle по 22bb. Кто под максимальным ICM pressure при принятии решений?',
    options: [
      'Big stack',
      'Short stack',
      'Middle stacks (не могут колить, играют сильно за-tight)',
      'ICM на 4-handed уже не работает'
    ],
    correctIndex: 2,
    explanation: 'Middle stacks ловят максимум ICM-pressure: вылет = пропуск pay-jumps, для big stack — потеря лидерства относительно небольшая. Big stack использует это, открывает шире, давит средних. Short stack уже в "free-roll" — терять нечего.'
  },
  {
    id: 'm39',
    type: 'choice',
    prompt: 'Heads-up турнир. SB 12 bb. Какой % рук BB должен коллить vs SB shove all-in (по Nash)?',
    options: [
      '20-25%',
      '40-50%',
      '60-70%',
      '80-90%'
    ],
    correctIndex: 2,
    explanation: 'BB vs SB shove 12 bb: огромные pot odds (1+1.5 в банке, доколлить 10.5). BB должен колить ~55-65% по Nash. Любая Ax, любая пара, broadways, suited connectors, многие K-rags. ICM в HU отсутствует (winner takes all in pure HU).'
  },
  {
    id: 'm40',
    type: 'choice',
    prompt: 'BB defense vs SB min-raise (2bb), эффективный стек 25 bb. Какой % рук должен защищать?',
    options: [
      '15-20% (только premium)',
      '40-55% — pot odds выгодны (3 vs 1), и BB IP в HU',
      '70-80%',
      '100% — ATC'
    ],
    correctIndex: 1,
    explanation: 'BB vs SB min-raise: pot odds 1 to 3 — нужно только 25% equity. Защита 40-55% — Ax, pocket pairs, broadways, suited connectors, K-rags. С 25 bb defending тоже включает 3-bet shove с marginal рукам (A8o, KJo).'
  },
  {
    id: 'm41',
    type: 'choice',
    prompt: 'Re-shove (3-bet all-in) vs open: характеристика?',
    options: [
      'Только с premium TT+, AK+',
      'Используется с marginal руками (A5o, KJo) для FE + полу-блеф equity',
      'Только с маленькими парами',
      'Никогда не используется в турнирах'
    ],
    correctIndex: 1,
    explanation: 'Re-shove ranges специально подобраны для FE + блокеров. Не премиум-руки (их 4-bet шов делает легко) и не мусор (нет equity). Sweet spot: руки типа A5o-A8o, K9o-KJo, suited weak Ax (A5s блокирует AA, AKs). Размер шова обычно 12-18 bb.'
  },
  {
    id: 'm42',
    type: 'choice',
    prompt: 'У тебя 11 bb на CO, все фолды до тебя. С K2s — действие?',
    hand: { hero: ['Kh', '2h'], position: 'CO', stack: '11 bb' },
    options: [
      'Fold — K2s слаба',
      'Шов — K2s включается в shove range CO 11 bb',
      'Min-raise',
      'Limp'
    ],
    correctIndex: 1,
    explanation: 'CO 11 bb — широкий shove range (~22-25%). K2s входит благодаря: блокеру (K в нашей руке = меньше K в SB/BB), one-gapper suited (плюс flush draws). Не премиум, но математически шов положителен.'
  },
  {
    id: 'm43',
    type: 'choice',
    prompt: 'Bounty турнир (KO). У тебя 30 bb, шорт 5 bb идёт all-in. Ты в позиции с A9o. Что делать?',
    hand: { hero: ['As', '9d'], stack: '30 bb' },
    options: [
      'Fold — A9o маргинальная',
      'Колл — bounty за вынос шорта оправдывает колл с marginal рукой',
      'Re-shove',
      'Fold с ICM-pressure'
    ],
    correctIndex: 1,
    explanation: 'В KO-турнирах bounty за выбивание добавляет $-value к равенству call\'а. Vs random shove 5bb от шорта: A9o имеет ~58% equity, плюс bounty bonus. Стандартный call.'
  },
  {
    id: 'm44',
    type: 'choice',
    prompt: 'У тебя BB 14 bb. UTG (12bb стек) open-shoves all-in. Ты с TT. Действие?',
    hand: { hero: ['Th', 'Tc'], position: 'BB', stack: '14 bb' },
    options: [
      'Fold — UTG range очень тайтовый',
      'Call — TT vs UTG shove range обычно фаворит',
      'Зависит от ICM',
      'Re-shove (но ты уже behind на BB)'
    ],
    correctIndex: 1,
    explanation: 'UTG shove range на 12 bb обычно ~5-7% рук: 66+, AT+, KQs. TT vs этот range: equity ~55%. Pot odds для колла очень выгодные. Без катастрофического ICM (бубнём, например) — стандартный call.'
  },
  {
    id: 'm45',
    type: 'choice',
    prompt: 'SB с 20 bb, все фолды. У тебя A2o. Стратегия?',
    hand: { hero: ['Ad', '2c'], position: 'SB', stack: '20 bb' },
    options: [
      'Fold',
      'Open 2.5x или limp — оба валидны, A2o слишком слаба для шова',
      'Shove all-in',
      'Min-raise 2bb'
    ],
    correctIndex: 1,
    explanation: 'SB 20 bb vs BB heads-up: open-raise (2-2.5x) или limp — оба валидны в solver-стратегиях. Шов с A2o overkill — 4-bet от BB опасен (KK, AK доминируют). С 12 bb уже становится stop-and-go или шов; с 20+ — открытие.'
  },
  {
    id: 'm46',
    type: 'choice',
    prompt: 'Эффективный стек 20 bb. CO open 2.2x, BTN colle, SB fold, ты BB с 99. Действие?',
    hand: { hero: ['9c', '9h'], position: 'BB', stack: '20 bb' },
    options: [
      'Fold — multi-way против двух впереди',
      'Колл — set-mining + потенциал',
      'Squeeze shove 20 bb',
      'Min-3-bet 6 bb'
    ],
    correctIndex: 2,
    explanation: '99 в squeeze-споте на 20 bb — стандартный shove. CO opener + BTN caller обычно не имеют премиума (иначе reraise бы). FE от обоих + equity vs callers (99 обычно фаворит против их marginal calling ranges). Колл проблематичен OOP multi-way.'
  },
  {
    id: 'm47',
    type: 'choice',
    prompt: 'Late stage (10 left, top 6 paid). У тебя 12bb на UTG. С 22 — действие?',
    hand: { hero: ['2d', '2c'], position: 'UTG', stack: '12 bb' },
    options: [
      'Shove — pair-shove стандарт',
      'Fold — UTG слишком ранняя позиция',
      'Open 2.5x',
      'Stop-and-go'
    ],
    correctIndex: 1,
    explanation: '22 на UTG в 9-handed с 12 bb — обычно fold. 7 игроков сзади, любая Ax или broadway имеет 49-50% equity. На bubble (10/6) — фолд тем более. Если бы 5-6-handed уже — пара становится шовной с этой позиции.'
  },
  {
    id: 'm48',
    type: 'choice',
    prompt: 'PKO турнир. У тебя 50 bb, шорт-стек с 6 bb на бубне. Должен ли ты шире играть call\'ов?',
    options: [
      'Нет, ICM держит коллы тайтовее',
      'Да — bounty за выбивание + увеличение твоей собственной head\'ы делает call wider',
      'Только если head стоит >$1000',
      'Не влияет на стратегию'
    ],
    correctIndex: 1,
    explanation: 'В PKO бубновый период благоприятен для call\'ов больших стеков против шортов: bounty часть моментально + увеличение твоей head\'ы (плюс ловить шорта без ICM-риска для big stack). Стандартная PKO bubble стратегия.'
  },
  {
    id: 'm49',
    type: 'choice',
    prompt: 'M-ratio 8 (red zone). Стратегия?',
    options: [
      'Сидеть и ждать премиум',
      'Push/fold почти исключительно',
      'Открываться 3x',
      'Limp с premium'
    ],
    correctIndex: 1,
    explanation: 'M < 10 (red zone по Harrington): time is running out, любая орбита съест значительную часть стека. Стратегия — поиск +EV all-in спот: open-shoves, re-shoves vs steals. Открытие 3x создаёт неудобный SPR.'
  },
  {
    id: 'm50',
    type: 'choice',
    prompt: 'M-ratio 20 (green zone). Стратегия?',
    options: [
      'Push/fold',
      'Стандартные open-raises 2.2-2.5x, можно играть постфлоп',
      'Только тайт-пассивная игра',
      'Все all-in решения'
    ],
    correctIndex: 1,
    explanation: 'M > 20 (green) — комфортная зона. Стандартная стратегия: open-raises 2.2-2.5x, 3-betting, играем post-flop с глубиной для манёвра. Можно set-mining с маленькими парами, можно широкие defending из блайндов.'
  },
  {
    id: 'm51',
    type: 'choice',
    prompt: 'Сжатие диапазона open-raise при увеличении количества игроков за столом — что происходит?',
    options: [
      'Range расширяется (больше денег в антэ)',
      'Range сужается (больше игроков сзади — больше шансов попасть на премиум)',
      'Не меняется',
      'Только зависит от стек'
    ],
    correctIndex: 1,
    explanation: 'С UTG в 9-handed range tighter, чем с UTG в 6-handed (4 vs 7 игроков сзади). На каждую дополнительную позицию сзади вероятность встретить премиум увеличивается. Например UTG 9-max: ~10%, UTG 6-max: ~18%.'
  },
  {
    id: 'm52',
    type: 'choice',
    prompt: 'Final 3 (3-handed) с равными стеками 30 bb. Strategy shift по сравнению с 6-handed?',
    options: [
      'Никаких изменений',
      'Гораздо шире open ranges, агрессивные 3-bets, ICM огромное значение из-за pay-jumps',
      'Только тайтовая игра',
      'Только push/fold'
    ],
    correctIndex: 1,
    explanation: '3-handed: ranges open резко расширяются (BTN open ~80%+, SB ~70%+), но ICM при больших pay-jumps требует чёткого баланса между агрессией и survival. Часто игроки делают deal в это момент.'
  },
  {
    id: 'm53',
    type: 'choice',
    prompt: 'Heads-up final турнира. SB играет на 70% рук. Что делать BB?',
    options: [
      'Защищать тайтно (только AA, KK)',
      'Защищать широко (50%+ рук), с большим re-raise диапазоном',
      'Только колл с премиум',
      'Не зависит от SB ranges'
    ],
    correctIndex: 1,
    explanation: 'Vs wide SB open BB должен защищаться так же широко — colling 30-40% и 3-betting 15-20%. Если bb позволит SB stealить blinds без сопротивления, потеряет блайнды очень быстро. Heads-up — игра агрессии.'
  },
  {
    id: 'm54',
    type: 'choice',
    prompt: 'У тебя 35 bb middle stack на финалке 5 left, big-stack 70 bb на BTN open. У тебя SB с AK. Действие?',
    hand: { hero: ['Ah', 'Kc'], position: 'SB', stack: '35 bb' },
    options: [
      'Колл — postflop edge',
      '3-bet до 9 bb',
      '3-bet shove — против big stack range от BTN AK хорошо',
      'Fold (ICM)'
    ],
    correctIndex: 1,
    explanation: 'AK с 35 bb middle stack vs big stack BTN open — не идеальный шов (35 bb много для shove, plus big stack может колить шире нас и доминировать). Стандарт: 3-bet до 9 bb. Если 4-bet от него — теперь шов выгоден.'
  },
  {
    id: 'm55',
    type: 'choice',
    prompt: 'Калибровка opening sizing в турнире по уровню стека?',
    options: [
      'Всегда 3x',
      'Глубокий (50+ bb) — 2.2-2.5x, средний 25-40 — 2-2.2x, короткий ≤20 — min-raise или шов',
      'Всегда мин-рейз',
      'Зависит только от позиции'
    ],
    correctIndex: 1,
    explanation: 'Современный sizing в MTT: глубокие стеки — 2.2-2.5x (давит SPR на постфлопе), средние — 2-2.2x (оставляет flexibility), короткие — min-raise (если не push/fold). С антэ ранее открытия становятся ещё дешевле относительно банка.'
  },
  {
    id: 'm56',
    type: 'choice',
    prompt: 'У тебя 10 bb эффективный против BB ATC defender. Какой shove range BTN оптимален?',
    options: [
      '10% — только premium',
      '30-35% (Nash) — Ax, pairs, broadways, K7s+, Q9s+, suited connectors',
      '50%+',
      '80%+ (almost any two)'
    ],
    correctIndex: 1,
    explanation: 'Nash push range BTN 10 bb против random ATC defender: ~32%. Включает все Ax, все pocket pairs, suited K-x+ K-2s, QTs+, J9s+, all suited connectors, плюс broadway offsuit. Это математически оптимум.'
  },
  {
    id: 'm57',
    type: 'choice',
    prompt: 'Постфлоп с 25 bb стеком против оппонента, который колил твой open 2.2x. Pot ~5 bb на флопе. Стандартный c-bet sizing?',
    options: [
      '0.25-0.33 pot (~1.5 bb)',
      '0.5-0.66 pot (~3 bb) — стандартный sizing в турнирном NL',
      '1x pot',
      '2x pot (overbet)'
    ],
    correctIndex: 1,
    explanation: 'Постфлоп c-bet sizing на средних стеках MTT обычно 0.5-0.66 pot. На сухих текстурах меньше (0.33), на wet — больше (0.75). При коротких стеках sizing меньше, чтобы оставить место для манёвра. Overbets — для специфичных риверов.'
  },
  {
    id: 'm58',
    type: 'choice',
    prompt: 'Чем больше антэ — тем opening range из позиции:',
    options: [
      'Сужается',
      'Расширяется (больше денег в банке = больше FE при стилe)',
      'Не меняется',
      'Зависит от стека'
    ],
    correctIndex: 1,
    explanation: 'Большие антэ → больше денег в банке до раздачи → лучшие pot odds для steal\'ов → ranges расширяются. С BB-ante (стандарт сейчас) BTN-range из ~40% становится ~55%+. Mid-stage MTT с антэ — самое выгодное место для agressive open game.'
  },
  {
    id: 'm59',
    type: 'choice',
    prompt: 'У тебя 6 bb effective на BTN, SB has 30 bb, BB has 6 bb. Все фолды до тебя. Strategy?',
    hand: { position: 'BTN', stack: '6 bb' },
    options: [
      'Шов очень широкий range (50%+)',
      'Только premium',
      'Limp 1 bb',
      'Fold всё'
    ],
    correctIndex: 0,
    explanation: 'BTN 6 bb effective — exceedingly wide shove range. Pot odds для steal огромные (1.5 bb in pot, шовишь 6). Любая two-card рука с хотя бы 35% equity vs random — шов. Это даже includes T2s, 95s. Кладёшь до 70%+ рук.'
  },
  {
    id: 'm60',
    type: 'choice',
    prompt: 'BB с 15 bb против SB open-shove 12 bb. Какой % рук BB должен колить?',
    options: [
      '5-10% (только premium TT+, AK+)',
      '15-25% (66+, ATo+, A2s+, KJ+, broadways)',
      '40-50%',
      '70%+'
    ],
    correctIndex: 1,
    explanation: 'BB vs SB shove 12 bb: pot odds для колла очень хорошие. Calling range Nash ~22%: 22+, A2o+, K9+, Q9s+, JTs, T9s, suited broadway, etc. С тайтовым SB shover — сужается; с лузовым — расширяется.'
  },
  {
    id: 'm61',
    type: 'numeric',
    prompt: 'Approx Nash shove range BTN с 10 bb против ATC blinds (% рук)?',
    unit: '%',
    correctValue: 32,
    tolerance: 5,
    step: 1,
    explanation: 'Nash chart BTN 10bb vs ATC defenders: ~32%. Включает все Ax, все pairs, suited broadways, suited connectors, многие offsuit broadway. Чем тайтнее реальные блайнды — тем шире можно шовить.'
  },
  {
    id: 'm62',
    type: 'numeric',
    prompt: 'M-ratio граница перехода в "red zone" (push/fold)?',
    correctValue: 10,
    tolerance: 2,
    step: 1,
    explanation: 'По Harrington: M < 10 — red zone, время на исходе. M 10-20 — orange/yellow, ограниченные опции. M > 20 — green, комфортная зона для стандартных розыгрышей.'
  },
  {
    id: 'm63',
    type: 'choice',
    prompt: 'BB с 30bb против BTN open 2.2bb. Какие руки колить (примерно)?',
    options: [
      'Только premium (TT+, AK)',
      '~25-30% (любые пары, suited broadway, suited connectors, suited Ax, многие broadways)',
      '~50% — BB должен защищаться очень широко',
      '5% — только AA, KK'
    ],
    correctIndex: 1,
    explanation: 'BB defense vs BTN open 2.2x: pot odds 1.2 на 3.7 ~25%. Калибровать к 25-30% — суитеды, broadway, pairs, mid-low suited connectors. С BB-ante range расширяется до 35%+. Топ ~12-15% делает 3-bet.'
  },
  {
    id: 'm64',
    type: 'choice',
    prompt: '3-bet sizing IP vs OOP в турнире, стек 40 bb?',
    options: [
      'IP меньше (около 2.5-3x), OOP больше (3.5-4x)',
      'IP больше, OOP меньше',
      'Одинаково 3x во всех случаях',
      'Только мин-3-бет в обоих случаях'
    ],
    correctIndex: 0,
    explanation: 'Стандарт sizing: IP 3-bet ~2.5-3x от опена, OOP — 3.5-4x. OOP больше из-за худшей реализации equity (need more fold equity, чтобы компенсировать постфлоп-disadvantage).'
  },
  {
    id: 'm65',
    type: 'slider',
    prompt: 'C-bet sizing на dry Axx flop с 25 bb стеком vs одного оппонента (% pot)',
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 5,
    unit: '%',
    correctRange: [25, 40],
    explanation: 'Dry Axx с range advantage — small c-bet (25-33%). У PFR много Ax, у callера почти нет. Маленький размер заставляет фолдить marginal руки оппонента и получает value от слабых пар/draws.'
  },
  {
    id: 'm66',
    type: 'choice',
    prompt: 'Mid-stage 30 bb, CO open 2.2x, BTN call. У тебя BB с 88. Действие?',
    hand: { hero: ['8h', '8d'], position: 'BB', stack: '30 bb' },
    options: [
      'Колл — set-mining + потенциал OOP против двух',
      'Squeeze до 11-12bb',
      'Shove all-in',
      'Fold'
    ],
    correctIndex: 0,
    explanation: '88 multi-way OOP с 30 bb — стандартный set-mining call. Bot odds для колла хорошие (~5:1), set hits ~12%. Squeeze можно с big pairs или с suited blockers; 88 хуже для squeeze (often dominated by called ranges).'
  },
  {
    id: 'm67',
    type: 'choice',
    prompt: 'Hyper-turbo SnG, 9-handed, всем по 25 bb (15-минутный фон). Стандарт?',
    options: [
      'Открытие 3-3.5x (стандарт hyper)',
      'Открытие 2-2.2x (минимизируем риск стека)',
      'Push/fold с первой раздачи',
      'Только лимпы'
    ],
    correctIndex: 1,
    explanation: 'Hyper-turbo: малые стеки и быстрая структура → small open sizing (2-2.2x), частые шов/фолд решения. Большие открытия (3x+) оставляют слишком мало для манёвра. Push/fold пока ещё рано — стандартные опены работают.'
  },
  {
    id: 'm68',
    type: 'choice',
    prompt: 'Final 2 (heads-up) MTT. SB 100 bb, BB 50 bb (lead 2:1). Pay-jumps огромные. Стратегия BB?',
    options: [
      'Тайтнее (защищать второе место)',
      'Агрессивнее — давить SB шовами с marginal-руками',
      'Стандартная heads-up стратегия (без adjust)',
      'Только колли premium'
    ],
    correctIndex: 0,
    explanation: 'Heads-up final турнира — winner-takes-all только теоретически (1-2 pay-jump огромный). BB с меньшим стеком должен защищать ИКМ-pressure: тайтнее коллит шов, тщательнее выбирает шов сам. Каждое всё-инн = риск ремейка цикла.'
  },
  {
    id: 'm69',
    type: 'choice',
    prompt: 'Effect of antes (1bb BB-ante) на open range BTN?',
    options: [
      'Открываем шире на 5-10% (больше денег для steal)',
      'Открываем тайтнее (нужна большая equity)',
      'Не меняется',
      'Зависит только от стека'
    ],
    correctIndex: 0,
    explanation: 'BB-ante 1bb добавляет в банк перед раздачей. BTN open: было 1.5bb в пот, стало 2.5bb. Pot odds стила улучшаются. Range расширяется на 5-15%, особенно за счёт слабых suited connectors и broadway.'
  },
  {
    id: 'm70',
    type: 'dnd-sort',
    prompt: 'Расставь стеки по влиянию ICM-pressure на их calling ranges (от наибольшего к наименьшему)',
    items: ['middle', 'short', 'big', 'shortest'],
    itemLabels: {
      'middle': 'Middle stack (тяжело защищать без вылета)',
      'short': 'Short stack 10-15bb',
      'big': 'Big stack (мало теряет, ИКМ-благоприятен)',
      'shortest': 'Самый короткий 5bb (M < 5)'
    },
    correctOrder: ['middle', 'short', 'shortest', 'big'],
    dndHint: 'Сверху — стек, который наиболее зажат ICM в калнг-решениях',
    explanation: 'Middle stack — самый зажатый: вылет = пропуск нескольких pay-jumps, выигрыш минимально окупается. Short stack тяжелее, но уже накопил pot-commitment. Самый короткий — почти "free roll" (терять немного). Big stack ИКМ-нейтрален или benefiт.'
  },
  {
    id: 'm71',
    type: 'choice',
    prompt: 'KO турнир: bounty 30% от buy-in. У тебя 40bb effective. Шорт-стек 5bb идёт all-in. Ты в BTN с K8o. Действие?',
    hand: { hero: ['Ks', '8c'], position: 'BTN', stack: '40 bb' },
    options: [
      'Fold — K8o слишком слаба',
      'Call — bounty оправдывает marginal call',
      'Re-shove',
      'Fold с ICM'
    ],
    correctIndex: 1,
    explanation: 'KO bounty 30% buy-in добавляет существенный $-value к выбиванию. Vs random 5bb shove K8o имеет ~50% equity. Без bounty это близко к break-even; bounty добавляет +EV. Call стандартный.'
  },
  {
    id: 'm72',
    type: 'choice',
    prompt: 'PKO бубло-период: big-stack с огромной head\'ой (например 5 buy-in\'ов). Как играть против него остальные?',
    options: [
      'Игнорировать его — играть обычно',
      'Стараться не all-in против него (риск стека вместо его головы)',
      'Атаковать любой ценой ради головы',
      'Limp-only стратегия'
    ],
    correctIndex: 1,
    explanation: 'Big head — это "magnet" для shoves. Маленькие стеки шовят его шире (FE + huge bounty). Средние стеки осторожны (риск проиграть весь стек = вылет). Сам big-head часто играет тайтнее — каждый его all-in добавляет stake кому-то.'
  },
  {
    id: 'm73',
    type: 'choice',
    prompt: 'У тебя 22 bb на UTG+1 (9-handed). Default action с AKo?',
    hand: { hero: ['As', 'Kd'], position: 'UTG+1', stack: '22 bb' },
    options: [
      'Open 2.2-2.5x — стандартное открытие AK',
      'Min-raise',
      'Shove all-in 22 bb',
      'Limp'
    ],
    correctIndex: 0,
    explanation: 'AK с 22 bb из ранней-средней позиции — open 2.2-2.5x. Хорошая equity, можно играть постфлоп. Шов с 22 bb преждевременен (overkill); даст FE, но потеряет на calls (4-bet shoves от TT-QQ против тебя выгодны).'
  },
  {
    id: 'm74',
    type: 'choice',
    prompt: 'CO открыл 2.2x с 30 bb. У тебя BTN с TT и 30 bb. Действие?',
    hand: { hero: ['Tc', 'Th'], position: 'BTN', stack: '30 bb' },
    options: [
      'Call — set-mine, реализуй позицию',
      '3-bet до 6.5 bb',
      '3-bet shove all-in',
      'Fold'
    ],
    correctIndex: 1,
    explanation: 'TT vs CO open в позиции с 30 bb — стандартный 3-bet до ~6.5 bb. Build pot, изолируй blinds (3-bet often clears them), и часто получаешь fold от CO. Шов с 30 bb overkill — calling ranges доминирующих JJ-AA выкинут больше equity.'
  },
  {
    id: 'm75',
    type: 'choice',
    prompt: 'Bubble (10 left, top 9 paid). Big stack open 2.2x с BTN. У тебя 12 bb на BB с AQo. Действие?',
    hand: { hero: ['Ah', 'Qc'], position: 'BB', stack: '12 bb' },
    options: [
      '3-bet shove all-in',
      'Call',
      'Fold (ICM)',
      'Min-3-bet'
    ],
    correctIndex: 0,
    explanation: 'AQo vs BTN big stack open на бубне: 3-bet shove standard. AQo доминирует BTN steal range (которое включает много слабых broadway, suited connectors). Колл OOP с 12 bb сложен; min-3-bet pot-commits.'
  },
  {
    id: 'm76',
    type: 'choice',
    prompt: 'У тебя 6bb на SB, BB has 25bb. Все фолд. Stop-and-go возможен?',
    options: [
      'Да, если у меня сильная рука',
      'Нет — SB уже последний pre-flop, нет места для stop-and-go (некому открыть)',
      'Только в late stage',
      'Только в bounty'
    ],
    correctIndex: 1,
    explanation: 'Stop-and-go требует, чтобы у тебя был колл pre-flop с планом all-in на флопе. Это работает в BB vs SB open или other OOP scenarios. На SB ты сам действуешь pre-flop первым — нет opener\'а для колла.'
  },
  {
    id: 'm77',
    type: 'choice',
    prompt: '4-bet sizing IP с 50bb стеком?',
    options: [
      '2x от 3-bet (стандарт)',
      '2.2-2.5x от 3-bet — оставляем место для bluffs и calls',
      '4x от 3-bet (overkill)',
      'Всегда all-in'
    ],
    correctIndex: 1,
    explanation: '4-bet IP — 2.2-2.5x от 3-bet (если 3-bet was 8bb, 4-bet ~18-20bb). Это leaves SPR ~1 на флоп, что pot-commits AA/KK/AK. Smaller затрудняет fold equity, larger overcommits. С 50 bb можно ещё 4-bet/fold, с 30 bb уже 4-bet/call only.'
  },
  {
    id: 'm78',
    type: 'choice',
    prompt: 'Set mining с 22 в турнире — viable при каком стеке?',
    hand: { hero: ['2c', '2d'] },
    options: [
      'Всегда (любой стек)',
      'Только при глубоких стеках (50+ bb effective) с хорошими implied odds',
      'Только при коротких ≤15 bb',
      'Никогда не выгодно в турнирах'
    ],
    correctIndex: 1,
    explanation: 'Set mining: hit set ~12%, для +EV нужно ~15-20x вложение implied. С 50+ bb effective и удобными оппонентами (paying off) — работает. С 25 bb effective implied odds недостаточны; обычно fold или 3-bet bluff.'
  },
  {
    id: 'm79',
    type: 'choice',
    prompt: 'Bubble factor — что это в одном предложении?',
    options: [
      'Количество игроков до призовых',
      'Коэффициент, отражающий насколько фишки в потере дороже фишек в выигрыше из-за ICM',
      'Размер ставки на бубне',
      'Длина бубл-уровня'
    ],
    correctIndex: 1,
    explanation: 'Bubble factor (BF) — мультипликатор: если BF=2, то фишки, которые ты можешь потерять, стоят в 2 раза дороже, чем фишки, которые ты можешь выиграть в этой раздаче. BF используется для коррекции EV при принятии решений.'
  },
  {
    id: 'm80',
    type: 'choice',
    prompt: 'Big stack на финалке 4-handed open-shoves 35 bb с 60 bb стеком. У тебя AK на BB с 40 bb стеком. Pay-jumps большие. Действие?',
    hand: { hero: ['As', 'Kd'], position: 'BB', stack: '40 bb' },
    options: [
      'Колл — AK играть стандартно',
      'Fold — несмотря на AK, ICM pressure огромна (рискнуть всем стеком против big stack на финалке)',
      'Min-3-bet',
      'Re-shove (мы и так BB)'
    ],
    correctIndex: 1,
    explanation: 'AK с 40 bb против big stack 60 bb shove на финалке 4-left — это close, но часто фолд по ICM. Терять всё (стек = вылет 4-е место) гораздо хуже, чем выиграть (станешь chip leader 100 bb). Без ICM — call easy; с pay-jumps — fold правильнее.'
  },
  {
    id: 'm81',
    type: 'choice',
    prompt: 'У тебя BTN 18 bb, SB short 8 bb, BB 45 bb. Все фолд. У тебя AJo. Действие?',
    hand: { hero: ['As', 'Jc'], position: 'BTN', stack: '18 bb' },
    options: [
      'Shove all-in (нормальный BTN push)',
      'Open 2.2x (можно играть постфлоп)',
      'Fold',
      'Limp'
    ],
    correctIndex: 0,
    explanation: 'BTN 18 bb с AJo — стандартный shove. SB short fold-or-shove, BB call range tight (без AK/AQ/JJ+ обычно fold). Open 2.2x оставит pot-commitment в большинстве случаев — лучше шов сразу.'
  },
  {
    id: 'm82',
    type: 'choice',
    prompt: 'Continuation bet IP с overpair AA на низком rainbow flop 7-5-2. Sizing?',
    hand: { hero: ['Ah', 'Ad'], board: ['7c', '5d', '2s'] },
    options: [
      'Маленький 25-33% pot (range advantage, не надо защищать)',
      'Средний 50-66% pot (build pot + protect)',
      'Большой 100% pot',
      'Чек — слот pot-control'
    ],
    correctIndex: 1,
    explanation: 'AA на dry low board — overpair с большой equity, нужен build pot. 50-66% — sweet spot: достаточно large для value, не слишком (чтобы получить calls от broadway). Small (25%) — для polarized ranges с менее монолитных рук.'
  },
  {
    id: 'm83',
    type: 'choice',
    prompt: 'Sticky играть оппонент (calls always) — как против него играть?',
    options: [
      'Меньше блефовать, больше value-bets с medium-strong руками',
      'Больше блефовать (он не агрессивный)',
      'Только трекинг — ничего не менять',
      'Только overbets'
    ],
    correctIndex: 0,
    explanation: 'Calling station (sticky) — exploit through thin value: ставить medium-pair вэлью на all 3 улицах, sizing\'ом более крупно. Меньше блефов (он не фолдит). Это базовый exploit мать-в-станции — value-bet tighter, no bluffs.'
  },
  {
    id: 'm84',
    type: 'choice',
    prompt: 'Pre-flop range UTG в 6-max турнире с 50 bb?',
    options: [
      '5% — только premium',
      '15-18% — TT+, AJs+, KQs, AQo+ (немного шире чем 9-max UTG)',
      '40-50%',
      '70%+'
    ],
    correctIndex: 1,
    explanation: '6-max UTG = ~16-18% (TT+, AJs+, KJs, KQ, AQ+, suited broadways, suited connectors 76s+). Шире 9-max UTG (~10-12%) из-за меньшего количества игроков сзади.'
  },
  {
    id: 'm85',
    type: 'choice',
    prompt: 'Вы in 3-bet pot OOP против профи vs vs калстейшен — кого блефовать на ривере чаще?',
    options: [
      'Против профи (он умеет фолдить)',
      'Против калстейшена (он не фолдит, но bigger value spot)',
      'Одинаково',
      'Никогда не блефовать ОП на ривере'
    ],
    correctIndex: 0,
    explanation: 'Bluffs работают только если оппонент fold\'ит. Профи понимает hand-reading и может выбросить middle pair. Калстейшен по определению не фолдит — bluffs против него -EV. Это база exploit-стратегии.'
  },
  {
    id: 'm86',
    type: 'choice',
    prompt: '3-bet shove с 18 bb — какие руки оптимальны (Nash)?',
    options: [
      'Только premium TT+, AK',
      'Polarized range: TT+, AKs, AKo plus suited blockers (A5s, A4s) для FE+block',
      'Любые suited',
      'Любые pairs'
    ],
    correctIndex: 1,
    explanation: '3-bet shove range на 18 bb поляризованный: top value (TT+, AK), плюс suited Ax blockers (A2s-A5s) для FE и блокировки AK/AQ/AA. Mid-pairs (77-99) обычно flat или нет, в зависимости от opener\'а.'
  },
  {
    id: 'm87',
    type: 'choice',
    prompt: 'Squeeze ranges из BB после UTG open + multiple callers?',
    options: [
      'Tight value (QQ+, AK)',
      'Wide polarized: premium + suited blockers (A5s, A4s) + некоторые suited broadway',
      'Multi-way only — flat call всегда',
      'Only KK+'
    ],
    correctIndex: 1,
    explanation: 'Multi-way squeeze: poляризованный — top value (KK+, AK) на постфлоп play + bluffs с suited blockers (A5s блокирует AA/AKs). Middle hands (TT-QQ) часто flat — против multi-way много equity.'
  },
  {
    id: 'm88',
    type: 'choice',
    prompt: 'Final table 5-left, ICM огромный. У тебя 25 bb mid-stack, CO open 2.2x. У тебя BTN с TT. Action?',
    hand: { hero: ['Tc', 'Th'], position: 'BTN', stack: '25 bb' },
    options: [
      'Колл — посмотрим флоп',
      '3-bet до 6 bb (small)',
      '3-bet shove — TT vs CO open в позиции на финалке',
      'Fold (ICM)'
    ],
    correctIndex: 2,
    explanation: 'TT vs CO open на финалке 5-left с 25 bb — 3-bet shove. ICM pressure: CO сложно колить без monster (AA, KK, AKs). TT block JJ/QQ slightly. Колл OOP-feeling даже в позиции — постфлоп с 25 bb тесно.'
  },
  {
    id: 'm89',
    type: 'choice',
    prompt: 'Re-shove from BB vs SB open 2.2bb с 18bb стеком. Optimal range?',
    options: [
      '~10% top hands',
      '~20-25% — pairs 55+, A8o+, A5s+, K9o+, suited broadway',
      '50%+',
      'Только AA, KK'
    ],
    correctIndex: 1,
    explanation: 'BB re-shove vs SB open 2.2x с 18bb: ~20-25% полу-полярных рук. Pairs 55+, broadway, suited Ax. С BB-ante — даже шире. SB-opener range wide, fold-to-shove rate высокая.'
  },
  {
    id: 'm90',
    type: 'choice',
    prompt: 'Bubble factor для chip leader на пузыре MTT (10 left, top 9 paid)?',
    options: [
      'Около 1.0 (нет ICM-влияния)',
      'Около 1.1-1.3 (лёгкое влияние)',
      'Около 1.5-2.0 (сильное)',
      'Около 3.0+ (экстремальное)'
    ],
    correctIndex: 1,
    explanation: 'Chip leader на пузыре имеет BF ~1.1-1.2: фишки в потенциальной потере чуть-чуть дороже выигрыша. Это объясняет, почему лидер атакует — pressure не от ICM, а от middle stacks которые имеют BF 2.5+.'
  },
  {
    id: 'm91',
    type: 'choice',
    prompt: 'Donk-bet (OOP-bet после флоп без c-bet PFR)? В каких спотах оправдан в современной стратегии?',
    options: [
      'Никогда (классика)',
      'На low connected bottoms (например 7-6-5) от BB defender vs BTN PFR — solver-стратегия',
      'Только на сухих Axx',
      'Только в kak hub-ahaba'
    ],
    correctIndex: 1,
    explanation: 'Современные solvers показывают donk-bets от BB vs BTN на low connected boards (например 8-7-5 rainbow): BB имеет range advantage здесь (suited connectors, low pairs). Маленький donk (~30%) — обычно correct.'
  },
  {
    id: 'm92',
    type: 'choice',
    prompt: 'Final 2 heads-up. Stack 60 vs 30 bb. SB-button. С чего открывает SB?',
    options: [
      'Только premium',
      '70-85% рук (very wide)',
      '40-50%',
      'Только Ax'
    ],
    correctIndex: 1,
    explanation: 'Heads-up SB (small blind + button в HU) — открывает 70-85% рук. Только worst trash hands fold (32o, 42o, 52o, etc). Открытие 2-2.5x обычно. Без pure HU и с pay-jumps — slightly tighter.'
  },
  {
    id: 'm93',
    type: 'choice',
    prompt: 'Стандартный sizing 3-bet shove с 14 bb против SB-opener 2.5x?',
    options: [
      'Min-shove (14 bb)',
      'All-in только 14bb (это и есть shove)',
      'Half-shove 7bb',
      'Call only'
    ],
    correctIndex: 1,
    explanation: 'Stack 14 bb effective — единственный shove sizing = 14 bb all-in. Меньший 3-bet (4.5-5 bb) с этим стеком pot-commits, ничего не оставляет. 14 bb shove vs SB 2.5x open даёт хороший fold equity + защищает все вашей equity post-call.'
  },
  {
    id: 'm94',
    type: 'choice',
    prompt: 'У тебя 22 bb на CO. UTG open 2.2x, MP call. С QQ — Action?',
    hand: { hero: ['Qd', 'Qh'], position: 'CO', stack: '22 bb' },
    options: [
      'Cold call (set-mining)',
      'Squeeze shove all-in 22 bb',
      'Small 3-bet 6 bb',
      'Fold'
    ],
    correctIndex: 1,
    explanation: 'QQ vs UTG opener + MP caller с 22 bb stack — squeeze shove. UTG range obviously strong, но vs его squeeze-call range QQ usually 55% fav. Plus you fold MP caller in 90%+. Small 3-bet с 22 bb pot-commits anyway.'
  },
  {
    id: 'm95',
    type: 'choice',
    prompt: 'Re-buy решение в re-buy MTT: когда стоит делать ребай (early stage)?',
    options: [
      'Никогда — играй freezeout-style',
      'Сразу при достижении стека 0 или ниже стартового — если turn — выгодный игрок и едет ровно',
      'Только если был bad beat',
      'Всегда при возможности'
    ],
    correctIndex: 1,
    explanation: 'Re-buy в правильном MTT почти всегда +EV для winning регуляров: тhe price = chip count obtained, but you get more variance and more chance to build big stack. Если ты edge — re-buy практически автоматически.'
  },
  {
    id: 'm96',
    type: 'choice',
    prompt: 'У тебя AK на BB с 50bb, BTN open 2.2x. Стандартное действие?',
    hand: { hero: ['Ah', 'Ks'], position: 'BB', stack: '50 bb' },
    options: [
      'Колл — посмотрим флоп',
      '3-bet до 7.5-8 bb (OOP standard sizing)',
      'Min-3-bet',
      'Fold'
    ],
    correctIndex: 1,
    explanation: 'AK с 50bb OOP vs BTN open — стандартный 3-bet 7.5-8 bb (3.5x of opening). OOP сайзинг больше для extra fold equity. Cold call с 50bb даёт BTN realize equity in position; 3-bet чаще выигрывает банк pre или isolates.'
  },
  {
    id: 'm97',
    type: 'choice',
    prompt: 'Final table 9-left, you have 35bb (4th place stack), top 6 paid. Stack 18bb opener UTG 2.2x. Action с QQ?',
    hand: { hero: ['Qs', 'Qh'], position: 'CO', stack: '35 bb' },
    options: [
      'Cold call',
      '3-bet до 7bb',
      'Iso-shove 35 bb (huge overbet)',
      'Fold (ICM)'
    ],
    correctIndex: 1,
    explanation: 'QQ vs UTG 18 bb opener on FT bubble с pay-jumps: 3-bet to 7-8 bb gives him difficult spot. If he 4-bet shoves, you call (cooler equity ~50% vs his all-in range). If he folds, great. If he calls — play postflop with strong range. ICM keeps from huge shove.'
  },
  {
    id: 'm98',
    type: 'choice',
    prompt: 'У тебя 11 bb на BB, BTN min-raised (2 bb), SB folded. У тебя 78s. Action?',
    hand: { hero: ['7c', '8c'], position: 'BB', stack: '11 bb' },
    options: [
      'Call',
      '3-bet shove all-in',
      'Fold',
      'Min-3-bet'
    ],
    correctIndex: 1,
    explanation: '78s vs BTN min-raise с 11 bb на BB — стандартный 3-bet shove. 78s имеет хорошую equity vs BTN wide range (~42%), плюс fold equity (BTN fold many of his min-raise hands to shove). Call OOP с 11 bb очень тесный.'
  },
  {
    id: 'm99',
    type: 'choice',
    prompt: 'Final 3 турнира с stacks 80bb / 50bb / 20bb. Big stack OPEN из BTN 2.2x. У тебя 50bb SB с TT. Action?',
    hand: { hero: ['Tc', 'Th'], position: 'SB', stack: '50 bb' },
    options: [
      'Call — set-mine OOP',
      '3-bet до 7bb',
      '3-bet shove 50bb (huge),',
      'Fold (ICM)'
    ],
    correctIndex: 1,
    explanation: 'TT в final 3 vs big stack open on btn с 50 bb — 3-bet 6.5-7 bb стандарт. Build pot vs his wide range. Shove 50bb overkill — call range от big stack нас доминирует часто (JJ+, AK). 3-bet с возможностью folding на 4-bet — лучший EV.'
  },
  {
    id: 'm100',
    type: 'choice',
    prompt: 'Late stage MTT (12 left, top 9 paid). У тебя 25bb middle stack, UTG 8 bb shove (push/fold). Calling with what range?',
    options: [
      'Очень тайтно — только TT+, AK',
      'Tighter than non-bubble: 99+, AQs+, AK (примерно top 7%)',
      'Стандартно — 22+, A9+, broadway',
      'Wide — almost any pair, broadway'
    ],
    correctIndex: 1,
    explanation: 'Calling 8 bb shove from UTG (very tight Nash range ~5-7%) на бабле с 25 bb middle stack: tighter than non-ICM. Top ~7% — 99+, AQs+, AKo. Even AJs marginal. ICM-pressure makes calling threshold higher even with good odds.'
  }
]
