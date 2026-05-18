# Poker Skill Test

Интерактивный веб-тест на понимание уровня игрока в No-Limit Hold'em.

Три раздела по 10 вопросов — лёгкий / средний / сложный. За правильный ответ
1 / 2 / 3 очка соответственно, максимум 60. Вопросы выбираются случайно
из пула, в текущей версии — по 20 на раздел. Архитектура рассчитана на 100/раздел.

В нижней части экрана всегда виден текущий счёт и процент от 60.

## Стек

- React 19 + Vite 8
- @dnd-kit для drag-and-drop сортировки
- Карты и покерный стол — SVG, рисуются кодом
- Деплой: GitHub Pages (auto через GitHub Actions)

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:5173.

Прод-сборка:
```bash
npm run build
npm run preview
```

## Деплой

Каждый push в `main` → GitHub Actions собирает и публикует.
Pages уже настроен.

**URL:** https://flexor7.github.io/poker-skill-test/

## Структура

```
src/
├── App.jsx              # state machine: welcome → 3 секции → итоги
├── App.css              # все стили
├── data/
│   ├── index.js         # SECTIONS, MAX_SCORE, pickN(arr, n)
│   ├── easy.js          # лёгкие (1 очко)
│   ├── medium.js        # средние (2 очка)
│   └── hard.js          # сложные (3 очка)
└── components/
    ├── Card.jsx         # SVG-карта (♠♥♦♣)
    ├── Hand.jsx         # Hero + Board + meta
    ├── PokerTable.jsx   # SVG-стол с подсветкой позиции
    ├── QuestionView.jsx # рендер вопроса любого типа
    └── Progress.jsx     # счёт внизу
```

## Типы вопросов

Каждый вопрос — объект в одном из 4 форматов.

**choice** — выбор из вариантов:
```js
{
  id: 'e01',
  type: 'choice',
  prompt: 'Сколько карт на флопе?',
  hand: { hero: ['As', 'Ks'], board: [], position: 'BTN' },  // опционально
  table: { highlight: 'UTG' },                                 // опционально
  options: ['2', '3', '4', '5'],
  correctIndex: 1,
  explanation: '...'
}
```

**numeric** — ввод числа:
```js
{
  type: 'numeric',
  prompt: 'Какие pot odds для колла $50 в банк $100?',
  unit: '%',
  correctValue: 25,
  tolerance: 2,   // ±2% считается правильным
  step: 1,
  explanation: '...'
}
```

**slider** — ползунок (sizing, размеры):
```js
{
  type: 'slider',
  prompt: 'Размер open-raise с BTN (в bb)?',
  sliderMin: 1, sliderMax: 5, sliderStep: 0.1,
  unit: ' bb',
  correctRange: [2.2, 2.7],
  explanation: '...'
}
```

**dnd-sort** — расставить по порядку:
```js
{
  type: 'dnd-sort',
  prompt: 'Расставь руки по equity vs random',
  items: ['AA', 'TT', 'AKs', 'AJo'],
  itemLabels: { AA: 'AA (~85%)', TT: 'TT (~75%)', ... },
  correctOrder: ['AA', 'TT', 'AKs', 'AJo'],
  dndHint: 'Сверху — самая сильная',
  explanation: '...'
}
```

## Формат карт

Карты пишутся как ранг + буква масти: `'As'` `'Kh'` `'7d'` `'Tc'`.
Также понимает символ масти: `'A♠'`, `'K♥'`.

Ранги: `2-9`, `T` (десятка), `J`, `Q`, `K`, `A`.
Масти: `s` (♠), `h` (♥), `d` (♦), `c` (♣).

## Позиции (для table)

Используются метки `UTG`, `UTG+1`, `MP`, `LJ`, `HJ`, `CO`, `BTN`, `SB`, `BB`.
Передаются как `table: { highlight: 'BTN', seats: 9 }`.

## Как добавлять вопросы до 100/раздел

Открой `src/data/easy.js` (или `medium.js`, `hard.js`),
добавь объект в массив `easyQuestions` (с уникальным `id` вида `e21`, `e22`, ...).
Сборка подхватит автоматически — ничего больше менять не надо.

Рандомизация выберет 10 из пула при каждом прохождении.

## Совместный доступ

Репо публичный — сам тест доступен по URL любому, у кого есть ссылка.
Редактировать код могут только collaborators.

Чтобы добавить collaborator: Settings → Collaborators → Add people →
роль Write (полные права на коммиты) или Read (только просмотр).
