/* ============================================================
   Quality Care Private Hospital — Main JavaScript
   Phase 1 — Static Website (Netlify)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Header scroll effect ---
  const header = document.querySelector('.header');
  let lastScroll = 0;
  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    if (y > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = y;
  });

  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
      // Toggle aria
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    // Close menu on link click (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Active nav link highlight ---
  const currentPath = window.location.pathname;
  nav.querySelectorAll('a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
    // Handle root
    if ((currentPath === '/' || currentPath.endsWith('index.html')) && href === 'index.html') {
      link.classList.add('active');
    }
  });

  // --- Stat counter animation (home page) ---
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let animated = false;
    function animateStats() {
      if (animated) return;
      statNumbers.forEach(function (el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const step = Math.ceil(target / 60);
        let current = 0;
        const timer = setInterval(function () {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current.toLocaleString() + suffix;
        }, duration / 60);
      });
      animated = true;
    }

    // Intersection Observer for stats
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(document.querySelector('.stats-bar'));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Current year in footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
