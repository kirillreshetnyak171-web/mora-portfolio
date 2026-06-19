(function () {
  'use strict';

  var LANGS = ['en', 'ru', 'de'];
  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'en';

  // Contacts: set WhatsApp as digits only — country code + number (e.g. 491701234567)
  var SITE_CONTACT = {
    telegram: 'https://t.me/qwe171qw',
    whatsapp: '491603203111'
  };

  var translations = {
    en: {
      'meta.title': 'Mora — Automation & websites',
      'meta.description': 'Mora — automation and websites for small business',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.process': 'Process',
      'nav.contact': 'Contact',
      'cta.telegram': 'Message on Telegram',
      'cta.whatsapp': 'Message on WhatsApp',
      'skipLink': 'Skip to content',
      'sidebar.messageMe': 'message me',
      'backToTop': 'Back to top',
      'langSwitcher.label': 'Language',
      'drawer.openMenu': 'Open menu',
      'drawer.closeMenu': 'Close menu',
      'nav.label': 'Main navigation',
      'nav.mobileLabel': 'Mobile navigation',
      'brand.name': 'Mora',
      'hero.subtitle': 'Automation and websites for small business — spreadsheets, desktop tools, landing pages',
      'hero.ctaSecondary': 'View projects',
      'services.title': 'Services',
      'services.subtitle': 'What we build for your business',
      'services.1.title': 'Excel & CSV processing',
      'services.1.text': 'Import, clean, merge spreadsheets. Reports without manual hassle.',
      'services.2.title': 'AI spreadsheet assistant',
      'services.2.text': 'Desktop on Mac: open Excel/CSV, pick a template or describe the task — AI draft, you review and save.',
      'services.3.title': 'Website development',
      'services.3.text': 'Landing pages and business sites — fast, responsive, ready to host on GitHub Pages or your domain.',
      'services.4.title': 'Custom desktop apps',
      'services.4.text': 'Windows/macOS tools tailored to your workflow, nothing extra.',
      'services.5.title': 'Integrations & bots',
      'services.5.text': 'Telegram bots, webhooks, connections between your services.',
      'projects.title': 'Projects',
      'projects.subtitle': "Examples of what I've built",
      'projects.label.task': 'Task',
      'projects.label.solution': 'Solution',
      'projects.label.result': 'Result',
      'projects.1.badge': 'Pet project / Demo',
      'projects.1.title': 'Smart Assistant',
      'projects.1.task': 'Excel and CSV tasks eat up hours — sorting rows, cleaning data, preparing drafts by hand.',
      'projects.1.solution': 'Desktop app: upload a spreadsheet, pick a template or describe the task — AI suggests a draft, you review and save.',
      'projects.1.result': 'A working draft in minutes instead of repetitive manual work — the final decision stays with you.',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Studying warehouse logistics formulas (IHK)',
      'projects.2.solution': 'Desktop app Python + Flet — formula reference, exam, Socratic method, RU/DE/EN',
      'process.title': 'How I work',
      'process.subtitle': 'From idea to working tool — fast and transparent',
      'process.1.title': 'You message first',
      'process.1.text': 'Describe your task in Telegram or WhatsApp — I read and ask follow-up questions',
      'process.2.title': 'Scope',
      'process.2.text': 'We write down what the outcome should be',
      'process.3.title': 'First version in 3–5 days',
      'process.3.text': 'A working first version — you open it and check it yourself',
      'process.4.title': 'Iterations',
      'process.4.text': 'Improvements based on your feedback',
      'contact.title': 'Get in touch',
      'contact.subtitle': "Describe your task — we'll reply on Telegram or WhatsApp",
      'contact.heading': 'Do you have a task?',
      'contact.lead': 'Fill out the form — the request goes straight to Telegram.',
      'form.name': 'Name',
      'form.contact': 'Email / Telegram',
      'form.message': 'Message',
      'form.submit': 'Send request',
      'form.sending': 'Sending…',
      'form.notice': 'You can also message us directly on Telegram or WhatsApp.',
      'form.privacyPrefix': 'I agree to the processing of my data according to the',
      'form.consentRequired': 'Please confirm the privacy policy checkbox.',
      'form.disabled': 'Form is temporarily disabled.',
      'form.error': 'Could not send. Message us on Telegram or WhatsApp.',
      'form.rateLimited': 'Please wait a minute before sending again.',
      'form.tooFast': 'Please read the page first, then send your message.',
      'form.notConfigured': 'Form is not connected yet — use Telegram or WhatsApp.',
      'toast.success': "Thank you! I'll get back to you soon.",
      'footer.copy': '© 2026 Mora',
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookies'
    },
    ru: {
      'meta.title': 'Mora — Автоматизация и сайты',
      'meta.description': 'Mora — автоматизация и сайты для малого бизнеса',
      'nav.services': 'Услуги',
      'nav.projects': 'Проекты',
      'nav.process': 'Как работаю',
      'nav.contact': 'Контакты',
      'cta.telegram': 'Написать в Telegram',
      'cta.whatsapp': 'Написать в WhatsApp',
      'skipLink': 'Перейти к содержимому',
      'sidebar.messageMe': 'напишите мне',
      'backToTop': 'Наверх',
      'langSwitcher.label': 'Язык',
      'drawer.openMenu': 'Открыть меню',
      'drawer.closeMenu': 'Закрыть меню',
      'nav.label': 'Основная навигация',
      'nav.mobileLabel': 'Мобильная навигация',
      'brand.name': 'Mora',
      'hero.subtitle': 'Автоматизация и сайты для малого бизнеса — таблицы, десктоп-инструменты, лендинги',
      'hero.ctaSecondary': 'Смотреть проекты',
      'services.title': 'Услуги',
      'services.subtitle': 'Что делаем для вашего бизнеса',
      'services.1.title': 'Обработка Excel и CSV',
      'services.1.text': 'Загрузка, очистка, объединение таблиц. Отчёты без ручной возни.',
      'services.2.title': 'Умная обработка Excel/CSV',
      'services.2.text': 'Десктоп на Mac: открыл таблицу, шаблон или своя задача — ИИ черновик, вы проверяете и сохраняете.',
      'services.3.title': 'Разработка сайтов',
      'services.3.text': 'Лендинги и сайты для бизнеса — быстро, адаптивно, можно на GitHub Pages или ваш домен.',
      'services.4.title': 'Десктоп-приложения под задачу',
      'services.4.text': 'Программы под Windows/macOS для вашего процесса, без лишнего.',
      'services.5.title': 'Связка сервисов и ботов',
      'services.5.text': "Telegram-боты, webhook'и, интеграции между сервисами.",
      'projects.title': 'Проекты',
      'projects.subtitle': 'Примеры того, что уже делал',
      'projects.label.task': 'Задача',
      'projects.label.solution': 'Решение',
      'projects.label.result': 'Результат',
      'projects.1.badge': 'Pet project / Demo',
      'projects.1.title': 'Smart Assistant',
      'projects.1.task': 'Задачи в Excel и CSV отнимают часы — сортировка, очистка данных, черновики вручную.',
      'projects.1.solution': 'Программа на компьютер: загружаете таблицу, выбираете шаблон или описываете задачу — ИИ предлагает черновик, вы проверяете и сохраняете.',
      'projects.1.result': 'Готовый черновик за минуты вместо рутины — финальное решение остаётся за вами.',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Учёба по формулам складской логистики IHK',
      'projects.2.solution': 'Десктоп-приложение Python + Flet — справочник формул, экзамен, метод Сократа, RU/DE/EN',
      'process.title': 'Как работаю',
      'process.subtitle': 'От идеи до рабочего инструмента — быстро и прозрачно',
      'process.1.title': 'Вы пишете первым',
      'process.1.text': 'Описываете задачу в Telegram или WhatsApp — я читаю и задаю уточняющие вопросы',
      'process.2.title': 'Фиксируем задачу',
      'process.2.text': 'Прописываем, что должно получиться',
      'process.3.title': 'Первая версия за 3–5 дней',
      'process.3.text': 'Первая рабочая версия — открываете и проверяете сами',
      'process.4.title': 'Доработки',
      'process.4.text': 'Улучшаем по вашей обратной связи',
      'contact.title': 'Связаться',
      'contact.subtitle': 'Опишите задачу — ответим в Telegram или WhatsApp',
      'contact.heading': 'Есть задача?',
      'contact.lead': 'Заполните форму — заявка сразу придёт в Telegram.',
      'form.name': 'Имя',
      'form.contact': 'Email / Telegram',
      'form.message': 'Сообщение',
      'form.submit': 'Отправить заявку',
      'form.sending': 'Отправка…',
      'form.notice': 'Или напишите напрямую в Telegram или WhatsApp.',
      'form.privacyPrefix': 'Согласен(на) на обработку данных согласно',
      'form.consentRequired': 'Отметьте согласие с политикой конфиденциальности.',
      'form.disabled': 'Форма временно отключена.',
      'form.error': 'Не удалось отправить. Напишите в Telegram или WhatsApp.',
      'form.rateLimited': 'Подождите минуту перед повторной отправкой.',
      'form.tooFast': 'Сначала прочитайте страницу, затем отправьте сообщение.',
      'form.notConfigured': 'Форма ещё не подключена — напишите в Telegram или WhatsApp.',
      'toast.success': 'Спасибо! Свяжусь с вами в ближайшее время.',
      'footer.copy': '© 2026 Mora',
      'footer.privacy': 'политике конфиденциальности',
      'footer.cookies': 'Cookies'
    },
    de: {
      'meta.title': 'Mora — Automatisierung & Websites',
      'meta.description': 'Mora — Automatisierung und Websites für kleine Unternehmen',
      'nav.services': 'Leistungen',
      'nav.projects': 'Projekte',
      'nav.process': 'Ablauf',
      'nav.contact': 'Kontakt',
      'cta.telegram': 'Nachricht auf Telegram',
      'cta.whatsapp': 'Nachricht auf WhatsApp',
      'skipLink': 'Zum Inhalt springen',
      'sidebar.messageMe': 'schreib mir',
      'backToTop': 'Nach oben',
      'langSwitcher.label': 'Sprache',
      'drawer.openMenu': 'Menü öffnen',
      'drawer.closeMenu': 'Menü schließen',
      'nav.label': 'Hauptnavigation',
      'nav.mobileLabel': 'Mobile Navigation',
      'brand.name': 'Mora',
      'hero.subtitle': 'Automatisierung und Websites für kleine Unternehmen — Tabellen, Desktop-Tools, Landingpages',
      'hero.ctaSecondary': 'Projekte ansehen',
      'services.title': 'Leistungen',
      'services.subtitle': 'Was wir für Ihr Unternehmen bauen',
      'services.1.title': 'Excel- & CSV-Verarbeitung',
      'services.1.text': 'Import, Bereinigung, Zusammenführung von Tabellen. Berichte ohne manuellen Aufwand.',
      'services.2.title': 'KI-Tabellenassistent',
      'services.2.text': 'Desktop auf dem Mac: Excel/CSV öffnen, Vorlage oder eigene Aufgabe — KI-Entwurf, Sie prüfen und speichern.',
      'services.3.title': 'Website-Entwicklung',
      'services.3.text': 'Landingpages und Business-Websites — schnell, responsiv, bereit für GitHub Pages oder Ihre Domain.',
      'services.4.title': 'Desktop-Apps nach Maß',
      'services.4.text': 'Windows/macOS-Tools für Ihren Prozess, ohne Schnickschnack.',
      'services.5.title': 'Integrationen & Bots',
      'services.5.text': 'Telegram-Bots, Webhooks, Verbindungen zwischen Ihren Diensten.',
      'projects.title': 'Projekte',
      'projects.subtitle': 'Beispiele meiner Arbeit',
      'projects.label.task': 'Aufgabe',
      'projects.label.solution': 'Lösung',
      'projects.label.result': 'Ergebnis',
      'projects.1.badge': 'Pet project / Demo',
      'projects.1.title': 'Smart Assistant',
      'projects.1.task': 'Excel- und CSV-Aufgaben kosten Stunden — Sortieren, Daten bereinigen, Entwürfe von Hand.',
      'projects.1.solution': 'Desktop-Programm: Tabelle hochladen, Vorlage wählen oder Aufgabe beschreiben — KI schlägt einen Entwurf vor, Sie prüfen und speichern.',
      'projects.1.result': 'Ein nutzbarer Entwurf in Minuten statt Routinearbeit — die finale Entscheidung bleibt bei Ihnen.',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Lernen von Lagerlogistik-Formeln (IHK)',
      'projects.2.solution': 'Desktop-App Python + Flet — Formelsammlung, Prüfung, Sokrates-Methode, RU/DE/EN',
      'process.title': 'So arbeite ich',
      'process.subtitle': 'Von der Idee zum Tool — schnell und transparent',
      'process.1.title': 'Sie schreiben zuerst',
      'process.1.text': 'Beschreiben Sie Ihre Aufgabe per Telegram oder WhatsApp — ich lese mit und stelle Rückfragen',
      'process.2.title': 'Aufgabe festhalten',
      'process.2.text': 'Wir halten fest, was am Ende stehen soll',
      'process.3.title': 'Erste Version in 3–5 Tagen',
      'process.3.text': 'Eine funktionierende erste Version — Sie öffnen und prüfen sie selbst',
      'process.4.title': 'Iterationen',
      'process.4.text': 'Verbesserungen nach Ihrem Feedback',
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Beschreiben Sie Ihre Aufgabe — wir antworten auf Telegram oder WhatsApp',
      'contact.heading': 'Haben Sie eine Aufgabe?',
      'contact.lead': 'Formular ausfüllen — die Anfrage geht direkt an Telegram.',
      'form.name': 'Name',
      'form.contact': 'E-Mail / Telegram',
      'form.message': 'Nachricht',
      'form.submit': 'Anfrage senden',
      'form.sending': 'Wird gesendet…',
      'form.notice': 'Oder schreiben Sie direkt auf Telegram oder WhatsApp.',
      'form.privacyPrefix': 'Ich willige in die Verarbeitung meiner Daten gemäß der',
      'form.consentRequired': 'Bitte bestätigen Sie die Datenschutzerklärung.',
      'form.disabled': 'Formular vorübergehend deaktiviert.',
      'form.error': 'Senden fehlgeschlagen. Schreiben Sie auf Telegram oder WhatsApp.',
      'form.rateLimited': 'Bitte eine Minute warten, bevor Sie erneut senden.',
      'form.tooFast': 'Bitte lesen Sie die Seite, bevor Sie senden.',
      'form.notConfigured': 'Formular noch nicht verbunden — bitte Telegram oder WhatsApp.',
      'toast.success': 'Danke! Ich melde mich in Kürze.',
      'footer.copy': '© 2026 Mora',
      'footer.privacy': 'Datenschutzerklärung',
      'footer.cookies': 'Cookies'
    }
  };

  var currentLang = DEFAULT_LANG;

  var header = document.getElementById('header');
  var burger = document.querySelector('.header__burger');
  var drawer = document.getElementById('mobile-drawer');
  var drawerBackdrop = document.querySelector('[data-drawer-close]');
  var drawerLinks = document.querySelectorAll('.header__drawer-link');
  var contactForm = document.getElementById('contact-form');
  var toast = document.getElementById('toast');
  var navLinks = document.querySelectorAll('.header__nav-link, .header__drawer-link');
  var sections = document.querySelectorAll('section[id]');
  var backToTop = document.getElementById('back-to-top');
  var langButtons = document.querySelectorAll('.lang-switcher__btn');
  var langSwitchers = document.querySelectorAll('.lang-switcher');

  var toastTimer = null;

  function initContactLinks() {
    var telegramUrl = SITE_CONTACT.telegram;
    var whatsappDigits = (SITE_CONTACT.whatsapp || '').replace(/\D/g, '');
    var whatsappUrl = whatsappDigits ? 'https://wa.me/' + whatsappDigits : '';

    document.querySelectorAll('[data-contact-link="telegram"]').forEach(function (el) {
      if (telegramUrl) el.href = telegramUrl;
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

    window.dispatchEvent(new CustomEvent('portfolio-lang-changed', { detail: { lang: lang } }));
  }

  function initLanguage() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) { /* ignore */ }

    if (stored && LANGS.indexOf(stored) !== -1) {
      setLanguage(stored);
    } else {
      setLanguage(DEFAULT_LANG);
    }

    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.dataset.lang);
      });
    });
  }

  /* ------------------------------------------------------------------
     Sticky header scroll state
     ------------------------------------------------------------------ */
  function updateHeaderScroll() {
    if (!header) return;
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  /* ------------------------------------------------------------------
     Back to top
     ------------------------------------------------------------------ */
  function updateBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle('back-to-top--visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      var hero = document.getElementById('hero');
      if (hero) smoothScrollTo(hero);
    });
  }

  /* ------------------------------------------------------------------
     Mobile drawer
     ------------------------------------------------------------------ */
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

  if (burger) {
    burger.addEventListener('click', toggleDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
      burger.focus();
    }
  });

  /* ------------------------------------------------------------------
     In-page scroll without hash in URL
     ------------------------------------------------------------------ */
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
    if (legacyId) {
      scrollToSectionId(legacyId);
    }
    if (history.replaceState) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  /* ------------------------------------------------------------------
     Active nav link highlighting
     ------------------------------------------------------------------ */
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

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ------------------------------------------------------------------
     Contact form → Telegram (via LEAD_CONFIG.webhookUrl)
     ------------------------------------------------------------------ */
  function isLeadFormEnabled() {
    if (window.LEAD_CONFIG && window.LEAD_CONFIG.enabled === false) {
      return false;
    }
    return Boolean(getLeadWebhookUrl());
  }

  function getLeadWebhookUrl() {
    if (window.LEAD_CONFIG && window.LEAD_CONFIG.webhookUrl) {
      return String(window.LEAD_CONFIG.webhookUrl).trim();
    }
    return '';
  }

  function showToast(messageKey, isError) {
    if (!toast) return;

    var messageEl = toast.querySelector('.toast__message');
    if (messageEl && messageKey) {
      messageEl.setAttribute('data-i18n', messageKey);
      messageEl.textContent = t(currentLang, messageKey);
    }

    toast.classList.toggle('toast--error', Boolean(isError));
    toast.classList.add('toast--visible');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(function () {
      toast.classList.remove('toast--visible');
      toast.classList.remove('toast--error');
      if (messageEl) {
        messageEl.setAttribute('data-i18n', 'toast.success');
        messageEl.textContent = t(currentLang, 'toast.success');
      }
    }, 5000);
  }

  function submitLead(form) {
    var webhookUrl = getLeadWebhookUrl();
    var guards = window.MoraSecurity && window.MoraSecurity.leadPayloadGuards
      ? window.MoraSecurity.leadPayloadGuards()
      : { loadedAt: Date.now(), elapsedMs: 0 };

    var payload = {
      name: form.name.value.trim().slice(0, 120),
      contact: form.contact.value.trim().slice(0, 200),
      message: form.message.value.trim().slice(0, 2000),
      source: 'morastudio.de',
      lang: localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG,
      website: form.website ? form.website.value : '',
      loadedAt: guards.loadedAt,
      elapsedMs: guards.elapsedMs
    };

    if (window.LEAD_CONFIG && window.LEAD_CONFIG.formToken) {
      payload.token = String(window.LEAD_CONFIG.formToken);
    }

    if (payload.website) {
      return Promise.resolve({ ok: true });
    }

    if (!webhookUrl) {
      return Promise.resolve({ ok: false, error: 'not_configured' });
    }

    if (webhookUrl.indexOf('http://127.0.0.1') === 0 || webhookUrl.indexOf('http://localhost') === 0) {
      return fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (res) {
        return res.json().then(function (data) {
          return data && data.ok ? { ok: true } : { ok: false, error: 'server' };
        });
      }).catch(function () {
        return { ok: false, error: 'network' };
      });
    }

    return fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function () {
      return { ok: true };
    }).catch(function () {
      return { ok: false, error: 'network' };
    });
  }

  function clearFieldErrors(form) {
    form.querySelectorAll('.form-field--error').forEach(function (field) {
      field.classList.remove('form-field--error');
    });
  }

  if (contactForm) {
    var submitBtn = contactForm.querySelector('button[type="submit"]');
    var leadFormEnabled = isLeadFormEnabled();

    if (!leadFormEnabled) {
      contactForm.classList.add('contact__form--disabled');
      contactForm.querySelectorAll('input, textarea').forEach(function (el) {
        el.disabled = true;
      });
      if (submitBtn) submitBtn.disabled = true;
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!isLeadFormEnabled()) {
        showToast('form.disabled', true);
        return;
      }

      if (window.MoraSecurity) {
        var guard = window.MoraSecurity.canSubmitLeadForm();
        if (!guard.ok) {
          if (guard.reason === 'rate_limited') {
            showToast('form.rateLimited', true);
          } else if (guard.reason === 'too_fast') {
            showToast('form.tooFast', true);
          } else {
            showToast('toast.success', false);
          }
          return;
        }
      }

      clearFieldErrors(contactForm);

      var privacy = contactForm.querySelector('#contact-privacy');
      if (privacy && !privacy.checked) {
        showToast('form.consentRequired', true);
        return;
      }

      var valid = contactForm.checkValidity();
      if (!valid) {
        contactForm.querySelectorAll(':invalid').forEach(function (input) {
          var field = input.closest('.form-field');
          if (field) field.classList.add('form-field--error');
        });
        contactForm.reportValidity();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t(currentLang, 'form.sending');
      }

      submitLead(contactForm).then(function (result) {
        if (result.ok) {
          if (window.MoraSecurity) {
            window.MoraSecurity.recordLeadSubmit();
          }
          contactForm.reset();
          showToast('toast.success', false);
        } else if (result.error === 'not_configured') {
          showToast('form.notConfigured', true);
        } else {
          showToast('form.error', true);
        }
      }).finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = t(currentLang, 'form.submit');
        }
      });
    });
  }

  initContactLinks();
  initLanguage();
})();
