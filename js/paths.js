(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PATH_COUNT = prefersReduced ? 12 : 36;
  var DELAY_STEP = 0.15;

  function buildPaths(position, count) {
    var paths = [];
    var i;
    for (i = 0; i < count; i++) {
      paths.push({
        d: 'M-' + (380 - i * 5 * position) + ' -' + (189 + i * 6) +
          'C-' + (380 - i * 5 * position) + ' -' + (189 + i * 6) +
          ' -' + (312 - i * 5 * position) + ' ' + (216 - i * 6) +
          ' ' + (152 - i * 5 * position) + ' ' + (343 - i * 6) +
          'C' + (616 - i * 5 * position) + ' ' + (470 - i * 6) +
          ' ' + (684 - i * 5 * position) + ' ' + (875 - i * 6) +
          ' ' + (684 - i * 5 * position) + ' ' + (875 - i * 6),
        width: 0.5 + i * 0.03,
        opacity: 0.1 + i * 0.03,
        duration: 20 + Math.random() * 10
      });
    }
    return paths;
  }

  function renderLayer(container, position) {
    if (!container || container.querySelector('svg')) return;

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 696 316');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'Background paths';
    svg.appendChild(title);

    buildPaths(position, PATH_COUNT).forEach(function (path, id) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      el.setAttribute('d', path.d);
      el.setAttribute('stroke-width', String(path.width));
      el.setAttribute('stroke-opacity', String(path.opacity));
      if (!prefersReduced) {
        el.setAttribute('stroke-dasharray', '400 800');
        el.style.animationDuration = path.duration + 's';
        el.style.animationDelay = (id * DELAY_STEP) + 's';
      }
      svg.appendChild(el);
    });

    container.appendChild(svg);
  }

  function initHeroPaths() {
    var bg = document.querySelector('.section-paths__bg--hero');
    if (!bg) return;

    var forward = document.createElement('div');
    forward.className = 'paths-layer';
    bg.appendChild(forward);
    renderLayer(forward, 1);

    var reverse = document.createElement('div');
    reverse.className = 'paths-layer paths-layer--alt';
    bg.appendChild(reverse);
    renderLayer(reverse, -1);
  }

  function splitHeroTitle() {
    if (prefersReduced) return;

    var title = document.getElementById('hero-title');
    if (!title || title.dataset.lettersReady === 'true') return;

    var text = title.textContent.trim();
    if (!text) return;

    title.dataset.lettersReady = 'true';
    title.textContent = '';
    title.classList.add('hero__title--split');

    Array.from(text).forEach(function (letter, index) {
      var span = document.createElement('span');
      span.className = 'hero__letter';
      span.textContent = letter;
      span.style.animationDelay = (index * 0.04) + 's';
      title.appendChild(span);
    });
  }

  function scheduleHeroEnhancements() {
    var run = function () {
      initHeroPaths();
      splitHeroTitle();
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(run, { timeout: 500 });
    } else {
      window.setTimeout(run, 50);
    }
  }

  function init() {
    if (document.readyState === 'complete') {
      scheduleHeroEnhancements();
    } else {
      window.addEventListener('load', scheduleHeroEnhancements);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
