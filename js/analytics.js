(function () {
  'use strict';

  var loaded = false;

  window.initMoraAnalytics = function initMoraAnalytics() {
    if (loaded) return;

    if (window.MoraSecurity && !window.MoraSecurity.shouldLoadAnalytics()) {
      return;
    }

    var cfg = window.ANALYTICS_CONFIG || {};
    if (cfg.enabled === false) return;

    var measurementId = String(cfg.measurementId || '').trim();
    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;

    loaded = true;
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  };
})();
