(function () {
  'use strict';

  var LANGS = ['en', 'ru', 'de'];
  var STORAGE_KEY = 'portfolio-lang';
  var THEME_KEY = 'portfolio-theme';
  var LANG_HINT_KEY = 'portfolio-lang-hint-dismissed';
  var DEFAULT_LANG = 'ru';

  var SITE_CONTACT = {
    telegram: 'https://t.me/qwe171qw',
    whatsapp: '491603203111'
  };

  var translations = {
    en: {
      'meta.title': 'Kirill — Automation for small business',
      'meta.description': 'Kirill helps small businesses with spreadsheets, desktop tools, and websites — message on Telegram',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.process': 'Process',
      'nav.contact': 'Contact',
      'nav.onPage': 'On this page',
      'nav.label': 'Main navigation',
      'nav.mobileLabel': 'Mobile navigation',
      'header.logo': 'Kirill',
      'cta.telegram': 'Message on Telegram',
      'cta.whatsapp': 'Message on WhatsApp',
      'cta.writeShort': 'Write',
      'skipLink': 'Skip to content',
      'sidebar.messageMe': 'message me',
      'sidebar.label': 'Contact shortcuts',
      'sidebar.telegramLabel': 'Telegram',
      'sidebar.whatsappLabel': 'WhatsApp',
      'backToTop': 'Back to top',
      'langSwitcher.label': 'Language',
      'themeToggle.label': 'Theme',
      'themeToggle.light': 'Light',
      'themeToggle.dark': 'Dark',
      'drawer.openMenu': 'Open menu',
      'drawer.closeMenu': 'Close menu',
      'hero.name': 'Kirill',
      'hero.role': 'Automation for small business',
      'brand.tagline': 'Mora',
      'brand.clarifier': 'One developer — you talk to me directly, not a sales team',
      'hero.subtitle': 'Spreadsheets, desktop tools, and websites — without agency overhead',
      'hero.trustLine': 'You write me directly — no handoff to a manager',
      'hero.responseTime': 'Usually reply on Telegram within a few hours on weekdays',
      'hero.proofLine': 'Desktop tools for spreadsheets, requests, and small-business workflows',
      'hero.ctaSecondary': 'View projects',
      'services.title': 'Services',
      'services.subtitle': 'What I build for your business',
      'services.1.title': 'Excel & CSV processing',
      'services.1.text': 'Import, clean, merge spreadsheets. Reports without manual hassle.',
      'services.2.title': 'AI spreadsheet assistant',
      'services.2.text': 'Desktop app for Windows and macOS: open a spreadsheet, pick a template or describe the task — AI draft, you review and save.',
      'services.3.title': 'Website development',
      'services.3.text': 'Landing pages and business sites — fast, responsive, ready to host.',
      'services.4.title': 'Custom desktop apps',
      'services.4.text': 'Windows/macOS tools tailored to your workflow, nothing extra.',
      'services.5.title': 'Integrations & bots',
      'services.5.text': 'Telegram bots, webhooks, connections between your services.',
      'projects.title': 'Projects',
      'projects.subtitle': "Examples of what I've built",
      'projects.label.task': 'Task',
      'projects.label.solution': 'Solution',
      'projects.label.result': 'Result',
      'projects.cta.askAbout': 'Ask about this project',
      'projects.cta.screenshots': 'View screenshots',
      'projects.contextNote': 'SokraLog is a learning app I built for exam prep — it shows I can ship complex desktop UIs. For your Excel or requests workflow, SmartSorter above is the closer example.',
      'projects.secondaryLabel': 'Also built',
      'projects.moreTeaser': 'Integrations, landing pages, custom reports — message me with your task',
      'projects.1.badge': 'Demo project',
      'projects.1.title': 'SmartSorter',
      'projects.1.task': 'In an office, complaints and requests land in Excel — staff manually sort them into department folders.',
      'projects.1.solution': 'Desktop app (Python + PyQt6): AI suggests a draft routing, a person reviews, files go to department folders.',
      'projects.1.result': 'Instead of long manual sorting — a quick draft with human check before files are filed.',
      'projects.1.stack': 'Python, PyQt6, Pandas, Claude API',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Studying warehouse logistics formulas for a German vocational exam (IHK — industry training certificate, not required for most clients).',
      'projects.2.solution': 'Desktop app Python + Flet — formula reference, exam mode, Socratic method, RU/DE/EN',
      'projects.2.result': 'Faster exam prep — formulas and practice in one desktop app, three languages',
      'projects.2.stack': 'Python, Flet',
      'process.title': 'How I work',
      'process.subtitle': 'From message to working tool — fast and transparent',
      'process.1.title': 'You write first',
      'process.1.text': 'Message me on Telegram or WhatsApp with your task — no call needed to start, I reply and ask follow-up questions in chat',
      'process.2.title': 'Scope',
      'process.2.text': 'I confirm what the result should look like',
      'process.3.title': 'First version in 3–5 days',
      'process.3.text': 'A ready tool for your task — you check it on your actual spreadsheets and data',
      'process.4.title': 'Iterations',
      'process.4.text': 'Improvements based on your feedback',
      'contact.title': 'Get in touch',
      'contact.subtitle': "Describe your task — I'll reply on Telegram or WhatsApp",
      'contact.heading': 'Do you have a task?',
      'contact.lead': 'Fastest way: message me on Telegram. Online form is coming later.',
      'contact.pricingNote': 'No fixed price list — I agree on scope after you describe the task. No agency markup.',
      'contact.telegramLabel': 'Telegram',
      'form.collapsedNotice': 'Online form coming soon',
      'form.comingSoonBadge': 'Coming soon',
      'footer.copy': '© 2026 Kirill · Mora',
      'footer.telegram': '@qwe171qw',
      'langHint.text': "Site language doesn't match your browser — switch above",
      'langHint.dismiss': 'Got it'
    },
    ru: {
      'meta.title': 'Кирилл — Автоматизация для малого бизнеса',
      'meta.description': 'Кирилл — автоматизация для малого бизнеса: таблицы, десктоп, сайты. Напишите в Telegram',
      'nav.services': 'Услуги',
      'nav.projects': 'Проекты',
      'nav.process': 'Как работаю',
      'nav.contact': 'Контакты',
      'nav.onPage': 'На странице',
      'nav.label': 'Основная навигация',
      'nav.mobileLabel': 'Мобильная навигация',
      'header.logo': 'Кирилл',
      'cta.telegram': 'Написать в Telegram',
      'cta.whatsapp': 'Написать в WhatsApp',
      'cta.writeShort': 'Написать',
      'skipLink': 'Перейти к содержимому',
      'sidebar.messageMe': 'напишите мне',
      'sidebar.label': 'Быстрые контакты',
      'sidebar.telegramLabel': 'Telegram',
      'sidebar.whatsappLabel': 'WhatsApp',
      'backToTop': 'Наверх',
      'langSwitcher.label': 'Язык',
      'themeToggle.label': 'Тема',
      'themeToggle.light': 'Светлая',
      'themeToggle.dark': 'Тёмная',
      'drawer.openMenu': 'Открыть меню',
      'drawer.closeMenu': 'Закрыть меню',
      'hero.name': 'Кирилл',
      'hero.role': 'Автоматизация для малого бизнеса',
      'brand.tagline': 'Mora',
      'brand.clarifier': 'Один разработчик — пишете мне лично, без агентства и менеджеров',
      'hero.subtitle': 'Таблицы, десктоп-инструменты и сайты — без агентской бюрократии',
      'hero.trustLine': 'Пишете напрямую мне — без менеджеров и посредников',
      'hero.responseTime': 'Обычно отвечаю в Telegram в течение нескольких часов в будни',
      'hero.proofLine': 'Десктоп-инструменты для таблиц, заявок и процессов малого бизнеса',
      'hero.ctaSecondary': 'Смотреть проекты',
      'services.title': 'Услуги',
      'services.subtitle': 'Что делаю для вашего бизнеса',
      'services.1.title': 'Обработка Excel и CSV',
      'services.1.text': 'Загрузка, очистка, объединение таблиц. Отчёты без ручной возни.',
      'services.2.title': 'Умная обработка Excel/CSV',
      'services.2.text': 'Десктоп для Windows и macOS: открыли таблицу, шаблон или своя задача — ИИ черновик, вы проверяете и сохраняете.',
      'services.3.title': 'Разработка сайтов',
      'services.3.text': 'Лендинги и сайты для бизнеса — быстро, адаптивно, готовы к публикации.',
      'services.4.title': 'Десктоп-приложения под задачу',
      'services.4.text': 'Программы под Windows/macOS для вашего процесса, без лишнего.',
      'services.5.title': 'Связка сервисов и ботов',
      'services.5.text': "Telegram-боты, webhook'и, интеграции между сервисами.",
      'projects.title': 'Проекты',
      'projects.subtitle': 'Примеры того, что уже делал',
      'projects.label.task': 'Задача',
      'projects.label.solution': 'Решение',
      'projects.label.result': 'Результат',
      'projects.cta.askAbout': 'Написать про этот проект',
      'projects.cta.screenshots': 'Посмотреть скриншоты',
      'projects.contextNote': 'SokraLog — учебное приложение для экзамена; показывает, что умею в сложный десктоп. Для ваших таблиц и заявок ближе SmartSorter выше.',
      'projects.secondaryLabel': 'Ещё делал',
      'projects.moreTeaser': 'Интеграции, лендинги, отчёты под задачу — напишите, что нужно',
      'projects.1.badge': 'Демо-проект',
      'projects.1.title': 'SmartSorter',
      'projects.1.task': 'В офисе жалобы и заявки в Excel — вручную раскладывают по папкам отделов.',
      'projects.1.solution': 'Десктоп-приложение (Python + PyQt6): ИИ предлагает черновик раскладки, человек проверяет, файлы уходят в папки отделов.',
      'projects.1.result': 'Вместо долгой ручной сортировки — быстрый черновик с проверкой перед раскладкой.',
      'projects.1.stack': 'Python, PyQt6, Pandas, Claude API',
      'projects.2.badge': 'Пет-проект v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Учёба по формулам складской логистики для немецкого профэкзамена (IHK — отраслевой сертификат, большинству клиентов не нужен).',
      'projects.2.solution': 'Десктоп Python + Flet — справочник формул, экзамен, метод Сократа, RU/DE/EN',
      'projects.2.result': 'Быстрее готовится к экзамену — формулы и практика в одном приложении, три языка',
      'projects.2.stack': 'Python, Flet',
      'process.title': 'Как работаю',
      'process.subtitle': 'От сообщения до рабочего инструмента — быстро и прозрачно',
      'process.1.title': 'Вы пишете первым',
      'process.1.text': 'Пишете мне в Telegram или WhatsApp с описанием задачи — без созвона на старте, отвечаю и уточняю детали в переписке',
      'process.2.title': 'Фиксируем задачу',
      'process.2.text': 'Согласуем, что должно получиться на выходе',
      'process.3.title': 'Первая версия за 3–5 дней',
      'process.3.text': 'Готовый инструмент под вашу задачу — проверяете на реальных таблицах и данных',
      'process.4.title': 'Доработки',
      'process.4.text': 'Улучшаю по вашей обратной связи',
      'contact.title': 'Связаться',
      'contact.subtitle': 'Опишите задачу — отвечу в Telegram или WhatsApp',
      'contact.heading': 'Есть задача?',
      'contact.lead': 'Быстрее всего — напишите в Telegram. Онлайн-форма появится позже.',
      'contact.pricingNote': 'Без прайса на сайте — оценю после описания задачи. Без агентских наценок.',
      'contact.telegramLabel': 'Telegram',
      'form.collapsedNotice': 'Онлайн-форма скоро',
      'form.comingSoonBadge': 'Скоро',
      'footer.copy': '© 2026 Кирилл · Mora',
      'footer.telegram': '@qwe171qw',
      'langHint.text': 'Язык сайта не совпадает с браузером — переключите выше',
      'langHint.dismiss': 'Понятно'
    },
    de: {
      'meta.title': 'Kirill — Automatisierung für kleine Unternehmen',
      'meta.description': 'Kirill — Tabellen, Desktop-Tools und Websites für kleine Unternehmen. Schreiben Sie auf Telegram',
      'nav.services': 'Leistungen',
      'nav.projects': 'Projekte',
      'nav.process': 'Ablauf',
      'nav.contact': 'Kontakt',
      'nav.onPage': 'Auf dieser Seite',
      'nav.label': 'Hauptnavigation',
      'nav.mobileLabel': 'Mobile Navigation',
      'header.logo': 'Kirill',
      'cta.telegram': 'Nachricht auf Telegram',
      'cta.whatsapp': 'Nachricht auf WhatsApp',
      'cta.writeShort': 'Schreiben',
      'skipLink': 'Zum Inhalt springen',
      'sidebar.messageMe': 'schreib mir',
      'sidebar.label': 'Kontakt-Shortcuts',
      'sidebar.telegramLabel': 'Telegram',
      'sidebar.whatsappLabel': 'WhatsApp',
      'backToTop': 'Nach oben',
      'langSwitcher.label': 'Sprache',
      'themeToggle.label': 'Design',
      'themeToggle.light': 'Hell',
      'themeToggle.dark': 'Dunkel',
      'drawer.openMenu': 'Menü öffnen',
      'drawer.closeMenu': 'Menü schließen',
      'hero.name': 'Kirill',
      'hero.role': 'Automatisierung für kleine Unternehmen',
      'brand.tagline': 'Mora',
      'brand.clarifier': 'Ein Entwickler — Sie schreiben mir direkt, kein Vertriebsteam',
      'hero.subtitle': 'Tabellen, Desktop-Tools und Websites — ohne Agentur-Overhead',
      'hero.trustLine': 'Sie schreiben mir direkt — kein Manager dazwischen',
      'hero.responseTime': 'Antwort auf Telegram meist innerhalb weniger Stunden werktags',
      'hero.proofLine': 'Desktop-Tools für Tabellen, Anfragen und kleine Unternehmen',
      'hero.ctaSecondary': 'Projekte ansehen',
      'services.title': 'Leistungen',
      'services.subtitle': 'Was ich für Ihr Unternehmen baue',
      'services.1.title': 'Excel- & CSV-Verarbeitung',
      'services.1.text': 'Import, Bereinigung, Zusammenführung von Tabellen. Berichte ohne manuellen Aufwand.',
      'services.2.title': 'KI-Tabellen-Assistent',
      'services.2.text': 'Desktop für Windows und macOS: Tabelle öffnen, Vorlage wählen oder Aufgabe beschreiben — KI-Entwurf, Sie prüfen und speichern.',
      'services.3.title': 'Website-Entwicklung',
      'services.3.text': 'Landingpages und Business-Websites — schnell, responsiv, bereit zum Hosten.',
      'services.4.title': 'Desktop-Apps nach Maß',
      'services.4.text': 'Windows/macOS-Tools für Ihren Prozess, ohne Schnickschnack.',
      'services.5.title': 'Integrationen & Bots',
      'services.5.text': 'Telegram-Bots, Webhooks, Verbindungen zwischen Ihren Diensten.',
      'projects.title': 'Projekte',
      'projects.subtitle': 'Beispiele meiner Arbeit',
      'projects.label.task': 'Aufgabe',
      'projects.label.solution': 'Lösung',
      'projects.label.result': 'Ergebnis',
      'projects.cta.askAbout': 'Nachricht zu diesem Projekt',
      'projects.cta.screenshots': 'Screenshots ansehen',
      'projects.contextNote': 'SokraLog ist eine Lern-App fürs Examen — zeigt komplexe Desktop-UIs. Für Ihre Excel-/Anfragen-Workflows ist SmartSorter oben näher dran.',
      'projects.secondaryLabel': 'Außerdem',
      'projects.moreTeaser': 'Integrationen, Landingpages, Reports — schreiben Sie Ihre Aufgabe',
      'projects.1.badge': 'Demo-Projekt',
      'projects.1.title': 'SmartSorter',
      'projects.1.task': 'Im Büro landen Beschwerden und Anfragen in Excel — Mitarbeiter sortieren sie manuell in Ordner.',
      'projects.1.solution': 'Desktop-App (Python + PyQt6): KI schlägt Routing-Entwurf vor, Mensch prüft, Dateien landen in Abteilungsordnern.',
      'projects.1.result': 'Statt langer manueller Sortierung — schneller Entwurf mit menschlicher Prüfung.',
      'projects.1.stack': 'Python, PyQt6, Pandas, Claude API',
      'projects.2.badge': 'Pet-Projekt v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Lernen von Lagerlogistik-Formeln für deutsche Berufsabschlussprüfung (IHK — Branchenzertifikat, für die meisten Kunden irrelevant).',
      'projects.2.solution': 'Desktop Python + Flet — Formelsammlung, Prüfungsmodus, Sokrates-Methode, RU/DE/EN',
      'projects.2.result': 'Schnellere Prüfungsvorbereitung — Formeln und Übung in einer App, drei Sprachen',
      'projects.2.stack': 'Python, Flet',
      'process.title': 'So arbeite ich',
      'process.subtitle': 'Vom Nachricht bis zum Tool — schnell und transparent',
      'process.1.title': 'Sie schreiben zuerst',
      'process.1.text': 'Schreiben Sie mir per Telegram oder WhatsApp — kein Anruf nötig, ich antworte und stelle Rückfragen im Chat',
      'process.2.title': 'Aufgabe festhalten',
      'process.2.text': 'Ich bestätige, was am Ende stehen soll',
      'process.3.title': 'Erste Version in 3–5 Tagen',
      'process.3.text': 'Ein fertiges Tool für Ihre Aufgabe — Sie prüfen es mit Ihren echten Tabellen und Daten',
      'process.4.title': 'Iterationen',
      'process.4.text': 'Verbesserungen nach Ihrem Feedback',
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Beschreiben Sie Ihre Aufgabe — ich antworte auf Telegram oder WhatsApp',
      'contact.heading': 'Haben Sie eine Aufgabe?',
      'contact.lead': 'Am schnellsten: schreiben Sie auf Telegram. Online-Formular kommt später.',
      'contact.pricingNote': 'Kein Festpreis — ich einige mich nach Ihrer Aufgabe. Keine Agentur-Aufschläge.',
      'contact.telegramLabel': 'Telegram',
      'form.collapsedNotice': 'Online-Formular demnächst',
      'form.comingSoonBadge': 'Demnächst',
      'footer.copy': '© 2026 Kirill · Mora',
      'footer.telegram': '@qwe171qw',
      'langHint.text': 'Sprache der Seite weicht vom Browser ab — oben wechseln',
      'langHint.dismiss': 'Verstanden'
    }
  };

  var currentLang = DEFAULT_LANG;

  var header = document.getElementById('header');
  var burger = document.querySelector('.header__burger');
  var drawer = document.getElementById('mobile-drawer');
  var drawerBackdrop = document.querySelector('[data-drawer-close]');
  var drawerLinks = document.querySelectorAll('.header__drawer-link');
  var navLinks = document.querySelectorAll('.header__nav-link, .header__drawer-link');
  var sections = document.querySelectorAll('section[id]');
  var backToTop = document.getElementById('back-to-top');
  var stickyCta = document.getElementById('sticky-cta');
  var langButtons = document.querySelectorAll('.lang-switcher__btn');
  var langSwitchers = document.querySelectorAll('.lang-switcher');
  var themeToggles = document.querySelectorAll('.theme-toggle');
  var langHint = document.getElementById('lang-hint');
  var langHintDismiss = document.querySelector('.lang-hint__dismiss');
  var heroSection = document.getElementById('hero');
  var contactSection = document.getElementById('contact');

  function detectLanguage() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) { /* ignore */ }

    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (nav === 'de') return 'de';
    if (nav === 'ru') return 'ru';
    return 'ru';
  }

  function getBrowserLangPrefix() {
    return (navigator.language || '').slice(0, 2).toLowerCase();
  }

  function initContactLinks() {
    var telegramUrl = SITE_CONTACT.telegram;
    var whatsappDigits = (SITE_CONTACT.whatsapp || '').replace(/\D/g, '');
    var whatsappUrl = whatsappDigits ? 'https://wa.me/' + whatsappDigits : '';

    document.querySelectorAll('[data-contact-link="telegram"]').forEach(function (el) {
      if (telegramUrl) el.href = telegramUrl;
    });

    document.querySelectorAll('[data-contact-link="telegram-project"]').forEach(function (el) {
      if (telegramUrl) {
        var text = encodeURIComponent('SmartSorter');
        el.href = telegramUrl + '?text=' + text;
      }
    });

    document.querySelectorAll('[data-contact-link="whatsapp"]').forEach(function (el) {
      if (whatsappUrl) {
        el.href = whatsappUrl;
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    });
  }

  function t(lang, key) {
    var dict = translations[lang];
    if (!dict) return key;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] || key);
  }

  function setLanguage(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.title = t(lang, 'meta.title');

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(lang, 'meta.description'));

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

    if (burger && (!drawer || !drawer.classList.contains('is-open'))) {
      burger.setAttribute('aria-label', t(lang, 'drawer.openMenu'));
    } else if (burger) {
      burger.setAttribute('aria-label', t(lang, 'drawer.closeMenu'));
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }

    updateLangHint();
  }

  function updateLangHint() {
    if (!langHint) return;

    var dismissed = false;
    try {
      dismissed = localStorage.getItem(LANG_HINT_KEY) === '1';
    } catch (e) { /* ignore */ }

    var browserPrefix = getBrowserLangPrefix();
    var sitePrefix = currentLang;
    var mismatch = browserPrefix !== sitePrefix;

    if (mismatch && !dismissed) {
      langHint.hidden = false;
      langHint.classList.add('lang-hint--visible');
    } else {
      langHint.hidden = true;
      langHint.classList.remove('lang-hint--visible');
    }
  }

  function initLanguage() {
    var lang = document.documentElement.lang || detectLanguage();
    if (LANGS.indexOf(lang) === -1) lang = detectLanguage();
    setLanguage(lang);

    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.dataset.lang);
        dismissLangHint();
      });
    });

    if (langHintDismiss) {
      langHintDismiss.addEventListener('click', dismissLangHint);
    }
  }

  function dismissLangHint() {
    if (!langHint) return;
    langHint.hidden = true;
    langHint.classList.remove('lang-hint--visible');
    try {
      localStorage.setItem(LANG_HINT_KEY, '1');
    } catch (e) { /* ignore */ }
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    themeToggles.forEach(function (btn) {
      var isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', t(currentLang, isDark ? 'themeToggle.dark' : 'themeToggle.light'));
    });
  }

  function initTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(THEME_KEY);
    } catch (e) { /* ignore */ }

    var theme = document.documentElement.dataset.theme || stored || getSystemTheme();
    applyTheme(theme);

    themeToggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.dataset.theme || getSystemTheme();
        var next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (e) { /* ignore */ }
      });
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      try {
        if (localStorage.getItem(THEME_KEY)) return;
      } catch (err) { /* ignore */ }
      applyTheme(e.matches ? 'light' : 'dark');
    });
  }

  function updateHeaderScroll() {
    if (!header) return;
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  }

  function updateStickyCta() {
    if (!stickyCta || !heroSection) return;
    var pastHero = window.scrollY > (heroSection.offsetHeight - 100);
    var contactVisible = false;

    if (contactSection) {
      var rect = contactSection.getBoundingClientRect();
      contactVisible = rect.top < window.innerHeight && rect.bottom > 0;
    }

    var visible = pastHero && !contactVisible && window.innerWidth < 768;
    stickyCta.classList.toggle('sticky-cta--visible', visible);
    document.body.classList.toggle('sticky-cta-active', visible);
  }

  function updateBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle('back-to-top--visible', window.scrollY > 400);
  }

  function onScroll() {
    updateHeaderScroll();
    updateBackToTop();
    updateStickyCta();
    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateStickyCta, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      var hero = document.getElementById('hero');
      if (hero) smoothScrollTo(hero);
    });
  }

  function openDrawer() {
    if (!drawer || !burger) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', t(currentLang, 'drawer.closeMenu'));
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    if (!drawer || !burger) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', t(currentLang, 'drawer.openMenu'));
    document.body.classList.remove('drawer-open');
  }

  function toggleDrawer() {
    if (drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  if (burger) burger.addEventListener('click', toggleDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
      burger.focus();
    }
  });

  function smoothScrollTo(target) {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var top = target.getBoundingClientRect().top + window.scrollY - 72;

    window.scrollTo({
      top: top,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  }

  function scrollToSectionId(id) {
    var target = document.getElementById(id);
    if (!target) return;
    smoothScrollTo(target);
  }

  document.querySelectorAll('[data-scroll-to]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('data-scroll-to');
      if (!id) return;

      e.preventDefault();
      scrollToSectionId(id);

      if (drawer && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  });

  if (window.location.hash) {
    var legacyId = window.location.hash.slice(1);
    if (legacyId) scrollToSectionId(legacyId);
    if (history.replaceState) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  function updateActiveNav() {
    var scrollPos = window.scrollY + 100;
    var current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      var targetId = link.getAttribute('data-scroll-to');
      link.classList.toggle('is-active', targetId === current);
    });
  }

  initContactLinks();
  initLanguage();
  initTheme();
  document.body.classList.add('i18n-ready');
  document.documentElement.classList.remove('i18n-pending');
})();
