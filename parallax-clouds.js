(function(win, d) {

  var $ = d.querySelector.bind(d);

  var cloud1 = $('#cloud-1');
  var cloud2 = $('#cloud-2');
  var cloud3 = $('#cloud-3');
  var cloud4 = $('#cloud-4');
  var cloud5 = $('#cloud-5');
  var cloud6 = $('#cloud-6');
  var cloud7 = $('#cloud-7');
  var cloud8 = $('#cloud-8');
  var cloud9 = $('#cloud-9');

  var mainBG = $('section#back');

  function onResize () {
    updateElements(win.pageYOffset);
  }

  function onScroll (evt) {
    updateElements(win.pageYOffset);
  }

  function updateElements (yPos) {

    var relativeY = yPos / 3000;

    mainBG.style.backgroundPosition = 'center ' + pos(0, -600, relativeY, 0) + 'px';

    cloud1.style.top = pos(254, -1400, relativeY, 0) + 'px';
    cloud1.style.left = 484 + 'px';

    cloud2.style.top = pos(954, -2400, relativeY, 0) + 'px';
    cloud2.style.left = 84 + 'px';

    cloud3.style.top = pos(1054, -900, relativeY, 0) + 'px';
    cloud3.style.left = 584 + 'px';

    cloud4.style.top = pos(1400, -3900, relativeY, 0) + 'px';
    cloud4.style.left = 44 + 'px';

    cloud5.style.top = pos(1730, -2900, relativeY, 0) + 'px';
    cloud5.style.left = -40 + 'px';

    cloud6.style.top = pos(2860, -4900, relativeY, 0) + 'px';
    cloud6.style.left = 325 + 'px';

    cloud7.style.top = pos(2550, -1900, relativeY, 0) + 'px';
    cloud7.style.left = 725 + 'px';

    cloud8.style.top = pos(2300, -700, relativeY, 0) + 'px';
    cloud8.style.left = 570 + 'px';

    cloud9.style.top = pos(3700, -6000, relativeY, 0) + 'px';
    cloud9.style.left = 640 + 'px';

  }

  function pos(base, range, relY, offset) {
    return base + limit(0, 1, relY - offset) * range;
  }

  function prefix(obj, prop, value) {
    var prefs = ['webkit', 'moz', 'o', 'ms'];
    for (var pref in prefs) {
      obj[prefs[pref] + prop] = value;
    }
  }

  function limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }

  (function() {

    updateElements(win.pageYOffset);

    cloud1.classList.add('force-show');
    cloud2.classList.add('force-show');
    cloud3.classList.add('force-show');
    cloud4.classList.add('force-show');
    cloud5.classList.add('force-show');
    cloud6.classList.add('force-show');
    cloud7.classList.add('force-show');
    cloud8.classList.add('force-show');
    cloud9.classList.add('force-show');
  })();

  win.addEventListener('resize', onResize, false);
  win.addEventListener('scroll', onScroll, false);

})(window, document);