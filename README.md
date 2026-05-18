# Poker Skill Test

Интерактивный веб-тест на понимание уровня игрока в No-Limit Hold'em.
Смешанный формат: блок теории + сценарии раздач с пояснениями. На выходе — оценка уровня.

## Стек

- React 19 + Vite 8
- Деплой: GitHub Pages (через GitHub Actions)
- Без бэкенда — статика, можно открывать с любого хостинга

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

Каждый push в `main` автоматически собирает и публикует на GitHub Pages
(см. `.github/workflows/deploy.yml`).

**Один раз нужно включить Pages в репо:**
Settings → Pages → Build and deployment → Source: **GitHub Actions**.

После первого зелёного workflow сайт будет доступен на
`https://flexor7.github.io/poker-skill-test/`.

Если меняешь имя репозитория — поправь `base` в `vite.config.js`.

## Где править контент

Все вопросы в одном файле — `src/data/questions.js`:

- `theoryQuestions` — теоретические вопросы (правила, математика, концепции)
- `handScenarios` — раздачи с картами и борд

Структура вопроса:
```js
{
  id: 't6',
  type: 'theory',        // или 'hand'
  question: '...',        // для type='theory'
  title: '...',           // для type='hand'
  description: '...',     // для type='hand', опц.
  hero: ['A♠', 'K♠'],     // для type='hand'
  board: ['J♣', '7♥'],    // для type='hand'
  position: 'BTN',        // для type='hand', опц.
  options: ['...', '...'],
  correctIndex: 2,
  explanation: '...'
}
```

Логика подсчёта результата — в `src/App.jsx`, функция `Results`. Пороги (Pro/Advanced/Intermediate/Beginner+/Beginner) при необходимости подкрути там же.

## Совместный доступ

Репо приватный. Чтобы дать доступ команде:

Settings → Collaborators → Add people → выбрать роль (Read для просмотра, Write для коммитов).

Github не умеет «отзеркалить» доступы из другого репо автоматически — список нужно
поддерживать вручную или вынести репо в организацию с teams.
