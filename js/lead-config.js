/**
 * Публичные настройки формы.
 * webhookUrl и formToken подставляются при деплое из GitHub Secrets
 * (LEAD_WEBHOOK_URL, LEAD_FORM_TOKEN). Локально — js/lead-config.local.js
 */
window.LEAD_CONFIG = {
  webhookUrl: '',
  formToken: '',
  enabled: true
};

if (window.__LEAD_CONFIG_LOCAL__) {
  Object.assign(window.LEAD_CONFIG, window.__LEAD_CONFIG_LOCAL__);
}
