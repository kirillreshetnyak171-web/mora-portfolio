(function () {
  'use strict';

  var LANGS = ['en', 'ru', 'de'];
  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'en';

  var SITE_CONTACT = {
    telegram: 'https://t.me/qwe171qw',
    whatsapp: '491603203111'
  };

  var translations = { en: {}, ru: {}, de: {} };

  function stringsListToTranslations(data) {
    var result = { en: {}, ru: {}, de: {} };
    if (!data || !data.items) return result;
    data.items.forEach(function (item) {
      if (!item || !item.key) return;
      if (item.en !== undefined) result.en[item.key] = item.en;
      if (item.ru !== undefined) result.ru[item.key] = item.ru;
      if (item.de !== undefined) result.de[item.key] = item.de;
    });
    return result;
  }

  function loadSiteContent() {
    return fetch('/content/site-strings.json?v=1')
      .then(function (res) {
        if (!res.ok) throw new Error('content');
        return res.json();
      })
      .then(function (data) {
        translations = stringsListToTranslations(data);
        return fetch('/content/contacts.json?v=1');
      })
      .then(function (res) {
        if (!res.ok) return null;
        return res.json();
      })
      .then(function (contacts) {
        if (contacts) {
          if (contacts.telegram) SITE_CONTACT.telegram = contacts.telegram;
          if (contacts.whatsapp) SITE_CONTACT.whatsapp = contacts.whatsapp;
        }
      })
      .catch(function () { /* keep defaults */ });
  }

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

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'language_change', { language: lang });
    }
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
    var payload = {
      name: form.name.value.trim(),
      contact: form.contact.value.trim(),
      message: form.message.value.trim(),
      source: 'morastudio.de',
      lang: localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG,
      website: form.website ? form.website.value : ''
    };

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

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t(currentLang, 'form.sending');
      }

      submitLead(contactForm).then(function (result) {
        if (result.ok) {
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

  loadSiteContent().then(function () {
    initContactLinks();
    initLanguage();
  });
})();
