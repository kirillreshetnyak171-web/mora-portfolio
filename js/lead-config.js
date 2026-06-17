/**
 * Публичные настройки формы.
 * webhookUrl на проде: GitHub Secret LEAD_WEBHOOK_URL (предпочтительно)
 * или значение ниже после inject в CI.
 */
window.LEAD_CONFIG = {
  webhookUrl: 'https://script.google.com/macros/s/AKfycbwVfFgJYu_6EnByquIbKrLO3JCf77YGhUdhc_3-TArCuy5KohtxmdfoGNig-mYuZoJP/exec',
  enabled: true
};

if (window.__LEAD_CONFIG_LOCAL__) {
  Object.assign(window.LEAD_CONFIG, window.__LEAD_CONFIG_LOCAL__);
}
