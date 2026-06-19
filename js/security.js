(function () {
  'use strict';

  var PAGE_LOADED_AT = Date.now();
  var LEAD_COOLDOWN_MS = 60000;
  var MIN_ON_PAGE_MS = 3000;
  var LEAD_STORAGE_KEY = 'mora-lead-last-submit';

  function isLikelyBot() {
    if (typeof navigator === 'undefined') return true;

    if (navigator.webdriver) return true;

    var ua = String(navigator.userAgent || '').toLowerCase();
    var botPatterns = [
      'headless',
      'phantomjs',
      'selenium',
      'puppeteer',
      'playwright',
      'bytespider',
      'petalbot',
      'gptbot',
      'claudebot',
      'ahrefsbot',
      'semrushbot',
      'dotbot',
      'mj12bot',
      'bingpreview'
    ];

    for (var i = 0; i < botPatterns.length; i++) {
      if (ua.indexOf(botPatterns[i]) !== -1) return true;
    }

    return false;
  }

  function getLastLeadSubmit() {
    try {
      return parseInt(localStorage.getItem(LEAD_STORAGE_KEY) || '0', 10) || 0;
    } catch (e) {
      return 0;
    }
  }

  function recordLeadSubmit() {
    try {
      localStorage.setItem(LEAD_STORAGE_KEY, String(Date.now()));
    } catch (e) {
      /* ignore */
    }
  }

  function canSubmitLeadForm() {
    if (isLikelyBot()) {
      return { ok: false, reason: 'bot' };
    }

    var elapsed = Date.now() - PAGE_LOADED_AT;
    if (elapsed < MIN_ON_PAGE_MS) {
      return { ok: false, reason: 'too_fast' };
    }

    var last = getLastLeadSubmit();
    if (last && Date.now() - last < LEAD_COOLDOWN_MS) {
      return { ok: false, reason: 'rate_limited' };
    }

    return { ok: true };
  }

  function shouldLoadAnalytics() {
    return !isLikelyBot();
  }

  function leadPayloadGuards() {
    return {
      loadedAt: PAGE_LOADED_AT,
      elapsedMs: Date.now() - PAGE_LOADED_AT
    };
  }

  window.MoraSecurity = {
    isLikelyBot: isLikelyBot,
    shouldLoadAnalytics: shouldLoadAnalytics,
    canSubmitLeadForm: canSubmitLeadForm,
    recordLeadSubmit: recordLeadSubmit,
    leadPayloadGuards: leadPayloadGuards,
    pageLoadedAt: PAGE_LOADED_AT
  };
})();
