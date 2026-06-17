(function () {
  'use strict';

  var loaded = false;

  window.initMoraAnalytics = function initMoraAnalytics() {
    if (loaded) return;

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
      send_page_view: true
    });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  };
})();
