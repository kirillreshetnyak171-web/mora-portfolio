(function () {
  'use strict';

  var data = window.LEGAL_IMPRESSUM;
  if (!data) return;

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  function setHref(id, href, label) {
    var el = document.getElementById(id);
    if (el && href) {
      el.href = href;
      el.textContent = label || href.replace(/^https?:\/\//, '');
    }
  }

  setText('legal-provider-name', data.name);
  setText('legal-brand', data.brand);
  setText('legal-location', [data.city, data.country].filter(Boolean).join(', '));
  setText('legal-phone', data.phone);
  setText('legal-responsible', data.name);

  setHref('legal-telegram', data.telegram, 't.me/qwe171qw');

  var emailLink = document.getElementById('legal-email-link');
  if (emailLink && data.email) {
    emailLink.href = 'mailto:' + data.email;
    emailLink.textContent = data.email;
  }

  var vatEl = document.getElementById('legal-vat-note');
  if (vatEl) {
    if (data.smallBusinessNote) {
      vatEl.textContent = data.smallBusinessNote;
    } else {
      vatEl.hidden = true;
    }
  }
})();
