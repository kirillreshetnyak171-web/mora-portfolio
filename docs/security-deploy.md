# Безопасный деплой формы (webhook)

Webhook **не хранить в git**. Варианты:

## Локально

```bash
cp js/lead-config.example.js js/lead-config.local.js
# вставь URL и (опционально) formToken → enabled: true
```

`lead-config.local.js` в `.gitignore`.

## Прод (GitHub Pages + secret)

1. **Google Apps Script** — `scripts/google-apps-script-lead-relay.gs`  
   Script properties: `BOT_TOKEN`, `CHAT_ID` → Deploy Web app → скопируй URL
2. (Рекомендуется) Сгенерируй случайную строку → Script property `LEAD_SECRET`  
   Тот же токен → GitHub Secret `LEAD_FORM_TOKEN`
3. GitHub → **moralabs171/mora-portfolio** → Settings → Secrets and variables → Actions:
   - `LEAD_WEBHOOK_URL` — URL из шага 1
   - `LEAD_FORM_TOKEN` — тот же, что `LEAD_SECRET` в GAS (можно пустым, если secret не включён)
4. Settings → Pages → Source: **GitHub Actions**
5. Push в `main` — workflow `.github/workflows/deploy-pages.yml` подставит webhook в `js/lead-config.js`

**Важно:** до первого деплоя через Actions добавь `LEAD_WEBHOOK_URL` в Secrets.  
Иначе форма на проде не получит URL.

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
