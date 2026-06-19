/**
 * Google Analytics 4 (morastudio.de)
 *
 * 1) https://analytics.google.com → Admin → Create property → Web stream
 * 2) Copy Measurement ID (G-XXXXXXXXXX)
 * 3) Paste below and set enabled: true
 *
 * Снизить шум от ботов: Admin → Data streams → шестерёнка →
 * отключить Enhanced measurement (scroll, outbound clicks) — оставить только page views.
 */
window.ANALYTICS_CONFIG = {
  measurementId: 'G-4470PRZJ11',
  enabled: true
};
