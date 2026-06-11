# GainTech CRM — лендинг

React + Vite лендинг для Gain CRM.

## Локально

```bash
npm install
npm run dev
```

Откройте http://localhost:5173

Проверка сборки как на GitHub Pages:

```bash
npm run preview:pages
```

## GitHub Pages

Сайт будет доступен по адресу:

**https://karimovkarimj85-hue.github.io/CRMseller/**

После первого push в `main` включите Pages в репозитории:

1. Settings → Pages
2. Source: **GitHub Actions**
3. Actions → **Deploy to GitHub Pages** → **Re-run all jobs** (если первый run упал до включения Pages)

Деплой запускается автоматически при push в `main`.

## Telegram (заявки в канал)

Старый токен из portfolio **не работает** — нужен новый:

1. Telegram → @BotFather → `/newbot` или `/token` для существующего бота
2. Скопируйте токен в `src/telegram.config.ts` → `telegramBotToken`
3. Добавьте бота **администратором** в канал заявок (право «Публиковать сообщения»)
4. `telegramChatId` — ID канала (сейчас `-1003692525683`)

Локально можно через `.env` (см. `.env.example`).

Для GitHub Pages — **Secrets → Actions**: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` (перекрывают config при сборке).
