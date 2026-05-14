// Global smooth-scrolling helper
// Usage:
// - Add data-target="elementId" to any clickable element (button, div, etc.)
// - Or use anchor links: <a href="#elementId">...
// The script will account for a fixed <nav> height and focus the target for accessibility.
(function () {
  function scrollToElementById(id, updateHistory = true) {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector('nav');
    const navHeight = nav ? Math.ceil(nav.getBoundingClientRect().height) : 0;
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY - navHeight - 12;

    window.scrollTo({ top, behavior: 'smooth' });

    // accessibility: make focusable and move focus
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });

    // update hash without jump
    if (updateHistory) {
      try {
        history.replaceState(null, '', '#' + id);
      } catch (err) {
        // ignore
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Delegated click handling for elements with data-target
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-target]');
      if (!btn) return;
      var id = btn.dataset.target;
      if (!id) return;
      e.preventDefault();
      scrollToElementById(id, true);
    });

    // Smooth scroll for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        if (!href || href === '#') return;
        var id = href.slice(1);
        var el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        scrollToElementById(id, true);
      });
    });
  });
})();

