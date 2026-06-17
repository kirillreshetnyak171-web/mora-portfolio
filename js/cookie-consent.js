(function () {
  'use strict';

  var STORAGE_KEY = 'mora-cookie-consent';
  var LANG_KEY = 'portfolio-lang';

  var copy = {
    en: {
      title: 'Cookies',
      text: 'We use essential cookies to remember your language. With your consent we also load Google Analytics (anonymised IP) to understand how the site is used.',
      acceptAll: 'Accept all',
      essentialOnly: 'Essential only',
      settings: 'Cookie settings',
      policyLink: 'Privacy Policy'
    },
    ru: {
      title: 'Cookies',
      text: 'Мы используем необходимые cookies для языка сайта. С вашего согласия подключаем Google Analytics (анонимизация IP), чтобы понимать, как пользуются сайтом.',
      acceptAll: 'Принять все',
      essentialOnly: 'Только необходимые',
      settings: 'Настройки cookies',
      policyLink: 'Политика конфиденциальности'
    },
    de: {
      title: 'Cookies',
      text: 'Wir verwenden notwendige Cookies für die Sprache. Mit Ihrer Einwilligung laden wir Google Analytics (IP-Anonymisierung), um die Nutzung der Website zu verstehen.',
      acceptAll: 'Alle akzeptieren',
      essentialOnly: 'Nur notwendige',
      settings: 'Cookie-Einstellungen',
      policyLink: 'Datenschutzerklärung'
    }
  };

  function getLang() {
    var lang = localStorage.getItem(LANG_KEY) || 'en';
    return copy[lang] ? lang : 'en';
  }

  function t(key) {
    return copy[getLang()][key] || copy.en[key] || key;
  }

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function loadAnalytics() {
    if (typeof window.initMoraAnalytics === 'function') {
      window.initMoraAnalytics();
    }
  }

  function hideBanner(banner) {
    if (!banner) return;
    banner.classList.remove('cookie-banner--visible');
    banner.setAttribute('hidden', '');
  }

  function showBanner(banner) {
    if (!banner) return;
    banner.removeAttribute('hidden');
    requestAnimationFrame(function () {
      banner.classList.add('cookie-banner--visible');
    });
  }

  function applyConsent(value, banner) {
    setConsent(value);
    hideBanner(banner);
    if (value === 'all') {
      loadAnalytics();
    }
  }

  function renderBannerText(banner) {
    if (!banner) return;
    var title = banner.querySelector('[data-cookie-title]');
    var text = banner.querySelector('[data-cookie-text]');
    var accept = banner.querySelector('[data-cookie-accept]');
    var essential = banner.querySelector('[data-cookie-essential]');
    var policy = banner.querySelector('[data-cookie-policy]');
    if (title) title.textContent = t('title');
    if (text) text.textContent = t('text');
    if (accept) accept.textContent = t('acceptAll');
    if (essential) essential.textContent = t('essentialOnly');
    if (policy) policy.textContent = t('policyLink');
  }

  function init() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    renderBannerText(banner);

    var consent = getConsent();
    if (consent === 'all') {
      loadAnalytics();
      hideBanner(banner);
    } else if (consent === 'essential') {
      hideBanner(banner);
    } else {
      showBanner(banner);
    }

    banner.addEventListener('click', function (e) {
      var acceptBtn = e.target.closest('[data-cookie-accept]');
      var essentialBtn = e.target.closest('[data-cookie-essential]');
      if (acceptBtn) {
        applyConsent('all', banner);
      } else if (essentialBtn) {
        applyConsent('essential', banner);
      }
    });

    document.querySelectorAll('[data-cookie-settings]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        renderBannerText(banner);
        showBanner(banner);
      });
    });

    window.addEventListener('portfolio-lang-changed', function () {
      renderBannerText(banner);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.MoraCookieConsent = {
    getConsent: getConsent,
    openSettings: function () {
      var banner = document.getElementById('cookie-banner');
      renderBannerText(banner);
      showBanner(banner);
    }
  };
})();
