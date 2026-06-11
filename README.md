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

Скопируйте `.env.example` → `.env` и укажите токен бота и ID канала.

Для GitHub Pages добавьте в **Settings → Secrets and variables → Actions**:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID` (например `-1003692525683`)

Те же значения, что в репозитории `gaintech-portfolio`.
