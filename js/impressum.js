(function () {
  'use strict';

  var LANGS = ['en', 'ru', 'de'];
  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'de';

  var translations = {
    en: {
      'legal.meta.title': 'Legal notice — Mora',
      'legal.meta.description': 'Legal notice for Mora (morastudio.de)',
      'legal.skipLink': 'Skip to content',
      'legal.back': '← Back to home',
      'legal.title': 'Legal notice',
      'legal.lead': 'Information pursuant to § 5 German Digital Services Act (DDG)',
      'legal.provider.title': 'Service provider',
      'legal.provider.note':
        'No home address published for privacy reasons. Please use the contact details below.',
      'legal.contact.title': 'Contact',
      'legal.contact.email': 'Email:',
      'legal.contact.phone': 'Phone:',
      'legal.contact.telegram': 'Telegram:',
      'legal.responsible.title': 'Responsible for content',
      'legal.responsible.text': 'Responsible for content pursuant to § 18 (2) MStV:',
      'legal.responsible.contact': 'Contact details as above.',
      'legal.vat.title': 'VAT',
      'legal.vat.note':
        'VAT is not shown because the provider is a small business within the meaning of § 19 German VAT Act.',
      'legal.liability.title': 'Liability for content',
      'legal.liability.text':
        'As a service provider, I am responsible for my own content on these pages under general law. However, I am not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity.',
      'legal.links.title': 'Liability for links',
      'legal.links.text':
        'This website contains links to external third-party websites. I have no influence on their content and therefore cannot accept liability for external content. The respective provider is always responsible for linked pages.',
      'legal.copyright.title': 'Copyright',
      'legal.copyright.text':
        'Content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution, or any use beyond copyright limits requires written consent.',
      'footer.copy': '© 2026 Mora',
      'footer.impressum': 'Legal notice',
      'langSwitcher.label': 'Language'
    },
    ru: {
      'legal.meta.title': 'Правовая информация — Mora',
      'legal.meta.description': 'Правовая информация Mora (morastudio.de)',
      'legal.skipLink': 'Перейти к содержанию',
      'legal.back': '← На главную',
      'legal.title': 'Правовая информация',
      'legal.lead': 'Сведения согласно § 5 Закона Германии о цифровых услугах (DDG)',
      'legal.provider.title': 'Поставщик услуг',
      'legal.provider.note':
        'Домашний адрес не публикуется из соображений конфиденциальности. Связь — через контакты ниже.',
      'legal.contact.title': 'Контакты',
      'legal.contact.email': 'E-mail:',
      'legal.contact.phone': 'Телефон:',
      'legal.contact.telegram': 'Telegram:',
      'legal.responsible.title': 'Ответственный за контент',
      'legal.responsible.text': 'Ответственный за контент согласно § 18 Abs. 2 MStV:',
      'legal.responsible.contact': 'Контакты — см. выше.',
      'legal.vat.title': 'НДС',
      'legal.vat.note':
        'НДС не указывается, так как поставщик является малым предпринимателем в смысле § 19 UStG.',
      'legal.liability.title': 'Ответственность за контент',
      'legal.liability.text':
        'Как поставщик услуг я несу ответственность за собственный контент на этих страницах в рамках общего законодательства. Однако я не обязан отслеживать переданную или сохранённую информацию третьих лиц.',
      'legal.links.title': 'Ответственность за ссылки',
      'legal.links.text':
        'На сайте есть ссылки на внешние ресурсы. Я не влияю на их содержание и не несу ответственности за внешний контент. Ответственность несёт соответствующий поставщик.',
      'legal.copyright.title': 'Авторское право',
      'legal.copyright.text':
        'Контент и материалы, созданные оператором сайта, защищены немецким авторским правом. Копирование и распространение за пределами закона требуют письменного согласия.',
      'footer.copy': '© 2026 Mora',
      'footer.impressum': 'Правовая информация',
      'langSwitcher.label': 'Язык'
    },
    de: {
      'legal.meta.title': 'Impressum — Mora',
      'legal.meta.description': 'Impressum für Mora (morastudio.de)',
      'legal.skipLink': 'Zum Inhalt springen',
      'legal.back': '← Zurück zur Startseite',
      'legal.title': 'Impressum',
      'legal.lead': 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)',
      'legal.provider.title': 'Diensteanbieter',
      'legal.provider.note':
        'Keine Wohnadresse aus Datenschutzgründen. Erreichbarkeit über die Kontaktdaten unten.',
      'legal.contact.title': 'Kontakt',
      'legal.contact.email': 'E-Mail:',
      'legal.contact.phone': 'Telefon:',
      'legal.contact.telegram': 'Telegram:',
      'legal.responsible.title': 'Verantwortlich für den Inhalt',
      'legal.responsible.text': 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:',
      'legal.responsible.contact': 'Kontakt siehe oben.',
      'legal.vat.title': 'Umsatzsteuer',
      'legal.vat.note':
        'Umsatzsteuer wird nicht ausgewiesen, da der Anbieter Kleinunternehmer im Sinne des § 19 UStG ist.',
      'legal.liability.title': 'Haftung für Inhalte',
      'legal.liability.text':
        'Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      'legal.links.title': 'Haftung für Links',
      'legal.links.text':
        'Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte habe ich keinen Einfluss; deshalb kann ich für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.',
      'legal.copyright.title': 'Urheberrecht',
      'legal.copyright.text':
        'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.',
      'footer.copy': '© 2026 Mora',
      'footer.impressum': 'Impressum',
      'langSwitcher.label': 'Sprache'
    }
  };

  var langButtons = document.querySelectorAll('.lang-switcher__btn');
  var langSwitchers = document.querySelectorAll('.lang-switcher');

  function t(lang, key) {
    var dict = translations[lang];
    if (!dict) return key;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] || key);
  }

  function applyLegalData() {
    var data = window.LEGAL_IMPRESSUM;
    if (!data) return;

    var nameEl = document.getElementById('legal-provider-name');
    var brandEl = document.getElementById('legal-brand');
    var locationEl = document.getElementById('legal-location');
    var phoneEl = document.getElementById('legal-phone');
    var responsibleEl = document.getElementById('legal-responsible');
    var emailLink = document.getElementById('legal-email-link');
    var telegramLink = document.getElementById('legal-telegram');

    if (nameEl) nameEl.textContent = data.name;
    if (brandEl) brandEl.textContent = data.brand;
    if (locationEl) locationEl.textContent = [data.city, data.country].filter(Boolean).join(', ');
    if (phoneEl) phoneEl.textContent = data.phone;
    if (responsibleEl) responsibleEl.textContent = data.name;

    if (emailLink && data.email) {
      emailLink.href = 'mailto:' + data.email;
      emailLink.textContent = data.email;
    }

    if (telegramLink && data.telegram) {
      telegramLink.href = data.telegram;
      telegramLink.textContent = data.telegram.replace(/^https?:\/\//, '');
    }
  }

  function setLanguage(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;
    document.title = t(lang, 'legal.meta.title');

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(lang, 'legal.meta.description'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (el.dataset.i18nAttr) return;
      el.textContent = t(lang, el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.setAttribute(el.dataset.i18nAttr, t(lang, el.dataset.i18n));
    });

    langButtons.forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('lang-switcher__btn--active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    langSwitchers.forEach(function (sw) {
      sw.setAttribute('aria-label', t(lang, 'langSwitcher.label'));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
  }

  function initLanguage() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) { /* ignore */ }

    setLanguage(stored && LANGS.indexOf(stored) !== -1 ? stored : DEFAULT_LANG);

    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.dataset.lang);
      });
    });
  }

  applyLegalData();
  initLanguage();
})();
