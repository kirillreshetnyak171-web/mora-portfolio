/**
 * Локальная копия для теста формы (НЕ коммитить).
 *
 * 1) cp js/lead-config.example.js js/lead-config.local.js
 * 2) Вставь URL из Google Apps Script (scripts/google-apps-script-lead-relay.gs)
 * 3) enabled: true
 *
 * На проде: GitHub → Settings → Secrets → LEAD_WEBHOOK_URL
 * (см. .github/workflows/deploy-pages.yml)
 */
window.__LEAD_CONFIG_LOCAL__ = {
  webhookUrl: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
  enabled: true
};
