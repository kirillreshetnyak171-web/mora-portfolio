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
      'projects.1.title': 'SmartSorter',
      'projects.1.task': 'Lots of customer complaints and requests. Someone reads each one and decides which department should handle it — hours of routine work.',
      'projects.1.solution': 'A desktop app: upload a spreadsheet, AI suggests how to split items by department, you check and confirm.',
      'projects.1.result': 'A ready draft in minutes instead of hours of manual sorting — the final decision stays with a person.',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Studying warehouse logistics formulas (IHK)',
      'projects.2.solution': 'Desktop app Python + Flet — formula reference, exam, Socratic method, RU/DE/EN',
      'process.title': 'How I work',
      'process.subtitle': 'From idea to working tool — fast and transparent',
      'process.1.title': 'Call',
      'process.1.text': 'We discuss the task and context',
      'process.2.title': 'Scope',
      'process.2.text': 'We write down what the outcome should be',
      'process.3.title': 'MVP in days',
      'process.3.text': 'A working prototype you can try',
      'process.4.title': 'Iterations',
      'process.4.text': 'Improvements based on your feedback',
      'contact.title': 'Get in touch',
      'contact.subtitle': "Describe your task — we'll reply on Telegram or WhatsApp",
      'contact.heading': 'Do you have a task?',
      'contact.lead': 'Write on Telegram or WhatsApp. The form below is coming soon.',
      'form.name': 'Name',
      'form.contact': 'Email / Telegram',
      'form.message': 'Message',
      'form.submit': 'Send request',
      'form.notice': 'Online form coming soon — for now, message us on Telegram or WhatsApp.',
      'toast.success': "Thank you! I'll get back to you soon.",
      'footer.copy': '© 2026 Mora'
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
      'projects.1.title': 'SmartSorter',
      'projects.1.task': 'Много жалоб и обращений от клиентов. Сотрудник по одному читает каждое и решает, в какой отдел передать — уходит много времени.',
      'projects.1.solution': 'Программа на компьютер: загружаете таблицу с обращениями, ИИ предлагает разбор по отделам, вы проверяете и подтверждаете.',
      'projects.1.result': 'Вместо часов ручной работы — черновик за несколько минут. Финальное решение остаётся за человеком.',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Учёба по формулам складской логистики IHK',
      'projects.2.solution': 'Десктоп-приложение Python + Flet — справочник формул, экзамен, метод Сократа, RU/DE/EN',
      'process.title': 'Как работаю',
      'process.subtitle': 'От идеи до рабочего инструмента — быстро и прозрачно',
      'process.1.title': 'Созвон',
      'process.1.text': 'Обсуждаем задачу и контекст',
      'process.2.title': 'Фиксируем задачу',
      'process.2.text': 'Прописываем, что должно получиться',
      'process.3.title': 'MVP за несколько дней',
      'process.3.text': 'Рабочий прототип, который можно потрогать',
      'process.4.title': 'Доработки',
      'process.4.text': 'Улучшаем по вашей обратной связи',
      'contact.title': 'Связаться',
      'contact.subtitle': 'Опишите задачу — ответим в Telegram или WhatsApp',
      'contact.heading': 'Есть задача?',
      'contact.lead': 'Напишите в Telegram или WhatsApp. Форма ниже скоро заработает.',
      'form.name': 'Имя',
      'form.contact': 'Email / Telegram',
      'form.message': 'Сообщение',
      'form.submit': 'Отправить заявку',
      'form.notice': 'Онлайн-форма скоро заработает — пока напишите в Telegram или WhatsApp.',
      'toast.success': 'Спасибо! Свяжусь с вами в ближайшее время.',
      'footer.copy': '© 2026 Mora'
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
      'projects.1.title': 'SmartSorter',
      'projects.1.task': 'Viele Beschwerden und Anfragen von Kunden. Ein Mitarbeiter liest jede einzeln und entscheidet, welche Abteilung zuständig ist — viel Routinearbeit.',
      'projects.1.solution': 'Desktop-Programm: Tabelle hochladen, KI schlägt Aufteilung nach Abteilungen vor, Sie prüfen und bestätigen.',
      'projects.1.result': 'Statt stundenlanger Arbeit ein Entwurf in Minuten — die finale Entscheidung trifft ein Mensch.',
      'projects.2.badge': 'Pet project v1.0',
      'projects.2.title': 'SokraLog',
      'projects.2.task': 'Lernen von Lagerlogistik-Formeln (IHK)',
      'projects.2.solution': 'Desktop-App Python + Flet — Formelsammlung, Prüfung, Sokrates-Methode, RU/DE/EN',
      'process.title': 'So arbeite ich',
      'process.subtitle': 'Von der Idee zum Tool — schnell und transparent',
      'process.1.title': 'Gespräch',
      'process.1.text': 'Wir besprechen Aufgabe und Kontext',
      'process.2.title': 'Aufgabe festhalten',
      'process.2.text': 'Wir halten fest, was am Ende stehen soll',
      'process.3.title': 'MVP in wenigen Tagen',
      'process.3.text': 'Ein funktionsfähiger Prototyp zum Ausprobieren',
      'process.4.title': 'Iterationen',
      'process.4.text': 'Verbesserungen nach Ihrem Feedback',
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Beschreiben Sie Ihre Aufgabe — wir antworten auf Telegram oder WhatsApp',
      'contact.heading': 'Haben Sie eine Aufgabe?',
      'contact.lead': 'Schreiben Sie auf Telegram oder WhatsApp. Das Formular kommt bald.',
      'form.name': 'Name',
      'form.contact': 'E-Mail / Telegram',
      'form.message': 'Nachricht',
      'form.submit': 'Anfrage senden',
      'form.notice': 'Online-Formular kommt bald — schreiben Sie uns vorerst auf Telegram oder WhatsApp.',
      'toast.success': 'Danke! Ich melde mich in Kürze.',
      'footer.copy': '© 2026 Mora'
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
     Contact form — demo toast
     ------------------------------------------------------------------ */
  function showToast() {
    if (!toast) return;

    toast.classList.add('toast--visible');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(function () {
      toast.classList.remove('toast--visible');
    }, 4000);
  }

  function clearFieldErrors(form) {
    form.querySelectorAll('.form-field--error').forEach(function (field) {
      field.classList.remove('form-field--error');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearFieldErrors(contactForm);

      var valid = contactForm.checkValidity();
      if (!valid) {
        contactForm.querySelectorAll(':invalid').forEach(function (input) {
          var field = input.closest('.form-field');
          if (field) field.classList.add('form-field--error');
        });
        contactForm.reportValidity();
        return;
      }

      contactForm.reset();
      showToast();
    });
  }

  initContactLinks();
  initLanguage();
})();
