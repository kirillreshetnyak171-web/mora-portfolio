# Безопасный деплой формы (webhook)

Webhook **не хранить в git**. Варианты:

## Локально

```bash
cp js/lead-config.example.js js/lead-config.local.js
# вставь URL → enabled: true
```

`lead-config.local.js` в `.gitignore`.

## Прод (GitHub Pages + secret)

1. **Google Apps Script** — `scripts/google-apps-script-lead-relay.gs`  
   Script properties: `BOT_TOKEN`, `CHAT_ID` → Deploy Web app → скопируй URL
2. GitHub → **kirillreshetnyak171-web/mora-portfolio** → Settings → Secrets → Actions → `LEAD_WEBHOOK_URL`
3. Settings → Pages → Source: **GitHub Actions**
4. Push в `main` — workflow `.github/workflows/deploy-pages.yml` подставит webhook в `js/lead-config.js`

## Cookies & Analytics

- Баннер: `js/cookie-consent.js` — Analytics только после «Alle akzeptieren»
- GA ID: `js/analytics-config.js`
- Боты: `js/security.js` — не грузит GA для headless/известных ботов
- В GA4 Admin отключи **Enhanced measurement** (scroll/clicks), если много лишних событий
- Datenschutz: `/datenschutz.html`

## Защита формы (2026-06)

- `js/security.js` — лимит 1 заявка / мин, минимум 3 сек на странице, фильтр ботов
- Honeypot поле `website` (скрытое)
- Google Apps Script: rate limit, длина полей, опционально `LEAD_SECRET` + GitHub `LEAD_FORM_TOKEN`
- После правки GAS: **Deploy → New deployment** в script.google.com

## Impressum

Правовые данные: `js/legal-config.js` — **Straße, PLZ, Ort, Nachname** перед публикацией ausfüllen.

## Старый GAS webhook

Если форма уже когда-то была в git — **удали старый deployment** в script.google.com и создай новый URL.
