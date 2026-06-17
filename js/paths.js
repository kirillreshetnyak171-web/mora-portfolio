(function () {
  'use strict';

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
        opacity: 0.08 + i * 0.025,
        duration: 20 + Math.random() * 10
      });
    }
    return paths;
  }

  function renderLayer(container, position, pathCount, delayStep) {
    if (!container || container.querySelector('svg')) return;

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 696 316');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'Background paths';
    svg.appendChild(title);

    buildPaths(position, pathCount).forEach(function (path, id) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      el.setAttribute('d', path.d);
      el.setAttribute('stroke-width', String(path.width));
      el.setAttribute('stroke-opacity', String(path.opacity));
      el.setAttribute('stroke-dasharray', '400 800');
      el.style.animationDuration = path.duration + 's';
      el.style.animationDelay = (id * delayStep) + 's';
      svg.appendChild(el);
    });

    container.appendChild(svg);
  }

  function initPathBackground(bg) {
    var count = parseInt(bg.getAttribute('data-paths-count'), 10) || 18;
    var withAlt = bg.getAttribute('data-paths-alt') === 'true';
    var delayStep = parseFloat(bg.getAttribute('data-paths-delay')) || 0.12;

    var forward = document.createElement('div');
    forward.className = 'paths-layer';
    bg.appendChild(forward);
    renderLayer(forward, 1, count, delayStep);

    if (withAlt) {
      var reverse = document.createElement('div');
      reverse.className = 'paths-layer paths-layer--alt';
      bg.appendChild(reverse);
      renderLayer(reverse, -1, count, delayStep);
    }
  }

  var splitting = false;

  function animateHeroTitle() {
    var title = document.getElementById('hero-title');
    if (!title || splitting) return;

    var text = title.textContent.trim();
    if (!text || title.querySelector('.hero__letter')) return;

    splitting = true;
    title.textContent = '';
    title.classList.add('hero__title--split');

    Array.from(text).forEach(function (letter, index) {
      var span = document.createElement('span');
      span.className = 'hero__letter';
      span.textContent = letter;
      span.style.animationDelay = index * 0.035 + 's';
      title.appendChild(span);
    });
    splitting = false;
  }

  function watchHeroTitle() {
    var title = document.getElementById('hero-title');
    if (!title) return;

    var observer = new MutationObserver(function () {
      if (splitting) return;
      if (!title.querySelector('.hero__letter')) {
        window.requestAnimationFrame(animateHeroTitle);
      }
    });

    observer.observe(title, { childList: true, characterData: true, subtree: true });
  }

  function init() {
    document.querySelectorAll('.section-paths__bg').forEach(initPathBackground);
    watchHeroTitle();
    animateHeroTitle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
