(function () {
  'use strict';

  var PAGE_LOADED_AT = Date.now();
  var LEAD_COOLDOWN_MS = 60000;
  var MIN_ON_PAGE_MS = 3000;
  var LEAD_STORAGE_KEY = 'mora-lead-last-submit';
  var ATTEMPT_STORAGE_KEY = 'mora-lead-attempts';
  var MAX_ATTEMPTS_PER_HOUR = 8;
  var ATTEMPT_WINDOW_MS = 3600000;

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
      localStorage.removeItem(ATTEMPT_STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
  }

  function recordFailedAttempt() {
    try {
      var raw = localStorage.getItem(ATTEMPT_STORAGE_KEY);
      var data = raw ? JSON.parse(raw) : { count: 0, since: Date.now() };
      if (!data.since || Date.now() - data.since > ATTEMPT_WINDOW_MS) {
        data = { count: 0, since: Date.now() };
      }
      data.count += 1;
      localStorage.setItem(ATTEMPT_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* ignore */
    }
  }

  function isAttemptLimited() {
    try {
      var raw = localStorage.getItem(ATTEMPT_STORAGE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (!data.since || Date.now() - data.since > ATTEMPT_WINDOW_MS) {
        localStorage.removeItem(ATTEMPT_STORAGE_KEY);
        return false;
      }
      return data.count >= MAX_ATTEMPTS_PER_HOUR;
    } catch (e) {
      return false;
    }
  }

  function canSubmitLeadForm() {
    if (isLikelyBot()) {
      return { ok: false, reason: 'bot' };
    }

    if (isAttemptLimited()) {
      return { ok: false, reason: 'rate_limited' };
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
    recordFailedAttempt: recordFailedAttempt,
    leadPayloadGuards: leadPayloadGuards,
    pageLoadedAt: PAGE_LOADED_AT
  };
})();
