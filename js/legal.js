(function () {
  'use strict';

  var LANGS = ['en', 'ru', 'de'];
  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'en';

  var cfg = window.LEGAL_CONFIG || {};

  function controllerBlockRu() {
    var name = cfg.businessName || 'Mora';
    var site = cfg.website || 'https://morastudio.de';
    return '<p><strong>' + name + '</strong><br>' +
      'Сайт: <a href="' + site + '">' + site.replace(/^https?:\/\//, '') + '</a><br>' +
      'Связь через форму и кнопки мессенджеров на главной странице.</p>';
  }

  function controllerBlockEn() {
    var name = cfg.businessName || 'Mora';
    var site = cfg.website || 'https://morastudio.de';
    return '<p><strong>' + name + '</strong><br>' +
      'Website: <a href="' + site + '">' + site.replace(/^https?:\/\//, '') + '</a><br>' +
      'Contact via the form and messenger buttons on the homepage.</p>';
  }

  function controllerBlockDe() {
    var name = cfg.businessName || 'Mora';
    var site = cfg.website || 'https://morastudio.de';
    return '<p><strong>' + name + '</strong><br>' +
      'Website: <a href="' + site + '">' + site.replace(/^https?:\/\//, '') + '</a><br>' +
      'Kontakt über das Formular und Messenger-Buttons auf der Startseite.</p>';
  }

  var titles = {
    privacy: { en: 'Privacy policy', ru: 'Политика конфиденциальности', de: 'Datenschutzerklärung' },
    back: { en: '← Back to home', ru: '← На главную', de: '← Zur Startseite' }
  };

  var sections = {
    privacy: {
      de: function () {
        return (
          '<h1>Datenschutzerklärung</h1>' +
          '<p>Stand: Juni 2026</p>' +
          '<h2>1. Verantwortlicher</h2>' +
          controllerBlockDe() +
          '<h2>2. Hosting</h2>' +
          '<p>Die Website wird bei GitHub Pages (GitHub, Inc., USA) gehostet. Beim Aufruf werden technisch notwendige Daten (IP, Zeit, User-Agent) in Server-Logs verarbeitet. ' +
          'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).</p>' +
          '<h2>3. Kontaktformular</h2>' +
          '<p>Wenn Sie das Formular nutzen, verarbeiten wir Name, Kontaktdaten und Nachricht zur Bearbeitung Ihrer Anfrage. ' +
          'Die Übermittlung erfolgt über einen verschlüsselten Dienst (Google Apps Script) an Telegram zur schnellen Bearbeitung. ' +
          'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f (Anfragen allgemein). ' +
          'Speicherdauer: bis Abschluss der Kommunikation, längstens 12 Monate, sofern keine gesetzlichen Pflichten entgegenstehen.</p>' +
          '<h2>4. Messenger (Telegram / WhatsApp)</h2>' +
          '<p>Bei Kontakt über Messenger gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p>' +
          '<h2>5. Cookies &amp; Google Analytics</h2>' +
          '<p>Notwendige Cookies: Speicherung Ihrer Sprachwahl (localStorage). ' +
          'Optional mit Einwilligung: Google Analytics 4 (Measurement ID in <code>analytics-config.js</code>), IP-Anonymisierung aktiv. ' +
          'Rechtsgrundlage Analytics: Art. 6 Abs. 1 lit. a DSGVO. Sie können die Einwilligung jederzeit über „Cookie-Einstellungen“ im Footer widerrufen.</p>' +
          '<h2>6. Ihre Rechte</h2>' +
          '<p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit — über das Kontaktformular oder Messenger auf der Startseite. ' +
          'Beschwerderecht bei einer Aufsichtsbehörde.</p>'
        );
      },
      en: function () {
        return (
          '<h1>Privacy policy</h1>' +
          '<p>Last updated: June 2026</p>' +
          '<h2>1. Controller</h2>' +
          controllerBlockEn() +
          '<h2>2. Hosting</h2>' +
          '<p>Hosted on GitHub Pages. Server logs may include IP address and browser data for security and operation (legitimate interest, GDPR Art. 6(1)(f)).</p>' +
          '<h2>3. Contact form</h2>' +
          '<p>We process name, contact details and message to respond to your request. Data is relayed via Google Apps Script to Telegram. ' +
          'Legal basis: Art. 6(1)(b) or (f) GDPR. Retention: until the request is handled, up to 12 months.</p>' +
          '<h2>4. Cookies &amp; Analytics</h2>' +
          '<p>Essential: language preference (localStorage). With consent: Google Analytics 4 with anonymised IP. You can change consent via Cookie settings in the footer.</p>' +
          '<h2>5. Your rights</h2>' +
          '<p>Access, rectification, erasure, restriction, objection — via the contact form or messenger on the homepage.</p>'
        );
      },
      ru: function () {
        return (
          '<h1>Политика конфиденциальности</h1>' +
          '<p>Обновлено: июнь 2026</p>' +
          '<h2>1. Оператор данных</h2>' +
          controllerBlockRu() +
          '<h2>2. Хостинг</h2>' +
          '<p>Сайт размещён на GitHub Pages. При посещении обрабатываются технические данные (IP, браузер) в логах сервера.</p>' +
          '<h2>3. Форма заявки</h2>' +
          '<p>Имя, контакт и сообщение обрабатываются для ответа на запрос. Передача через Google Apps Script в Telegram. ' +
          'Хранение: до завершения переписки, не дольше 12 месяцев.</p>' +
          '<h2>4. Cookies и аналитика</h2>' +
          '<p>Необходимые: язык сайта (localStorage). С согласия: Google Analytics 4 с анонимизацией IP. Настройки — в подвале сайта.</p>' +
          '<h2>5. Ваши права</h2>' +
          '<p>Доступ, исправление, удаление — через форму или мессенджер на главной странице.</p>'
        );
      }
    }
  };

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return LANGS.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
  }

  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-switcher__btn--active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function render(page) {
    var root = document.getElementById('legal-body');
    if (!root || !sections[page]) return;
    var lang = getLang();
    var fn = sections[page][lang] || sections[page].de;
    root.innerHTML = fn();

    document.title = (titles.privacy[lang] || titles.privacy.de) + ' — Mora';
    var back = document.querySelector('[data-legal-back]');
    if (back) back.textContent = titles.back[lang] || titles.back.de;
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (!lang || LANGS.indexOf(lang) === -1) return;
        localStorage.setItem(STORAGE_KEY, lang);
        setLang(lang);
        var page = document.body.getAttribute('data-legal-page');
        if (page) render(page);
        window.dispatchEvent(new CustomEvent('portfolio-lang-changed', { detail: { lang: lang } }));
      });
    });
    setLang(getLang());
  }

  function init() {
    var page = document.body.getAttribute('data-legal-page');
    if (!page) return;
    initLangSwitcher();
    render(page);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
