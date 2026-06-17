/**
 * Публичные настройки формы (без секретов).
 *
 * webhookUrl на проде подставляется GitHub Actions из secret LEAD_WEBHOOK_URL.
 * Локально: js/lead-config.local.js (см. lead-config.example.js).
 */
window.LEAD_CONFIG = {
  webhookUrl: '',
  enabled: false
};

if (window.__LEAD_CONFIG_LOCAL__) {
  Object.assign(window.LEAD_CONFIG, window.__LEAD_CONFIG_LOCAL__);
}
