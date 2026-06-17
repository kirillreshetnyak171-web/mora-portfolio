# Безопасный деплой формы (webhook)

Webhook **не хранить в git**. Варианты:

## Локально

```bash
cp js/lead-config.example.js js/lead-config.local.js
# вставь URL → enabled: true
```

`lead-config.local.js` в `.gitignore`.

## Прод (GitHub Pages + secret)

1. GitHub → **moralabs171/mora-portfolio** → Settings → Secrets → Actions → `LEAD_WEBHOOK_URL`
2. Settings → Pages → Source: **GitHub Actions**
3. Добавь workflow `.github/workflows/deploy-pages.yml` (через веб-интерфейс GitHub или push с токеном `workflow` scope):

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Inject lead webhook
        if: ${{ secrets.LEAD_WEBHOOK_URL != '' }}
        env:
          LEAD_WEBHOOK_URL: ${{ secrets.LEAD_WEBHOOK_URL }}
        run: |
          python3 <<'PY'
          import json, os, pathlib
          pathlib.Path("js/lead-config.js").write_text(
              "window.LEAD_CONFIG = " + json.dumps({
                  "webhookUrl": os.environ["LEAD_WEBHOOK_URL"],
                  "enabled": True,
              }) + ";\n",
              encoding="utf-8",
          )
          PY
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Старый GAS webhook

Если форма уже когда-то была в git — **удали старый deployment** в script.google.com и создай новый URL.
