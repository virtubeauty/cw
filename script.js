(function () {
  'use strict';

  // ===== Copy to clipboard =====
  function initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-copy-target');
        var input = document.getElementById(targetId);

        if (!input) return;

        input.select();
        input.setSelectionRange(0, 99999);

        try {
          navigator.clipboard.writeText(input.value).then(function () {
            var originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.classList.add('copied');

            setTimeout(function () {
              btn.textContent = originalText;
              btn.classList.remove('copied');
            }, 2000);
          });
        } catch (err) {
          // Fallback for older browsers
          document.execCommand('copy');
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        }
      });
    });
  }

  // ===== Scroll-triggered fade-in =====
  function initScrollAnimations() {
    var fadeElements = document.querySelectorAll('.fade-in');
    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(function (el) {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // ===== Newsletter form =====
  function initNewsletterForm() {
    var form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = form.querySelector('input[name="email"]');
      var email = emailInput && emailInput.value ? emailInput.value.trim() : '';

      if (!email) {
        if (emailInput) emailInput.focus();
        return;
      }

      // Placeholder: in production, this would submit to an API
      console.log('Newsletter signup:', email);
      alert('Thanks for subscribing! You\'re on the list.');

      if (emailInput) emailInput.value = '';
    });
  }

  // ===== Init on DOM ready =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  function run() {
    initCopyButtons();
    initScrollAnimations();
    initNewsletterForm();
  }
})();
