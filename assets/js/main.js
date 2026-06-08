/* ============================================================
   Quality Care Private Hospital — Main JavaScript
   Matches the original React app behaviour as static site
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Hamburger toggle ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('headerNav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
    // Close nav on link click (mobile)
    nav.querySelectorAll('.header-nav-link, .header-dropdown-item').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
      });
    });
  }

  // --- Alphabet grid ---
  const alphabetGrid = document.getElementById('alphabetGrid');
  if (alphabetGrid) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
    letters.forEach(function (ch) {
      var btn = document.createElement('button');
      btn.className = 'home-alphabet-btn';
      btn.textContent = ch;
      btn.addEventListener('click', function () { /* placeholder — implement page search */ });
      alphabetGrid.appendChild(btn);
    });
  }

  // --- Current year in footer ---
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Active nav link highlight ---
  var currentPath = window.location.pathname;
  nav.querySelectorAll('.header-nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && currentPath.indexOf(href) !== -1 && href !== '#') {
      link.style.color = 'var(--c-black)';
    }
  });

});
