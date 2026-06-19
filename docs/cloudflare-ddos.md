# Защита morastudio.de от DDoS (Cloudflare)

Статический сайт на GitHub Pages сам по себе не даёт полноценный anti-DDoS.  
**Cloudflare Free** — основная защита домена (опционально).

## 1. Подключить домен к Cloudflare

1. Зарегистрируйся на [cloudflare.com](https://dash.cloudflare.com/sign-up)
2. **Add a site** → `morastudio.de`
3. Выбери план **Free**
4. Cloudflare покажет **nameservers** — замени их у регистратора домена
5. Дождись статуса **Active**

## 2. DNS для GitHub Pages

В Cloudflare → **DNS** → **Records**:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `@` или `www` | GitHub Pages URL | **Proxied** (оранжевое облако) |

**Proxied** — трафик идёт через Cloudflare → DDoS-фильтр включён.

## 3. Базовые настройки Security

Cloudflare → **Security** → **Settings**:

- **Security Level**: Medium (при атаке — High или **I'm Under Attack**)
- **Bot Fight Mode**: On (Free)

## 4. При атаке

Cloudflare → **Security** → **I'm under attack mode** — включить на время.

## Защита формы (без капчи)

- `js/security.js` — лимиты, бот-фильтр
- Honeypot + rate limit в Google Apps Script
