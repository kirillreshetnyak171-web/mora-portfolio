(function () {
  'use strict';

  var LANGS = ['en', 'ru', 'de'];
  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'en';

  var cfg = window.LEGAL_CONFIG || {};

  function fullName() {
    var parts = [cfg.operatorName, cfg.operatorSurname].filter(Boolean);
    return parts.length ? parts.join(' ') : (cfg.operatorName || 'Operator');
  }

  function addressBlock() {
    return [
      cfg.street,
      [cfg.postalCode, cfg.city].filter(Boolean).join(' '),
      cfg.country
    ].filter(Boolean).join('<br>');
  }

  var titles = {
    impressum: { en: 'Legal notice', ru: 'Правовая информация', de: 'Impressum' },
    privacy: { en: 'Privacy policy', ru: 'Политика конфиденциальности', de: 'Datenschutzerklärung' },
    back: { en: '← Back to home', ru: '← На главную', de: '← Zur Startseite' }
  };

  var sections = {
    impressum: {
      de: function () {
        return (
          '<h1>Impressum</h1>' +
          '<p>Angaben gemäß § 5 TMG</p>' +
          '<h2>Verantwortlich</h2>' +
          '<p>' + fullName() + (cfg.businessName ? '<br>' + cfg.businessName : '') + '</p>' +
          '<p>' + addressBlock() + '</p>' +
          '<h2>Kontakt</h2>' +
          '<p>Telefon: <a href="tel:' + String(cfg.phone || '').replace(/\s/g, '') + '">' + (cfg.phone || '—') + '</a><br>' +
          'E-Mail: <a href="mailto:' + (cfg.email || '') + '">' + (cfg.email || '—') + '</a><br>' +
          'Telegram: <a href="' + (cfg.telegram || '#') + '" rel="noopener noreferrer" target="_blank">@qwe171qw</a></p>' +
          (cfg.vatId
            ? '<h2>Umsatzsteuer-ID</h2><p>' + cfg.vatId + '</p>'
            : '<h2>Umsatzsteuer</h2><p>Kleinunternehmerregelung nach § 19 UStG, sofern anwendbar. USt-IdNr.: nicht angegeben.</p>') +
          '<h2>Verantwortlich für den Inhalt</h2>' +
          '<p>' + fullName() + '</p>' +
          '<h2>Haftung für Inhalte</h2>' +
          '<p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. Für Links externer Seiten übernehmen wir keine Haftung.</p>' +
          '<h2>Streitschlichtung</h2>' +
          '<p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: ' +
          '<a href="https://ec.europa.eu/consumers/odr/" rel="noopener noreferrer" target="_blank">https://ec.europa.eu/consumers/odr/</a>. ' +
          'Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>'
        );
      },
      en: function () {
        return (
          '<h1>Legal notice (Impressum)</h1>' +
          '<p>Information according to German law (§ 5 TMG).</p>' +
          '<h2>Provider</h2>' +
          '<p>' + fullName() + (cfg.businessName ? '<br>' + cfg.businessName : '') + '</p>' +
          '<p>' + addressBlock() + '</p>' +
          '<h2>Contact</h2>' +
          '<p>Phone: <a href="tel:' + String(cfg.phone || '').replace(/\s/g, '') + '">' + (cfg.phone || '—') + '</a><br>' +
          'Email: <a href="mailto:' + (cfg.email || '') + '">' + (cfg.email || '—') + '</a><br>' +
          'Telegram: <a href="' + (cfg.telegram || '#') + '" rel="noopener noreferrer" target="_blank">@qwe171qw</a></p>' +
          '<h2>Content responsibility</h2>' +
          '<p>' + fullName() + '</p>'
        );
      },
      ru: function () {
        return (
          '<h1>Правовая информация (Impressum)</h1>' +
          '<p>Сведения в соответствии с немецким законодательством (§ 5 TMG).</p>' +
          '<h2>Ответственный</h2>' +
          '<p>' + fullName() + (cfg.businessName ? '<br>' + cfg.businessName : '') + '</p>' +
          '<p>' + addressBlock() + '</p>' +
          '<h2>Контакты</h2>' +
          '<p>Телефон: <a href="tel:' + String(cfg.phone || '').replace(/\s/g, '') + '">' + (cfg.phone || '—') + '</a><br>' +
          'Email: <a href="mailto:' + (cfg.email || '') + '">' + (cfg.email || '—') + '</a><br>' +
          'Telegram: <a href="' + (cfg.telegram || '#') + '" rel="noopener noreferrer" target="_blank">@qwe171qw</a></p>' +
          '<h2>Ответственный за контент</h2>' +
          '<p>' + fullName() + '</p>'
        );
      }
    },
    privacy: {
      de: function () {
        return (
          '<h1>Datenschutzerklärung</h1>' +
          '<p>Stand: Juni 2026</p>' +
          '<h2>1. Verantwortlicher</h2>' +
          '<p>' + fullName() + ', ' + (cfg.businessName || 'Mora') + '<br>' + addressBlock() + '<br>' +
          'E-Mail: <a href="mailto:' + (cfg.email || '') + '">' + (cfg.email || '—') + '</a></p>' +
          '<h2>2. Hosting</h2>' +
          '<p>Die Website wird bei GitHub Pages (GitHub, Inc., USA) gehostet. Beim Aufruf werden technisch notwendige Daten (IP, Zeit, User-Agent) in Server-Logs verarbeitet. ' +
          'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).</p>' +
          '<h2>3. Kontaktformular</h2>' +
          '<p>Wenn Sie das Formular nutzen, verarbeiten wir Name, Kontaktdaten und Nachricht zur Bearbeitung Ihrer Anfrage. ' +
          'Die Übermittlung erfolgt über einen verschlüsselten Dienst (Google Apps Script) an Telegram zur schnellen Bearbeitung. ' +
          'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f (Anfragen allgemein). ' +
          'Speicherdauer: bis Abschluss der Kommunikation, längstens 12 Monate, sofern keine gesetzlichen Pflichten entgegenstehen.</p>' +
          '<h2>4. Messenger (Telegram / WhatsApp)</h2>' +
          '<p>Bei Kontakt über Messenger gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Sie können uns auch per E-Mail kontaktieren.</p>' +
          '<h2>5. Cookies &amp; Google Analytics</h2>' +
          '<p>Notwendige Cookies: Speicherung Ihrer Sprachwahl (localStorage). ' +
          'Optional mit Einwilligung: Google Analytics 4 (Measurement ID in <code>analytics-config.js</code>), IP-Anonymisierung aktiv. ' +
          'Rechtsgrundlage Analytics: Art. 6 Abs. 1 lit. a DSGVO. Sie können die Einwilligung jederzeit über „Cookie-Einstellungen“ im Footer widerrufen.</p>' +
          '<h2>6. Ihre Rechte</h2>' +
          '<p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit — per E-Mail an ' + (cfg.email || '—') + '. ' +
          'Beschwerderecht bei einer Aufsichtsbehörde.</p>'
        );
      },
      en: function () {
        return (
          '<h1>Privacy policy</h1>' +
          '<p>Last updated: June 2026</p>' +
          '<h2>1. Controller</h2>' +
          '<p>' + fullName() + ', ' + (cfg.businessName || 'Mora') + '<br>' + addressBlock() + '</p>' +
          '<h2>2. Hosting</h2>' +
          '<p>Hosted on GitHub Pages. Server logs may include IP address and browser data for security and operation (legitimate interest, GDPR Art. 6(1)(f)).</p>' +
          '<h2>3. Contact form</h2>' +
          '<p>We process name, contact details and message to respond to your request. Data is relayed via Google Apps Script to Telegram. ' +
          'Legal basis: Art. 6(1)(b) or (f) GDPR. Retention: until the request is handled, up to 12 months.</p>' +
          '<h2>4. Cookies &amp; Analytics</h2>' +
          '<p>Essential: language preference (localStorage). With consent: Google Analytics 4 with anonymised IP. You can change consent via Cookie settings in the footer.</p>' +
          '<h2>5. Your rights</h2>' +
          '<p>Access, rectification, erasure, restriction, objection — contact ' + (cfg.email || '—') + '.</p>'
        );
      },
      ru: function () {
        return (
          '<h1>Политика конфиденциальности</h1>' +
          '<p>Обновлено: июнь 2026</p>' +
          '<h2>1. Оператор данных</h2>' +
          '<p>' + fullName() + ', ' + (cfg.businessName || 'Mora') + '<br>' + addressBlock() + '</p>' +
          '<h2>2. Хостинг</h2>' +
          '<p>Сайт размещён на GitHub Pages. При посещении обрабатываются технические данные (IP, браузер) в логах сервера.</p>' +
          '<h2>3. Форма заявки</h2>' +
          '<p>Имя, контакт и сообщение обрабатываются для ответа на запрос. Передача через Google Apps Script в Telegram. ' +
          'Хранение: до завершения переписки, не дольше 12 месяцев.</p>' +
          '<h2>4. Cookies и аналитика</h2>' +
          '<p>Необходимые: язык сайта (localStorage). С согласия: Google Analytics 4 с анонимизацией IP. Настройки — в подвале сайта.</p>' +
          '<h2>5. Ваши права</h2>' +
          '<p>Доступ, исправление, удаление — напишите на ' + (cfg.email || '—') + '.</p>'
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

    var titleKey = page === 'impressum' ? 'impressum' : 'privacy';
    document.title = (titles[titleKey][lang] || titles[titleKey].de) + ' — Mora';
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
